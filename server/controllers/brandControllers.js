const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {

    async create(req, res) { // создание бренда

        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)

    }

    async getAll(req, res) { // получение всех брендов

        const brands = await Brand.findAll()
        return res.json(brands)

    }

}

module.exports = new BrandController()