//Importations
const express = require('express');
const mysql = require('mysql');
const {Sequelize} = require('sequelize');



// Importation des routes : 



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

// Enregistrement des routes : 



//Exportation de l'application : 
module.exports = app;