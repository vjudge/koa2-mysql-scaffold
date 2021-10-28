const user = require('../modules/users')

exports.fetchUserInfo = async (ctx, next) => {
  try {
    ctx.body = await user.getInfo()
  } catch (e) {

  }
}
