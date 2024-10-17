const {Router}= require("express")
const stateRout= Router()
const {stateController}= require("./controller.state")



stateRout.get("/get",stateController.getState.bind(stateController) )
stateRout.post("/create",stateController.createState.bind(stateController) )
stateRout.post("/delet",stateController.deletState.bind(stateController) )



module.exports={stateRout}