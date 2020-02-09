const {Router} = require('express'),
      User = require('../models/user'),
      bcrypt = require('bcryptjs'),
      emailText = require('../email/registration'),
      sgMail = require('@sendgrid/mail'),
      crypto = require('crypto'),
      resetPass = require('../email/reset'),
      newPass = require('../email/newPassword'),
      router = Router();

router.get('/login', async (req, res) => {
    
    res.render('auth/login', {
        title: 'Авторизация',
        isLogin: true,
        loginError: req.flash('loginError'),
        registerError: req.flash('registerError'),
    })
})

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        if(user)  {
            const areSame = await bcrypt.compare(password, user.password);
                if(areSame) {
                req.session.user = user
                req.session.isAuthenticated = true
                req.session.save((err) => {
                    if(err) {
                        throw err
                    }
                    res.redirect('/')
                })
            } else {
                req.flash('loginError', 'Неправильный логин или пароль')
                res.redirect('/auth/login#login')
            }
        } else {
            req.flash('loginError', 'Неправильный логин или пароль')
            res.redirect('/auth/login#login')
        }
    } catch(e) {
        console.log(e)
    }
})

router.get('/logout', async(req, res) => {
    req.session.destroy( () => {
        res.redirect('/auth/login#login')
    })
})

router.post('/register', async (req, res) => {
    try{
        let {regemail, name, regpassword, confirm} = req.body;
        regemail = regemail.toLowerCase();
        const candidate = await User.findOne({email: regemail});
    
        if(candidate) {
            req.flash('registerError', 'Email уже используется')
            res.redirect('/auth/login#register')
        } else {
            const hashPassword = await bcrypt.hash(regpassword, 10)
            const user = new User({
                email: regemail.toLowerCase(), password: hashPassword, name, cart: {items: []}
                });
            await user.save()
            res.redirect('/auth/login#login')
            await sgMail.send(emailText(regemail, regpassword, name))
        }
    } catch(e) {
        console.log(e)
    }
   
})

router.get('/reset', (req, res) => {
    res.render('auth/reset', {
        title: "Сбросить пароль",
        error: req.flash('error')
    })
})

router.post('/reset', (req, res) => {
    try{
        crypto.randomBytes(32, async (err, buffer) => {
            if(err) {
                req.flash('error', 'Упс, что-то пошло не так, повторите, пожалуйста, позже!')
                return res.redirect('/auth/reset')
            }
            const token = buffer.toString('hex'),
                  candidate = await User.findOne({email: req.body.email});

            if(candidate) {
                candidate.resetToken = token
                candidate.resetTokenExp = Date.now() + 60 * 60 * 1000;
                await candidate.save();
                await sgMail.send(resetPass(candidate.email, token))
                req.flash('loginError', 'Инструкции по восстановлению доступа были отправлены на Ваш email')
                return res.redirect('/auth/login')
            } else {
                req.flash('error', 'Такой email не зарегистрирован')
                res.redirect('/auth/reset')
            }

        })
    }
    catch(err) {
        console.log(err)
    }
})

router.get('/password/:token', async (req, res) => {
    try {
        if(!req.params.token) {
            return res.redirect('/auth/login')
        }
        const user = await User.findOne({
            resetToken: req.params.token,
            resetTokenExp: {$gt: Date.now()}
        })
        if(!user) {
            return res.redirect('/auth/login')
        } else {
            res.render('auth/password', {
                title: "Восстановить пароль",
                error: req.flash('error'),
                token: req.params.token,
                userId: user._id.toString()
            })
        }
    } catch(err) {
        console.log(err)
    }
})

router.post('/password', async (req, res) => {
    try{
        const user = await User.findOne({
            _id: req.body.userId,
            resetToken: req.body.token,
            resetTokenExp: {$gt: Date.now()}
        })

        if(user) {
            user.password = await bcrypt.hash(req.body.password, 10);
            user.resetTokenExp = undefined;
            user.resetToken = undefined;

            await user.save()
            res.redirect('/auth/login')
            await sgMail.send(newPass(user.email, req.body.password))
        } else {
            req.flash('loginError', 'Время токена истекло, попробуйте еще раз')
            res.redirect('/auth/login')
        }
    } catch(err) {
        console.log(err)
    }
})


module.exports = router