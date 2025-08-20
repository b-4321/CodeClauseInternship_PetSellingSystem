import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['Dog', 'Cat', 'Rabbit'], required: true },
  mood: { type: String, enum: ['happy', 'calm', 'energetic', 'mysterious'], required: true },
  color: { type: String },
  image: { type: String }, // URL to image
  price: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Pet', petSchema);
