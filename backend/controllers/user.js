const {Sequelize} = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');




module.exports = {

    //Création d'un utilisateur
    signup: function (req, res) {

        //Paramètres
        const email = req.body.email;
        const pseudo = req.body.pseudo;
        const password = req.body.password;
        const presentation = req.body.presentation;
        const fonction = req.body.fonction;

        //Vérification des champs requis pour la création d'un compte utilisateur

        if (email == null || pseudo == null || password == null || fonction == null) {
            return res.status(400).json({
                'error': 'missing parameters'
            });
        }

        //Vérification que l'utilisateur n'existe pas puis création du compte utilisateur
        User.findOne({
                attributes: ['email'],
                where: {
                    email: email
                }
            })
            .then(function (userFound) {
                if (!userFound) {
                    bcrypt.hash(password, 10)
                        .then(hash => {
                            const user = new User ({
                                email: email,
                                pseudo: pseudo,
                                password: hash,
                                presentation: presentation,
                                fonction: fonction,
                            })
                            user.save()
                                .then(() => res.status(201).json({
                                    message: 'Utilisateur créé'
                                }))
                                .catch(error => res.status(400).json({
                                    error: 'Utilisateur non créé'
                                }))
                                .catch(function (err) {
                                    return res.status(500).json({
                                        'error': 'Erreur serveur'
                                    });
                                });
                        });
                } else {
                    return res.status(409).json({
                        'error': 'L\'utilisateur existe déjà'
                    });
                }
            })
            .catch(function (err) {
                return res.status(500).json({
                    'error': 'Erreur serveur'
                });
            })
    },

    //Connexion à un compte utilisateur     
    login: function (req, res) {
        User.findOne({
                email: req.body.email
            })
            .then(user => {
                if (!user) {
                    return res.status(401).json({
                        error: 'Utilisateur non trouvé !'
                    })
                }
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({
                                error: 'Mot de passe incorrect !'
                            })
                        }
                        res.status(200).json({
                            userId: user._id,
                            token: jwt.sign({
                                    userId: user._id
                                },
                                process.env.JWT_secret, {
                                    expiresIn: '24h'
                                }
                            )
                        })
                    })
                    .catch(error => res.status(500).json({
                        error
                    }))
            })
            .catch(error => res.status(500).json({
                error
            }))
    },
    
    //Suppression d'un compte utilisateur
    deleteUser: function(req, res) {
        User.findOne({
                id: req.body.id
            })
            .then(user => {
                User.destroy({
                        id: req.body.id
                    })
                    .then(() => res.status(200).json({
                        message: 'Compte utilisateur supprimé'
                    }))
                    .catch(error => res.status(400).json({
                        error: 'Le compte utilisateur n\'a pas pu être supprimé'
                    }))
            })
            .catch(err => res.status(500).json({
                error: 'Erreur serveur'
            }))
    }
}