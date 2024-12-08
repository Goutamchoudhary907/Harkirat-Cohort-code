const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://goutamchoudhary:Goutam907688@cluster0.6gf0e.mongodb.net/")

const todoSchema=mongoose.Schema({
    title:String ,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos', todoSchema)
module.exports={
    todo
}