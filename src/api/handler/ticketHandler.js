const express = require('express')
const ticketListController = require('../controller/ticketList')
const ticketDetailController = require('../controller/ticketDetail')

const router = express.Router();

router.get('/tickets', ticketListController);
router.get('/tickets/:id', ticketDetailController);
module.exports = router





