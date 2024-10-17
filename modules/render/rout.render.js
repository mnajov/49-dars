const {Router}= require("express")
const routRender= Router()
const {homeRout}= require("./home/rout.home")
const {regRouter}= require("./reg/rout.reg")
const {loginRouter}= require("./login/rout.login")
const {disRout}= require("./dis/rout.dis")


routRender.use("/home", homeRout)
routRender.use("/reg",regRouter)
routRender.use("/login", loginRouter)
routRender.use("/dis", disRout)

module.exports= {routRender}