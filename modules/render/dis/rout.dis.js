const {Router}= require("express")
const {controllerDis}= require("./controller.dis")
const {authMd}= require("../../../md/auth.md")
const disRout= Router()


disRout.get("/",
    authMd.chekToken.bind(authMd),
    authMd.chekUser.bind(authMd),
    controllerDis.dis.bind(controllerDis) )


module.exports={disRout}