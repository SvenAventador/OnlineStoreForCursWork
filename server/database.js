const {Sequelize} = require('sequelize') // взаимодействие с БД

module.exports = new Sequelize( // использование данных из файла .env
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)