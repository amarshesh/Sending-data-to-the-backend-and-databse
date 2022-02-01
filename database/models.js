const mongoose = require("mongoose");

const mySchema = new mongoose.Schema( {

    name : {
       type: String,
       required : true,
    },

    title :{
        type : String,
        required : true ,
        
    },
    date : { 
         type: Number,
         default: new Date(),
         required: false
    },

    text :{
        type : String,
        required : true,
    
    }


})

const Register = new mongoose.model("Blog", mySchema);
module.exports = Register;
