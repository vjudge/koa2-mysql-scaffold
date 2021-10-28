const router = require('koa-router')()
const monitor = require('./monitor')

router.use('/monitor', monitor.routes(), monitor.allowedMethods());

module.exports = router;
