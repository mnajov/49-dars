const {Router}= require("express")
const {userController}= require("./controller.user")
const routUser= Router()

routUser.get("/getuser", userController.getUser.bind(userController))
routUser.post("/reg", userController.reg.bind(userController))

module.exports={routUser}
