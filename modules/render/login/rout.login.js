const {Router}= require("express")
const {loginController}= require("./controller.login")
const loginRouter= Router()

loginRouter.get("/",loginController.reg.bind(loginController) )




module.exports= {loginRouter}