const teamModel = require('../models/teamModel');

const getTeam = async (characterId) => {
    return await teamModel.getTeamByCharacterId(characterId);
};

const changeTeamPokemonInSlot = async (characterId, slotId, newPokemonId) => {
    return await teamModel.changeTeamByCharacterIdAndSlotId(characterId, slotId, newPokemonId)
};

module.exports = {
    getTeam,
    changeTeamPokemonInSlot,
};
