const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt') // хэширование пароля и хранение их в бд в хэшированном виде
const {User, Cart} = require('../models/models')

class UserController {
   
    // TODO: create function for registration user
    // TODO: show in videos 58 minutes 14 second

    async registration(req, res) { // функция для регистрации пользователя

        const {emal, password, role} = req.body

        if(!email || !password ) {
            return next(ApiError.NotFound('Uncorrect email or password'))
        }

    }

    async login(req, res) { // функция для фхода пользователя

    }

    async check(req, res, next) { // авторизирован ли пользователь?
        
        const {id} = req.query

        if(!id) {
            return next(ApiError.BadGateaway('ID not defined!'))
        }

        res.json(id)
    }

}

module.exports = new UserController()