import router from './Routes/Route'
import express from 'express'
// import cors from 'cors'
const PORT = 3000




const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }))






