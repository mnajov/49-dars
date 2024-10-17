const {Router}= require("express")
const { routUser } = require("./user/rout.user")
const {routRender}= require("./render/rout.render")
const {routAuth}= require("./auth/rout.auth")
const { stateRout } = require("./state/rout.state")
const {routRegionn}= require("./render/region/rout.home")
const { routStatte } = require("./render/state/rout.home")
const {regionRout}= require("./region/rout.region")
const {disRout}= require("./districts/rout.dis")
const routModules= Router()

routModules.use("/user",routUser )
routModules.use("/auth", routAuth)
routModules.use("/stateapi",stateRout )
routModules.use("/state", routStatte)
routModules.use("/regionapi", regionRout)
routModules.use("/region",routRegionn )
routModules.use("/dis", disRout )




routModules.use("/",routRender )







module.exports= {routModules}