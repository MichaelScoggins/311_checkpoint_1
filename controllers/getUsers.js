const users = require('../data/index')

const getUsers = (req, res) => {
  res.json(users.filter((i) => i.isActive !== false))
}

module.exports = { getUsers }