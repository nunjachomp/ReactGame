const express = require('express');
const PlayerController = require('../Controllers/PlayerController');
const {logDetails, logOutDetails} = require('../Middleware/PlayerMiddlewre');
const router = express.Router();


router.post('/',logDetails ,PlayerController.logEntry)
router.post('/logout', logOutDetails, PlayerController.logOut);

router.post('/upTheLadder',PlayerController.sendUpdate)
module.exports = router;
