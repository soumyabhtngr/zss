const express = require('express')
const router = express.Router();
const listRouter = require('./ticketHandler')

router.use(listRouter)

module.exports = router
