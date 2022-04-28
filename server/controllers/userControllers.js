const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt') // хэширование пароля и хранение их в бд в хэшированном виде
const {User, Cart} = require('../models/models')
const jwt = require('jsonwebtoken') // импорт jwt токена для регистрации и авторизации пользователя

const jwtGenerate = (id, email, role) => {

    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'}) // jwt.sign(payload, secretOrPrivateKey, [options, callback])
                                                                                                       // payload - данные пользователя
                                                                                                       // secretOrPrivateKey - секретный ключ, который знать должен "хранитель" сервера
                                                                                                       // options - время жизни секретного ключа и т.д.

}

class UserController {

    async registration(req, res, next) { // функция для регистрации пользователя

        const {email, password, role} = req.body

        if(!email || !password ) {
            return next(ApiError.NotFound('Uncorrect email or password'))
        }

        const candidate = await User.findOne({where: {email}})

        if(candidate) {
            return next(ApiError.NotFound('A user with such an email already exists'))
        }

        const hashPassword = await bcrypt.hash(password, 5) // хэширование пароля производится 5 раз. Зачем? Не знаю, пусть будет. Как грится, чтобы наверняка

        const user = await User.create({email, role, password: hashPassword})

        const cart = await Cart.create({userId: user.id}) // создание корзины под определенного пользователя

        const token = jwtGenerate(user.id, user.email, user.role)

        return res.json({token})

    }

    async login(req, res, next) { // функция для фхода пользователя

        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if(!user) {
            return next(ApiError.NotFound('A user not found'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)

        if(!comparePassword) {
            return next(ApiError.NotFound('You entered the wrong password'))
        }

        const token = jwtGenerate(user.id, user.email, user.role)

        return res.json({token})

    }

    async check(req, res, next) { // авторизирован ли пользователь?

        const token = jwtGenerate(req.user.id, req.user.email, req.user.role)
        return res.json({token})

    }

}

module.exports = new UserController()