const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    user : {type : mongoose.Types.ObjectId, ref : "people"},
    title : {type : String, required : true},
    image : {type : String},
    contact:{type : String},
    location:{type : String},
    description : {type : String, required : true},
    type: {
        type: String,
        enum: ["lost",  "found"],
        default: "lost",
      },
    date : {type : Date, default : Date.now()}
})

const postSchema = new mongoose.model('post', PostSchema)
module.exports = postSchema