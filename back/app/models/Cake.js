const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
   id: {type: Number, required: true, unique: true}, 
   name: {type: String,required: true,}, 
   thumbnail: {type: String,required: true,}, 
   season: { type: String,required: true,}, 
   description: {type: String,required: true,}, 
});

module.exports = mongoose.model("cakes", CakeSchema);