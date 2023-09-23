const express = require('express');
const PlayerController = require('../Controllers/PlayerController');
const router = express.Router();

router.post('/', PlayerController.logEntry)
module.exports = router;
