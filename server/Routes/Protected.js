const express = require('express');
const router = express.Router();
const PlayerController = require('../Controller/PlayerController')
const {auth} = require('../Middleware/PlayerMiddleware')


router.post('/' ,PlayerController.logUser);

module.exports = router;
