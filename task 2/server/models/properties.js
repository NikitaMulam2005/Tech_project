const mongoose = require('mongoose');
const RentSchema = new mongoose.Schema({
   name: {
      type: String,
      required: 'This field is required.'
   },
   description: {
      type: String,
      required: 'This field is required.'
   },
   email: {
      type: Array,
      required: 'This field is required.'
   },
   price:{
      type:String,
      required: 'This field is required.'
   },
   category: {
      type: String, 
      enum: ['House', 'Villa', 'Bunglalow', 'Apartments', 'Townhome', 'Office','loft'],
      required: 'This field is required.'
   },
   type: {
      type:String,
      enum:['sale','Rent'],
      required:'This field is required.'
   },
   bed:{
    type:String,
    required:'This field is required.'
   },
   bath:{
    type:String,
    required:'This field is required'
   },
   feet:{
    type:String,
    required:'This field is required'
   },
   image: {
      type:String,
      required: 'This field is required.'
   },
});
module.exports = mongoose.model('Rent', RentSchema);