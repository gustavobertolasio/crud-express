const { Pool } = require('pg');
const dbConfig = require('../config/db.config');

const pool = new Pool(dbConfig);

const createTeamByCharacterId = async (characterId) => {
    try {
        const queryText = `
      INSERT INTO CHARACTER_TEAM (id_character, id_pokemon)
      VALUES
        ($1, $2),
        ($3, $4),
        ($5, $6),
        ($7, $8),
        ($9, $10),
        ($11, $12)
    `;
        const values = [characterId, 1, characterId, 1, characterId, 1, characterId, 1, characterId, 1, characterId, 1];

        const { rows } = await pool.query(queryText, values);
        return rows;
    } catch (error) {
        console.error('Error querying database:', error);
        throw new Error('Internal server error');
    }
};

const getTeamByCharacterId = async (characterId) => {
    try {
        const { rows } = await pool.query("SELECT * FROM CHARACTER_TEAM WHERE id_character = $1 ORDER BY ID", [characterId]);
        return rows;
    } catch (error) {
        console.error('Error inserting user:', error);
        throw new Error('Internal server error');
    }
};

const changeTeamByCharacterIdAndSlotId = async (characterId, slotId, newPokemonId) => {
    try {
        const queryText = 'UPDATE CHARACTER_TEAM SET id_pokemon = $1 WHERE id_character = $2 AND id = $3';
        const values = [newPokemonId, characterId, slotId];
        const { rows } = await pool.query(queryText, values);

        return rows[0];
    } catch (error) {
        console.error('Error inserting user:', error);
        throw new Error('Internal server error');
    }
};

module.exports = {
    createTeamByCharacterId,
    getTeamByCharacterId,
    changeTeamByCharacterIdAndSlotId
};
