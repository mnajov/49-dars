const {Router}= require("express")
const routAuth= Router()

const {authController}= require("./controller.auth")


routAuth.post("/",authController.login.bind(authController))


module.exports= {routAuth}