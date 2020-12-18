const users = require('../data/index')

const deleteUser = (req, res) => {
  let user = users[req.params.id - 1]
  user.isActive = false
  res
    .status(400)
    .json({ message: `No user with the id of ${req.params.id}` })
}

module.exports = { deleteUser }