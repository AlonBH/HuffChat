import mongoose, {Schema} from 'mongoose';

const genders = ['Male', 'Female'];

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: genders,
    required: true
  },
  isExposed: {
    type: Boolean,
    required: true
  },
  isDisabled: {
    type: Boolean,
    required: true,
    default: false
  },
  isCareerSoldier: {
    type: Boolean,
    required: true,
    default: false
  },
  points: {
    workDays: {
      type: Number,
      required: true,
      default: 0
    },
    thursdays: {
      type: Number,
      required: true,
      default: 0
    },
    weekends: {
      type: Number,
      required: true,
      default: 0
    }
  },
  restrictions: [{
    date: {
      type: Date,
      required: true
    },
    reason: {
      type: String,
      required: true,
    },
    isApproved: {
      type: Boolean,
      default: false
    }
  }]
});

export default mongoose.model('users', userSchema);