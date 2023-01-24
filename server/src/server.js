import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import connectDB from './mongodb/connect.js'
import routes from './routes/index.js'

dotenv.config();

const PORT = process.env.PORT;

// app
const app = express();
app.set('port', PORT)

// setting
app.use(cors());
app.use(helmet());
app.use(express.json( { limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))

// setting routes
app.use('/api/v1', routes)

// setting connection database
connectDB(process.env.MONGO_URI)


export {
    app
}