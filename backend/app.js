//Importations
const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const {Sequelize} = require('sequelize');



// Importation des routes : 
const userRoutes = require('./routes/user')

//Appel de la méthode Express :
const app = express();



//Connection à la DB : 
const sequelize = new Sequelize('groupomania', 'admin', '-F6)]u$96*R,uXj', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
});


try { 
    sequelize.authenticate();
    console.log('Connection à la BDD réussie !');
}   catch (error) {
    console.error('Impossible de se connecter à la BDD', error);
}

// Ajout de headers à notre objet response pour éviter les erreurs CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());


// Enregistrement des routes : 
app.use('/api/users', userRoutes);


//Exportation de l'application : 
module.exports = app;