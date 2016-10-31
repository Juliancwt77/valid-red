var express = require('express')
var router = express.Router()

var userController = require('../controllers/userController')

router.route('/')
      .get(userController.getSignup)
      .post(userController.postSignup)

module.exports = router
