// src/controllers/helloController.js

const characterService = require('../services/characterService');

const getCharacterIfExists = async (req, res) => {
    try {
        const characterName = req.params['characterName'];

        const possibleCharacter = await characterService.getCharacterIfExists(characterName);

        if (possibleCharacter) {
            res.json(possibleCharacter);
            return;
        }

        res.status(204).send();
        return;
    } catch (error) {
        console.error('Error fetching hello message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getCharacter = async (req, res) => {
    try {
        const characterId = req.params['characterId'];
        const character = await characterService.getCharacter(characterId)
        res.json(character);
    } catch (error) {
        console.error('Error fetching hello message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const postCharacter = async (req, res) => {
    try {
        const characterCreated = await characterService.createCharacter(req.body);

        res.json(characterCreated);
    } catch (error) {
        console.error('Error fetching hello message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteCharacter = async (req, res) => {
    try {
        await characterService.deleteCharacter(req.params['characterId']);

        res.status(200).send();
    } catch (error) {
        console.error('Error fetching hello message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getCharacterIfExists,
    postCharacter,
    getCharacter,
    deleteCharacter
};
