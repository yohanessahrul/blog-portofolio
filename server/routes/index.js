const router = require('express').Router()
const articleRouter = require('./article.route')
const userRouter = require('./user.route')

router.use('/article', articleRouter)
router.use('/user', userRouter)

module.exports = router