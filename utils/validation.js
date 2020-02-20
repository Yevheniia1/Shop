const {body} = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcryptjs')

exports.registerValidators = [
    body('regemail', 'Введите корректный email')
        .isEmail()
        .custom(async (value, {req}) => {
            const user = await User.findOne({ email: value });
            if(user) {
                return Promise.reject('Такой email уже зарегистрирован')
            }
        })
        .normalizeEmail(),
    body('name', 'Имя должно состоять минимум из 2 символов')
        .isLength({min: 2, max: 56})
        .trim(),
    body('regpassword', 'Пароль должен состоять из минимум 6 символов')
        .isLength({min: 6, max: 56})   
        .isAlphanumeric()
        .trim(),
    body('confirm')
        .custom((value, {req}) => {
            if(value !== req.body.password) {
                throw new Error('Пароль должны совпадать')
            }
            return true
        })
        .trim()
]

exports.loginValidators = [
    body('email')
        .isEmail()
        .custom( async (value, {req}) => {
            try{
                const user = await User.findOne({ email: value});
                if(!user) {
                    return Promise.reject('Неправильный логин или пароль')
                }
                return true
            } catch(err) {
                console.log(err)
            }    
        }),
    body('password')
        .isLength({min: 6, max: 56})   
        .isAlphanumeric()
        .custom( async (value, {req}) => {
            try {
                const user = await User.findOne({email: req.body.email}),
                areSame = await bcrypt.compare(value, user.password);
          
                if(areSame) {
                    req.session.user = user
                    req.session.isAuthenticated = true
                    req.session.save((err) => {
                        if(err) {
                            throw err
                        }
                    })
                } else {
                    return Promise.reject('Неправильный логин или пароль')
                }
            } catch(err) {
                console.log(err)
            }
        })
]

exports.productValidation = [
    body('title', 'Название должно состоять минимум из 3 символов')
        .isLength({min: 3})
        .trim(),
    body('price', 'Введите корректную цену')
        .isNumeric(),
]

exports.profileValidation = [
    body('name', 'Имя должно состоять минимум из 2 символов')
        .isLength({min: 2, max: 56})
        .trim(),
]