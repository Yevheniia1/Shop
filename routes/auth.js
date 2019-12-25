const {Router} = require('express'),
      User = require('../models/user')
      router = Router();

router.get('/login', async (req, res) => {
    res.render('auth/login', {
        title: 'Авторизация',
        isLogin: true
    })
})

router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });

        if(user && user.password === password ) {
            req.session.user = user
            req.session.isAuthenticated = true
            req.session.save((err) => {
                if(err) {
                    throw err
                }
                res.redirect('/')
            })
        } else {
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
            res.redirect('/auth/login#login')
        } else {
            const user = new User({
                email: regemail, password: regpassword, name, cart: {items: []}
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