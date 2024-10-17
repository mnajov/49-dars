const {Router}= require("express")
const {regController}= require("./controller.reg")
const regRouter= Router()

regRouter.get("/",regController.reg.bind(regController) )




module.exports= {regRouter}