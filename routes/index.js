const router = require('express').Router()
const apiRoutes = require('./api')
const htmlRoutes = require('./html/html-routes')

router.unsubscribe('/api', apiRoutes)
router.use('/', htmlRoutes)

router.use((req, res) => {
    res.status(404).send('Wrong Page!')
})

module.exports = router