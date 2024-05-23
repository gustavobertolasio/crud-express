const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

router.get('/:characterId', teamController.getCharacterTeam);
router.post('/:characterId', teamController.postChangeTeam);

module.exports = router;
