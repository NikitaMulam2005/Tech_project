const mongoose=require('mongoose');
const signUpSchema= new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
     },
     email:{
        type:String,
        required:'This field is required.'
     },
     password: {
        type: String,
        required: 'This field is required.'
     },
});

module.exports=mongoose.model('Info',signUpSchema);