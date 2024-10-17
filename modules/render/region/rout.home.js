const {Router}= require("express")
const {regionController}= require("./controller.home")
const {authMd}= require("../../../md/auth.md")
const routRegionn = Router()

routRegionn.get("/", 
    authMd.chekToken.bind(authMd),
    authMd.chekUser.bind(authMd),
    regionController.region.bind(regionController) )


module.exports= {routRegionn}