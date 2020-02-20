const {Router} = require('express'),
      User = require('../models/user'),
      {validationResult} = require('express-validator'),
      {profileValidation} = require('../utils/validation'),
      auth = require('../middleware/auth'),
      router = Router();

router.get('/', auth, (req, res) => {
    return res.render('profile', {
        title: 'Личный кабинет',
        isProfile: true,
        user: req.user.toObject(),
        error: req.flash('error')
    })
})

router.post('/', auth, profileValidation, async (req, res) => {
    try{
        const errors = validationResult(req);        
        if(!errors.isEmpty()){
            req.flash('error', errors.array()[0].msg)
            return res.status(422).redirect('/profile')
        }
        const user = await User.findByIdAndUpdate(req.user, req.body);
        await user.save()
        res.redirect('profile')
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;