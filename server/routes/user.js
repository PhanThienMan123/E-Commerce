const router = require('express').Router()
const controller = require('../controller/user')

router.post('/register', controller.register)

module.exports=router