const {regionServis}= require("../../region/servis.region")
class RegionController{
    #stateServis
    constructor(stateServis){
        this.#stateServis= stateServis
    }

    async region(req,res,next){
        try {
            const data = await this.#stateServis.read()
              
            res.render("region.ejs", data)
            
        } catch (error) {
            next(error)
        }

    }

}


const regionController = new RegionController(regionServis)
module.exports= {regionController}
