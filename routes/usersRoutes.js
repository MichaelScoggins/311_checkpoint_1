const express = require('express')

const updateUserController = require('../controllers/updateUser')
const createUserController = require('../controllers/createUser')
const deleteUserController = require('../controllers/deleteUser')
const getUsersController = require('../controllers/getUsers')
const showUserController = require('../controllers/showUser')

const router = express.Router()

router.get('/', getUsersController.getUsers)

router.get('/:id', showUserController.showUser)

router.post('/', createUserController.createUser)

router.put('/:id', updateUserController.updateUser)

router.delete('/:id', deleteUserController.deleteUser)

module.exports = router