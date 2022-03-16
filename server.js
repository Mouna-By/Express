// importation
const express = require("express");
//  create instance
const app = express();
//importation middleware
const work=require("./middleware/Auth")
//middleware express
app.use(express.json())
app.use(work)

//express routes
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/pages/home.html"))
})
app.get("/services", (req, res) => {
    res.sendFile(path.join(__dirname+"/pages/sevices.html"))
});
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname+"/pages/contact.html"))
});

// create port
const PORT = 7200
// create server
app.listen(PORT , (err)=> {
    err? console.log(err):console.log(`Server is running on port ${PORT}...`)
})