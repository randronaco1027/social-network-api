const { User, Thought } = require('../models')

const thoughtController = {
    addThought({ params, body }, res) {
        console.log(params)
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                )
            })
            .then(dbUserData => {
                console.log(dbUserData)
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' })
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => res.json(err))
    },

    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err)
                res.sendStatus(400)
            })
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    editThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbThoughtData => {
                if (!dbToughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' })
                    return
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.json(err))
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err))
    },

    addReaction({ params, body }, res) {
        console.log(params)
        Thought.findOneAndUpdate(
            {_id: params.thoughtId },
            {$push: {reactions: body}},
            {new:true}
        )
            .then(dbThoughtData => {
                console.log(dbThoughtData)
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' })
                    return
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.json(err))
    },

    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId},
            {$pull: {reactions: {reactionId: params.reactionId}}},
            {new: true}
        )
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err))
    }
}

module.exports = thoughtController