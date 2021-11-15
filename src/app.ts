import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router } from './routes';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

export { app };
