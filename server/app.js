import express from 'express';
import healthRoute from './routes/healthRoutes.js';
import contactRoute from './routes/contactRoutes.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json({ limit: process.env.JSON_BODY_LIMIT || '10kb' }));

app.use('/', healthRoute);

app.use('/api', contactRoute);

app.use(notFound);

app.use(errorHandler);

export default app;