const users = require('../data/index')

const showUser = (req, res) => {
  let user = users[req.params.id - 1]
  if (user.isActive == false) {
    res
      .status(400)
      .json({ message: `No user with the id of ${req.params.id}` })
  } else {
    res.json(user)
  }
}

module.exports = { showUser }