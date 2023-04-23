const mongoose = require('mongoose')

const userdata = new mongoose.Schema({
    firstname:{
      type:String
    },
    lastname:{
        type:String
    },
    mail:{
        type:String
    },
    mobilenumber:{
        type:Number
    },
    password:{
        type:String
    }
})

const signupdata = mongoose.model('signupdata',userdata);
module.exports=signupdata