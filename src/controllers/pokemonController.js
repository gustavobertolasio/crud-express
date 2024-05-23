// src/controllers/helloController.js

const pokemonService = require('../services/pokemonService');

const getPokemons = async (req, res) => {
    try {
        const character = await pokemonService.getPokemons()

        res.json(character);
    } catch (error) {
        console.error('Error fetching hello message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getPokemons
};
