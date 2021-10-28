const router = require('koa-router')()
const monitor = require('./monitor')
const users = require('./users')

router.prefix('/v2')

// router.use('/user', users.routes(), users.allowedMethods());

module.exports = router;
