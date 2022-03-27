const ApiError = require('../error/ApiError.js')

module.exports = function(err, req, res, next) { // ошибка, запрос, ответ, функция next передает работу следующему в цепочке middleware'у

    if(err instanceof ApiError) { // instanceof - принадлежит ли объект классу?
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Unexpected error"})

}