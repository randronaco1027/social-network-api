const router = require('express').Router()

const { getAllUser, getUserById, addUser, editUser, deleteUser} = require('../../controllers/user-controller')

router.route('/').get(getAllUser).post(addUser)

router.route('/:id').get(getUserById).put(editUser).delete(deleteUser)

module.exports = router