import express from 'express';
import mongoose from 'mongoose';
import sessionRoutes from './routes/sessions.js';
import { MONGO_URI } from './utils.js';

const app = express();

app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/sessions', sessionRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
