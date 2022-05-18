import express from 'express';
import testRoutes from './test';
import auth from '../middlewares/authMiddleware';

const app = express();

app.use('/test', auth, testRoutes);

export default app;
