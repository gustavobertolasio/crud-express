const teamService = require('../services/teamService');

const getCharacterTeam = async (req, res) => {
    try {
        const helloMessage = await teamService.getTeam(req.params['characterId']);

        res.json(helloMessage);
    } catch (error) {
        console.error('Error fetching hello message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const postChangeTeam = async (req, res) => {
    try {
        await teamService.changeTeamPokemonInSlot(req.params['characterId'], req.body['slotId'], req.body['newPokemonId']);

        res.status(200).send();
    } catch (error) {
        console.error('Error fetching hello message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getCharacterTeam,
    postChangeTeam
};
