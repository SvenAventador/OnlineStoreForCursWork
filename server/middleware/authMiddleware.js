const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) { // использование методов POST, GET, PUT, DELETE

    if(req.method === "OPTIONS") {
        next()
    }

    try {

        const token = req.headers.authorization.split(' ')[1] // нужно выцепить часть токена. Пример: Bearer sjdfiosjdfoijsofd, нам нужен лишь sjdfiosjdfoijsofd

        if(!token) {
            res.status(401).json({message: "The user is not logged in"})
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY) // verify проверяет токен на валидность

        req.user = decoded

        next()

    }

    catch(e) {
        res.status(401).json({message: "The user is not logged in"})
    }

}