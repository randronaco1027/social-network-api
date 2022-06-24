const router = require('express').Router()

const { getAllUser, getUserById, addUser, editUser, deleteUser, addFriend, deleteFriend} = require('../../controllers/user-controller')

router.route('/').get(getAllUser).post(addUser)

router.route('/:id').get(getUserById).put(editUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router