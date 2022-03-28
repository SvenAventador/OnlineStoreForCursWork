const jwt = require('jsonwebtoken')

module.exports = function(role) {

    return function (req, res, next) {

        if (req.method === "OPTIONS") {
            next()
        }

        try {

            const token = req.headers.authorization.split(' ')[1] // нужно выцепить часть токена. Пример: Bearer sjdfiosjdfoijsofd, нам нужен лишь sjdfiosjdfoijsofd

            if (!token) {
                return res.status(401).json({message: "The user is not logged in"})
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY)

            if (decoded.role !== role) {
                return res.status(403).json({message: "You don't have the right to do that"})
            }

            req.user = decoded;
            next()

        } 
        catch (e) {
            res.status(401).json({message: "The user is not logged in"})
        }
    };
}