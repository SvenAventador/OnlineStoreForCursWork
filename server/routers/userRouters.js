const Router = require('express')
const router = new Router()

router.post('/registration', ) // регистрация пользователя
router.post('/login', ) // вход пользователя
router.get('/auth', (req, res) => {
    res.json({message: "ALL WORKING"})
}) // аутентификая пользователя

module.exports = router