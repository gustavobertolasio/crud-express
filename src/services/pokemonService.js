const pokemonModel = require('../models/pokemonModel');

const getPokemons = async () => {
    return await pokemonModel.getAll();
};


module.exports = {
    getPokemons,
};
