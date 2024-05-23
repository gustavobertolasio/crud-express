const express = require('express');
const cors = require('cors');

const app = express();

const characterRoute = require('./routes/characterRoute');
const teamRoute = require('./routes/teamRoute');
const pokemonRoute = require('./routes/pokemonRoute');

app.use(express.json());
app.use(cors());


app.use('/character', characterRoute);
app.use('/team', teamRoute);
app.use('/pokemon', pokemonRoute);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta ${PORT}`);
});
