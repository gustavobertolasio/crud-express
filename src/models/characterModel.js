const { Pool } = require('pg');
const dbConfig = require('../config/db.config');
const teamModel = require('./teamModel');


const pool = new Pool(dbConfig);

const getCharacterByName = async (name) => {

    try {
        const { rows } = await pool.query('SELECT * FROM CHARACTER WHERE name = $1 AND active = true', [name]);
        return rows[0];
    } catch (error) {
        console.error('Error querying database:', error);
        throw new Error('Internal server error');
    }
};

const getCharacterById = async (id) => {
    try {
        const { rows } = await pool.query('SELECT * FROM CHARACTER WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        console.error('Error querying database:', error);
        throw new Error('Internal server error');
    }
};

const createCharacter = async (name, age) => {
    try {
        const queryText = 'INSERT INTO CHARACTER (name, age) VALUES ($1, $2) RETURNING *';
        const values = [name, age];
        const { rows } = await pool.query(queryText, values);
        const characterCreated = rows[0];

        await teamModel.createTeamByCharacterId(characterCreated.id)

        return characterCreated;
    } catch (error) {
        console.error('Error inserting user:', error);
        throw new Error('Internal server error');
    }
};

const deleteCharacter = async (userId) => {
    try {
        const queryText = 'UPDATE CHARACTER SET active = false WHERE id = $1';
        const values = [userId];
        const { rows } = await pool.query(queryText, values);

        return rows[0];
    } catch (error) {
        console.error('Error inserting user:', error);
        throw new Error('Internal server error');
    }
};

module.exports = {
    getCharacterByName,
    getCharacterById,
    createCharacter,
    deleteCharacter,
};
