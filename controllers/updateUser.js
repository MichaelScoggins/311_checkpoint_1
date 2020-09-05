const users = require('../data/index')

const updateUser = (req, res) => {
  let user = users[req.params.id - 1]
  if (user.isActive == false) {
    res
      .status(400)
      .json({ message: `No user with the id of ${req.params.id}` })
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
  res.json(user) // why doesn't this always show user's new object, something to do with async/promises?
  
}

// i know there's a better way to do this... please let me know

module.exports = { updateUser }