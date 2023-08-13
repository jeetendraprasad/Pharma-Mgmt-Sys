const mongoose = require("mongoose");
//const uri = "mongodb://localhost:27017";
const uri = "mongodb+srv://jprasad_mongodbuser:tKFVQUkWBIOyL9Af@cluster0.m0iwuxt.mongodb.net/?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };