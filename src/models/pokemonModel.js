const { Pool } = require('pg');
const dbConfig = require('../config/db.config');

const pool = new Pool(dbConfig);

const getAll = async () => {
    try {
        const { rows } = await pool.query("SELECT * FROM POKEMON");
        return rows;
    } catch (error) {
        console.error('Error inserting user:', error);
        throw new Error('Internal server error');
    }
};


module.exports = {
    getAll
};
