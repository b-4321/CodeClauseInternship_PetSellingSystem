import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import petsRouter from './routes/pets.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('PetPal Market Backend is running 🐾');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use('/api/pets', petsRouter);
