const express = require('express');
const PlayerController = require('../Controllers/PlayerController');
const router = express.Router();

router.get('/', PlayerController.logEntry)
module.exports = router;
