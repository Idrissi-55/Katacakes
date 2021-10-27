const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
   id: {
       type: Number,
       required: true,
   }, 
   name: {
       type: String,
       required: true,
   }, 
   thumbnail: {
       type: String,
       required: true,
   }, 
   season: {
       type: String,
       required: true,
   }, 
   description: {
       type: String,
       required: true,
   }, 
});

const Cake = mongoose.model("cakes", CakeSchema);
module.exports = Cake;