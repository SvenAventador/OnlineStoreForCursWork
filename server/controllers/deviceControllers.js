const uuid = require('uuid') // генерация случайных id, которые не будут повторяться
const path = require('path') // путь к файлу
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {

    async create(req, res, next) { // создание девайса
        try {

            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) // path.resolve - адаптация под выбранную ОС
                                                                      // __dirname - нынешняя директоряи
                                                                      // '..' - путь на одну директорию назад
                                                                      // 'static' - нужная папка
                                                                      //fileName - файл фотографии, для выгрузки на сервер
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {

                info = JSON.parse(info) // если данные идут из form-data, то они приходят в виде строки => на бэке мы изменяем их в JSON-формат, с помощью JSON.parse, а на фронте форматируем обратно в js-объекты
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )

            }

            return res.json(device)

        }

        catch(e) {
            next(ApiError.NotFound(e.message))
        }

    }

    async getAll(req, res) { // получение всех девайсов

        let {brandId, typeId, limit, page} = req.query

        page = page || 1 // 1 страница по умолчанию
        limit = limit || 9 // 9 устройств на страницу по умолчанию

        let offset = page * limit - limit // отступ  при переходах на другие страницы

        let devices;

        if(!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }

        if(brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }

        if(!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }

        if(brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})
        }

        return res.json(devices)

    }

    async getOne(req, res) { // получение одного девайса

        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id}, // id нужного устройства
                include: [{model: DeviceInfo, as: 'info'}] // массив характеристик
            },
        )
        return res.json(device)
    }

}

module.exports = new DeviceController()