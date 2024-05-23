// src/routes/helloRoute.js

const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getPokemons);

module.exports = router;
