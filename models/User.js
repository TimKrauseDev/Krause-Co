const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const userSchema = new Schema({
  provider: String,
  provider_id: String,
  display_name: String,
  first_name: String,
  last_name: String,
  email: String,
  photos: String,
  telephone: String,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now }
});

mongoose.model('users', userSchema);