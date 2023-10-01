import express, { Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import indexRoutes from './routes/index'

// Initializations
const app: Application = express();
dotenv.config();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', indexRoutes);


export default app;