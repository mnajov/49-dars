const {disServis}= require("../../districts/servis.dis")

class ControllerDis{
    #disServis
    constructor(disServis){
        this.#disServis=disServis
    }


    async dis(req,res,next){
        try {
            const data = await this.#disServis.read()
              
            res.render("dis.ejs", data)
            
        } catch (error) {
            next(error)
        }

    }
 }

 const controllerDis= new ControllerDis(disServis)
 module.exports= {controllerDis}