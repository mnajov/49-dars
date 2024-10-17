const express = require("express")
const cors = require("cors")
const {routModules}= require("./modules/rout.modules")
const ejs= require("ejs")
const { ResData } = require("./lib/resData")
const { CumstomeError } = require("./lib/customeError")
const cookieParser= require("cookie-parser")
const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.set("view engine", "ejs")
app.set("views", __dirname+"/views")



app.use(express.urlencoded())


app.use("/", routModules)



app.use((req,res,next)=>{
    try {
        throw new CumstomeError(404, "siz izlagan page mavjud emas")
        
    } catch (error) {
        next(error)
    }
})


app.use((err,req,res,next)=>{
    err.status= err.status|| 500
    res.status(err.status).json(new ResData(err.message, err.status))
})

app.listen(7777, ()=>{

console.log(("http://localhost:7777"));


})