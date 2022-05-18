const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
// const userRouter = require('./routes/user-router')
const authRouter = require('./routes/auth')

dotenv.config()
connectDB()

const apiPort = process.env.SERVER_PORT
const app = express()

// Sessions and Passport
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:3000", methods: "GET,POST,PUT,DELETE", credentials: true}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.use('/user', userRouter)
app.use('/auth', authRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))