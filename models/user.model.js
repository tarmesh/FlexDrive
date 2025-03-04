const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
      type: String , 
      required: true,
      trim : true,
      lowercase: true,
      unique: true,
      minlength:[3,'Username must have at least 3 characters']
    },
    email:{
      type: String ,
      required:true,
      trim:true,
      lowercase: true,
      unique: true,
      minlength:[13,'Email must have at least 13 characters']
    },
    password:{
      type: String ,
      required:true,
      trim:true,
      minlength:[5,'Password must have at least 5 characters']
    }
})

const user = mongoose.model('user', userSchema);

module.exports = user;