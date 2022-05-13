const express = require('express')
const router = express.Router()
const passport = require('../config/passport')
const { authenticated, authenticatedAdmin } = require('../middleware/auth')
const userController = require('../controllers/user-controller')
const { apiErrorHandler } = require('../middleware/error-handler')

router.post('/users', userController.signUp)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)

router.get('/users/:id', authenticated, userController.getUser)

router.use('/', apiErrorHandler)
module.exports = router