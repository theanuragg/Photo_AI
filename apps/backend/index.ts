import router from './Routes/Route'
import express from 'express'
// import cors from 'cors'
import dotenv from 'dotenv'
import { checkRateLimit } from './auth/Auth'
dotenv.config()
console.log(process.env.PHOTO_API_KEY)
const PORT = process.env.PORT || 3000




const app = express()

app.use(checkRateLimit)
app.use('/', router)


// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }))






