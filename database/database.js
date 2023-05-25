const Sequelize = require('sequelize');

const connection = new Sequelize('livraria', 'root', 'Tirn@nog20',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;