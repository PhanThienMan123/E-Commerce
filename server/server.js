const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/dbconnection')
const initRouter = require('./routes')

const app = express()
const port = process.env.PORT || 8888

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dbConnect()
initRouter(app)
app.use('/', (req, res) => {
    res.send('SERVER ONNN')
})

app.listen(port, () => {
    console.log('Server is running on the port: ' + port)
})
