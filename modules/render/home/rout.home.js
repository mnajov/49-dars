const {Router}= require("express")
const {homeController}= require("./controller.home")
const {authMd}= require("../../../md/auth.md")
const homeRout = Router()

homeRout.get("/",
    authMd.chekToken.bind(authMd),
    authMd.chekUser.bind(authMd),
    homeController.home.bind(homeController) )


module.exports= {homeRout}