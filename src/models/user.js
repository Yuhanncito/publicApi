const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  paterno: {
    type: String,
    required: true,
  },
  materno: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  fecha_nacimiento:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('personas', userSchema);
