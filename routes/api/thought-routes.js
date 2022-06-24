const router = require('express').Router()
const {addThought, getAllThoughts, getThoughtById, editThought, deleteThought, addReaction, deleteReaction} = require('../../controllers/thought-controller')

//Routers by userId
router.route('/:userId').post(addThought)

//Routes by thoughtId
router.route('/:id').get(getThoughtById).put(editThought).delete(deleteThought)

//All thoughts
router.route('/').get(getAllThoughts)

//Add reaction
router.route('/:thoughtId/reactions').post(addReaction)

//Delete reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router