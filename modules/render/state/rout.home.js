const {Router}= require("express")
const {stateController}= require("./controller.home")
const {authMd}= require("../../../md/auth.md")
const routStatte = Router()

routStatte.get("/",
    authMd.chekToken.bind(authMd),
    authMd.chekUser.bind(authMd),
    stateController.state.bind(stateController) )


module.exports= {routStatte}