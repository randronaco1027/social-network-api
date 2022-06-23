const router = require('express').Router()

const { getAllUser, getUserById} = require('../../controllers/user-controller')

router.route('/').get(getAllUser)

router.route('/:id').get(getUserById)

module.exports = router