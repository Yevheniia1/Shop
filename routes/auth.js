const {Router} = require('express'),
      User = require('../models/user'),
      bcrypt = require('bcryptjs'),
      router = Router();

router.get('/login', async (req, res) => {
    res.render('auth/login', {
        title: 'Авторизация',
        isLogin: true,
        loginError: req.flash('loginError'),
        registerError: req.flash('registerError'),
    })
})

router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });

        if(user && bcrypt.compare(password, user.password) ) {
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
    } catch(e) {
        console.log(e)
    }
})

router.post('/register', async(req, res) => {
    try{
        const {regemail, name, regpassword, confirm} = req.body;
        const candidate = await User.findOne({ regemail });
    
        if(candidate) {
            req.flash('registerError', 'Email уже используется' )
            res.redirect('/auth/login#login')
        } else {
            const hashPassword = bcrypt.hash(regpassword, 10)
            const user = new User({
                email: regemail, password: hashPassword, name, cart: {items: []}
                });
            await user.save()
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

module.exports = router