const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeControllers {

    async create(req, res) { // создание типа

        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)

    }

    async getAll(req, res) { // получение всех типов
        
        const types = await Type.findAll()
        return res.json(types)

    }

}

module.exports = new TypeControllers()