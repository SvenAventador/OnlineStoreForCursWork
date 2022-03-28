const Router = require('express')
const router = new Router()
const userController = require('../controllers/userControllers.js')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration) // регистрация пользователя
router.post('/login', userController.login) // вход пользователя
router.get('/auth', authMiddleware, userController.check) // аутентификая пользователя

module.exports = router