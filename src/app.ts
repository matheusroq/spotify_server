import express, { Application } from 'express';
import 'dotenv/config';
import { router } from './routes';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

export { app };
