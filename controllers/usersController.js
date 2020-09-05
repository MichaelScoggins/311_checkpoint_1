const users = require('../data/index')
let counter = users.length + 1

const getUsers = (req, res) => {
  res.json(users.filter((i) => i.isActive !== false))
}

const showUser = (req, res) => {
  let user = users[req.params.id - 1]
  if (user.isActive == false) {
    res
      .status(400)
      .json({ message: `No contact with the id of ${req.params.id}` })
  } else {
    res.json(user)
  }
}

const createUser = (req, res) => {  
  users.push({ id: counter++, ...req.body })
  res.json(users[users.length - 1])
}

const updateUser = (req, res) => {
  let user = users[req.params.id - 1]
  if (user.isActive == false) {
    res
      .status(400)
      .json({ message: `No contact with the id of ${req.params.id}` })
  } else {
    // update info else stay the same
    user.name = req.body.name ? req.body.name : user.name
    user.username = req.body.username ? req.body.username : user.username
    user.email = req.body.email ? req.body.email : user.email
    user.address.street = req.body.address.street ? req.body.address.street : user.address.street
    user.address.suite = req.body.address.suite ? req.body.address.suite : user.address.suite
    user.address.city = req.body.address.city ? req.body.address.city : user.address.city
    user.address.zipcode = req.body.address.zipcode ? req.body.address.zipcode : user.address.zipcode
    user.phone = req.body.phone ? req.body.phone : user.phone
    user.website = req.body.website ? req.body.website : user.website
    user.company.name = req.body.company.name ? req.body.company.name : user.company.name
    user.company.catchPhrase = req.body.company.catchPhrase ? req.body.company.catchPhrase : user.company.catchPhrase
    user.company.bs = req.body.company.bs ? req.body.company.bs : user.company.bs
  }


  res.json(user)
}

const deleteUser = (req, res) => {
  let user = users[req.params.id - 1]
  console.log(user)
  user.isActive = false
  res
    .status(400)
    .json({ message: `No user with the id of ${req.params.id}` })
}

module.exports = {
  getUsers,
  showUser,
  createUser,
  updateUser,
  deleteUser
}