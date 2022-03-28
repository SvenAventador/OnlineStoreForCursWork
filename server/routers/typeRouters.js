const Router = require('express')
const router = new Router()
const typeControllers = require('../controllers/typeControllers')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), typeControllers.create)
router.get('/', typeControllers.getAll)

module.exports = router