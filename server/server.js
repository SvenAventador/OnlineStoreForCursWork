require('dotenv').config() // использование переменных окружения
const express = require('express') // использование платформы для работы с HTTP запросами(get, post, put, delete) + использование программы POSTMAN
const sequelize = require('./database')
const models = require('./models/models')
const cors = require('cors') // работа с сервером
const router = require('./routers/router')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload') // загрузка файла на сервер с помощью express
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json()) // возможность обрабатывать JSON формат
app.use(express.static(path.resolve(__dirname, 'static'))) // чтобы получать файлы из папки static, они должны быть объявлены как static-vtnjls
app.use(fileUpload({}))
app.use('/api', router)

//middleware, который работает с ошибками, должен регистрироваться ПОСЛЕДНИМ
app.use(errorHandler)

const start = async () => { // взаимодейтствия с базой данных АСИНХРОННОЕ. Используй async && await
    try
    {
        await sequelize.authenticate() // подключение к БД
        await sequelize.sync() // создание таблиц и т.п.
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch
    {
        console.log(e); // вывод ошибки, в случае неправильной работы сервера
    }
}

start();
