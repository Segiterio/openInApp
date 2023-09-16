const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  street: {
    type: String,
  
  },
  city: {
    type: String,
  
  },
  state: {
    type: String,
  
  },
  postalCode: {
    type: String,
  
  },
  country: {
    type: String,
  
  },
});

const address = mongoose.model("Address", addressSchema);
module.exports = address;
