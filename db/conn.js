const mongoose = require("mongoose");

const DB = process.env.DATABASE


mongoose.connect('mongodb+srv://mohammed:o8QAIGA3d6BAsVkD@cluster0.qdl5pcq.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));