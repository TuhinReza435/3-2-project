const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Gmail
  password: { type: String, required: true },
  
  // Role separates students from authorities
  role: { type: String, enum: ['student', 'authority'], default: 'student' },

  // --- STUDENT FIELDS ---
  department: { 
    type: String, 
    enum: ['CSE', 'EEE', 'ICT', 'ACCE', 'MATH'] 
  },
  session: { type: String },
  roll: { type: String },

  // --- AUTHORITY FIELDS ---
  authorityType: { 
    type: String, 
    enum: [
      'Department', 
      'Hall provost', 
      'Transport office', 
      'Chatro upodesta', 
      'Proctor', 
      'Pro VC', 
      'VC'
    ] 
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
