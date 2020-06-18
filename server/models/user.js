const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
 
    skills:[{
        text:String,
        percentage:Number
    }],
    experiences:[{
        type:String,
       
    }],
    projects:[
        {name:String,detail:String}
    ],
    eduction:[
        {school: {
            type: String,
            
          },
          degree: {
            type: String,
            required: true
          },
        
          from: {
            type: Date,
            required: true
          },
          to: {
            type: Date
          }}
    ],
    about:{
        type:String
    },
    image:{
        type:String,
        default:"https://res.cloudinary.com/dvfpkko1z/image/upload/v1589020705/ahezd2fp0jb7qkmaeimc.jpg"
    },
    date:{
        type: Date, default: Date.now
    }
})

mongoose.model("User",userSchema)