import { Schema, model, models, Document, Model } from 'mongoose';

export interface IFeedback extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  lastMessageAt?: Date;
}

const feedbackSchema = new Schema<IFeedback>({
  name: {
    type: String,
    required: [true, 'Имя обязательно для заполнения'],
    trim: true,
    minlength: [2, 'Имя должно содержать минимум 2 символа'],
    maxlength: [50, 'Имя не должно превышать 50 символов']
  },
  email: {
    type: String,
    required: [true, 'Email обязателен для заполнения'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Пожалуйста, введите корректный email']
  },
  message: {
    type: String,
    required: [true, 'Сообщение обязательно для заполнения'],
    trim: true,
    minlength: [10, 'Сообщение должно содержать минимум 10 символов'],
    maxlength: [1000, 'Сообщение не должно превышать 1000 символов']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastMessageAt: {
    type: Date
  }
});

// Middleware для проверки временного интервала между сообщениями
feedbackSchema.pre('save', async function(next) {
  const RATE_LIMIT_MINUTES = 30;
  
  if (this.isNew) {
    const Model = this.constructor as Model<IFeedback>;
    const lastMessage = await Model.findOne({ 
      email: this.email 
    }).sort({ createdAt: -1 });

    if (lastMessage) {
      const timeSinceLastMessage = (Date.now() - lastMessage.createdAt.getTime()) / (1000 * 60);
      
      if (timeSinceLastMessage < RATE_LIMIT_MINUTES) {
        const minutesLeft = Math.ceil(RATE_LIMIT_MINUTES - timeSinceLastMessage);
        throw new Error(`Пожалуйста, подождите ${minutesLeft} минут перед отправкой следующего сообщения`);
      }
    }
  }
  
  next();
});

export const Feedback = models.Feedback || model<IFeedback>('Feedback', feedbackSchema); 