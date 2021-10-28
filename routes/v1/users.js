const router = require('koa-router')()
const ctrls = require('../../controllers')

// router.prefix('/user')

router.get('/info', ctrls.users.fetchUserInfo)

module.exports = router
