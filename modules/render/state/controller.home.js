const {stateServis}= require("../../state/servis.state")
class StateController{
    #stateServis
    constructor(stateServis){
        this.#stateServis= stateServis
    }

    async state(req,res,next){
        try {
            const data = await this.#stateServis.read()
              
            res.render("state.ejs", data)
            
        } catch (error) {
            next(error)
        }

    }

}


const stateController = new StateController(stateServis)
module.exports= {stateController}
