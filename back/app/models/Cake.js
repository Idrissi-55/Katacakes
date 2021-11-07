const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
   
   name: {type: String,required: true, unique: true}, 
   thumbnail: {type: String,required: true,}, 
   season: { type: String,required: true,}, 
   description: {type: String,required: true,}, 
});

module.exports = mongoose.model("cakes", CakeSchema);