const express = require('express')
const router = express.Router()
const applesController = require('../controllers/apples_controller')
const orangesController = require('../controllers/oranges_controller')
const pearsController = require('../controllers/pears_controller')
const bananasController = require('../controllers/bananas_controller')
const cheesesController = require('../controllers/cheeses_controller')
// for CORS
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

router.route('/apples')
.get(applesController.getAll)

router.route('/oranges')
.get(orangesController.getAll)

router.route('/pears')
.get(pearsController.getAll)

router.route('/bananas')
.get(bananasController.getAll)

router.route('/cheeses')
.get(cheesesController.getAll)

module.exports = router
