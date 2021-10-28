class User {
    // constructor() {
    //     super();
    // }
}

module.exports = new User();


User.prototype.getInfo = async (userId) => {
  return { name: 'vjudge' }
}
