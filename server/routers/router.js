const Router = require('express')
const router = new Router()

const deviceRouter = require('./deviceRouters')
const userRouters = require('./userRouters')
const brandRouters = require('./brandRouters')
const typeRouters = require('./typeRouters')

router.use('/user', userRouters)
router.use('/type', typeRouters)
router.use('/brand', brandRouters)
router.use('/device', deviceRouter)

module.exports = router