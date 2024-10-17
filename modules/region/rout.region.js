const {Router}= require("express")
const regionRout= Router()
const {regionController}= require("./controller.region")



regionRout.get("/get",regionController.getRegion.bind(regionController) )
regionRout.post("/create",regionController.createRegion.bind(regionController) )
regionRout.post("/delet",regionController.deletRegion.bind(regionController) )



module.exports={regionRout}