//express modul
const express = require('express')
//init bodyparser
const bodyParser = require('body-parser')
require('express-group-routes')

//use express in app variable
const app = express()
//define the server port
const port = 5000

//allow this app to receive incoming json request
app.use(bodyParser.json())

// const UserController = require('./controllers/users')

//create the homepage route
//app dari express app variable
//req for request & res for respon
// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })
// app.get('/todos', (req, res) => {
//     res.send(todos)
// })

//controllers
const AuthController = require('./controllers/auth')

//middlewares
const { authenticated } = require('./middleware')

app.group('/api/v1', (router) => {
    //auth API
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)

    //user API
    // router.get('/users', UserController.index)
    // router.get('/user/:id', UserController.show)
    // router.post('/user', UserController.store)
    // router.patch('/user/:id', UserController.update)
    // router.delete('/user/:id', UserController.delete)
})

app.listen(port, () => console.log(`Listening On Port ${port}!`))