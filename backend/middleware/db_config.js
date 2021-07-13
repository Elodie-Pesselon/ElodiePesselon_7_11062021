const Sequelize = require('sequelize');

module.exports = new Sequelize('groupomania', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
});