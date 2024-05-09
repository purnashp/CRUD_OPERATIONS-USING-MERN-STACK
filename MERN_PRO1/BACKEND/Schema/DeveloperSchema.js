const {Schema,model}= require("mongoose");

const DevoloperSchema = new Schema(
    {   
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required: true
        },
        dob: {
            type: Number,
            required: true
        },
        mobile: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        department:{
            type:String,
           required:true
        },
        joindate:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

module.exports = model("developer",DevoloperSchema)