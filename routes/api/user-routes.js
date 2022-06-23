const router = require('express').Router()

const { getAllUser, getUserById, addUser} = require('../../controllers/user-controller')

router.route('/').get(getAllUser).post(addUser)

router.route('/:id').get(getUserById)

module.exports = router