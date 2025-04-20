import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Имя обязательно для заполнения'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email обязателен для заполнения'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Пожалуйста, введите корректный email'],
  },
  message: {
    type: String,
    required: [true, 'Сообщение обязательно для заполнения'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema); 