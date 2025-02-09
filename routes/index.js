const express = require('express')
const router = express.Router()
const passport = require('../config/passport')
const admin = require('./modules/admin')
const users = require('./modules/users')
const tweets = require('./modules/tweets')
const { authenticated, authenticatedUser, authenticatedAdmin } = require('../middleware/auth')
const tweetController = require('../controllers/tweet-controller')
const userController = require('../controllers/user-controller')
const { apiErrorHandler } = require('../middleware/error-handler')

router.post('/admin/signin', passport.authenticate('local', { session: false }), authenticatedAdmin, userController.signIn)
router.post('/signin', passport.authenticate('local', { session: false }), authenticatedUser, userController.signIn)

router.delete('/followships/:followingId', authenticated, authenticatedUser, userController.removeFollowing)
router.post('/followships', authenticated, authenticatedUser, userController.addFollowing)

router.post('/users', userController.signUp)
router.get('/tweets', authenticated, tweetController.getTweets)
router.use('/admin', authenticated, authenticatedAdmin, admin)
router.use('/users', authenticated, authenticatedUser, users)
router.use('/tweets', authenticated, authenticatedUser, tweets)


router.use('/', apiErrorHandler)
module.exports = router