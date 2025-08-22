const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String ,
        required: true 
    },
     description: {
        type: String ,
        required: true 
    },
    category: {
        type: String ,
        required: true 
    },
    author: {
        type: String ,
        required: true 
    } ,
    iamge: {
        type: String ,
        required: true 
    },
    authorImage: {
        type: String ,
        required: true 
    } ,
    date: {
        type: Date ,
        default: Date.now()
    }
})