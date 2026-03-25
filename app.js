import express from 'express';
import { PORT } from './config/env.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';

const app = express();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 