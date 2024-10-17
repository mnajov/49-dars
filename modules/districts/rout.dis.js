const {Router}= require("express")
const {disController}= require("./controller.dis")
const disRout= Router()


disRout.post("/create",disController.createDis.bind(disController) )
disRout.post("/delet", disController.deletDis.bind(disController))



module.exports={disRout}