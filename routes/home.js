const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Главная страница',
        isHome: true,
        user: req.user ? req.user.toObject() : null,
        orderEnd: false
    })
})

module.exports = router