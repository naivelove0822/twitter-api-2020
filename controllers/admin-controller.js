const adminServices = require('../services/admin-services')

const adminController = {
  deleteTweet: (req, res, next) => {
    adminServices.deleteTweet(req, (err, user) => err ? next(err) : res.json(user))
  },
  getUsers: (req, res, next) => {
    adminServices.getUsers(req, (err, user) => err ? next(err) : res.json(user))
  }
}

module.exports = adminController