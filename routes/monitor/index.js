const router = require('koa-router')()

// router.prefix('/monitor')

router.get('/', function (ctx, next) {
  ctx.body = {
    msg: 'OK'
  }
})

module.exports = router
