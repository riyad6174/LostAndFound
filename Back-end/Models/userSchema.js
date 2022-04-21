const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : {type : String, required : true, unique : true},
    image : {type : String},
    contact : {type : String, required : true},
    password  : {type : String, required : true},
    date : {type : Date, default : Date.now()}
})

const userSchema = new mongoose.model('people', UserSchema)
module.exports = userSchema