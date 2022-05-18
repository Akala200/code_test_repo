import express from 'express';
import testRoutes from './test';

const app = express();

app.use('/test', testRoutes);

export default app;
