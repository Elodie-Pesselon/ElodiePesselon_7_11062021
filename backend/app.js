//Importations

const express = require('express');
const mysql = require('mysql');
const {Sequelize} = require('sequelize');
const db = require('./middleware/db_config');
const dbassociation = require("./middleware/db_assocation");


// Importation des routes : 
const userRoutes = require('./routes/user')

//Appel de la méthode Express :
const app = express();




    db.authenticate()
    .then(()=>{
    console.log('Connection à la BDD réussie !');
    })
    .catch ((error)=> {
    console.error('Impossible de se connecter à la BDD', error);
    });

    db.sync({force:true});
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