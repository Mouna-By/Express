// get the current day
let day = new Date().getDay() 
//get the current hours
let hour = new Date().getHours() 


function work(req,res,next){
    if (day>2 && day<6 && hour>8 && hour>17){
        res.send("hello")
        next()
    }else{
        res.send("<h1>Sorry we work from monday to friday ,from 8 to 17</h1>")
    }
}
module.exports=work;
