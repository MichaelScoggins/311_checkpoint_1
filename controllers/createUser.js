const users = require('../data/index')
let counter = users.length + 1

const createUser = (req, res) => {  
  users.push({ id: counter++, ...req.body })
  res.json(users[users.length - 1])
}

module.exports = { createUser }