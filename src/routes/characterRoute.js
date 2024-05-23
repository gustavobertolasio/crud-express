// src/routes/helloRoute.js

const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.get('/:characterName', characterController.getCharacterIfExists);
router.get('/stats/:characterId', characterController.getCharacter);
router.post('/', characterController.postCharacter);
router.delete('/:characterId', characterController.deleteCharacter);

module.exports = router;
