const {Router} = require('express'),
      User = require('../models/user'),
      {validationResult} = require('express-validator'),
      {profileValidation} = require('../utils/validation'),
      router = Router();

router.get('/', (req, res) => {
    return res.render('profile', {
        title: 'Личный кабинет',
        isProfile: true,
        user: req.session.user,
        error: req.flash('error')
    })
})

router.post('/', profileValidation, async (req, res) => {
    try{
        const errors = validationResult(req);        
        if(!errors.isEmpty()){
            req.flash('error', errors.array()[0].msg)
            return res.status(422).redirect('/profile')
        }

        await User.findByIdAndUpdate(req.user, req.body)
        const user = await User.findOne({ _id: req.user })
        res.render('profile', {
            title: 'Личный кабинет',
            isProfile: true,
            error: req.flash('error'),
            user
        })

    } catch(err) {
        console.log(err)
    }
})

module.exports = router;