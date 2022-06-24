const router = require('express').Router()
const {addThought, getAllThoughts, getThoughtById, editThought, deleteThought} = require('../../controllers/thought-controller')

//Routers by userId
router.route('/:userId').post(addThought)

//Routes by thoughtId
router.route('/:userId/:thoughtId').get(getThoughtById).put(editThought).delete(deleteThought)

//All thoughts
router.route('/').get(getAllThoughts)

module.exports = router