const characterModel = require('../models/characterModel');

const getCharacterIfExists = async (characterName) => {
    return await characterModel.getCharacterByName(characterName);
};

const getCharacter = async (id) => {
    return await characterModel.getCharacterById(id);
};

const createCharacter = async (character) => {
    const { name, age } = character;
    return await characterModel.createCharacter(name, age);
};

const deleteCharacter = async (characterId) => {
    return await characterModel.deleteCharacter(characterId);
};

module.exports = {
    getCharacterIfExists,
    createCharacter,
    deleteCharacter,
    getCharacter
};
