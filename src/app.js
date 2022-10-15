import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import path from 'path';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

import homeRoutes from './routes/homeRoutes';
import screenshotRoutes from './routes/screenshotRoutes';
import pdfRoutes from './routes/pdfRoutes';

app.use('/', homeRoutes);
app.use('/screenshot', screenshotRoutes);
app.use('/pdf', pdfRoutes);

export default app;
