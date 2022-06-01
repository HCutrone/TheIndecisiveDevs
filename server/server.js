const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
// const userRouter = require('./routes/user-router')
const authRouter = require('./routes/auth')
// const http = require("http")

dotenv.config()
connectDB()

const apiPort = process.env.SERVER_PORT
const app = express()

// chat server
// const server = http.createServer(app)
// const io = socketio(server)

// const PORT = process.env.PORT || 5000

// server.listen(PORT, () => console.log(`Server is Quannected to Port ${PORT}`))

// io.on("connection", (socket) => {
//     console.log('A Connection has been made')
//     socket.on('disconnect', ()=> {
//         console.log('A disconnection has been made')
//     })
// })

//

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