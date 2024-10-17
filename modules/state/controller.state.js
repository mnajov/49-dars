const {CumstomeError}=require("../../lib/customeError")
const {v4:uuid}= require("uuid")
const { ResData } = require("../../lib/resData")
const { stateServis } = require("./servis.state")

class StateController{
    #stateServis
    constructor(stateServis){
        this.#stateServis= stateServis
    }


    async getState(req,res,next){

        try {
            
            const data = await this.#stateServis.read()
            res.status(data.status).json(data)


        } catch (error) {
            next(error)
        }

    }

    async createState(req,res,next){

        try {
            
            const {state}= req.body
            if(!state){
                throw new CumstomeError("401", "siz davlat kiritmadingiz")
            }

            const id = uuid()

            const data = {id:id, state:state}

              const createData=await this.#stateServis.write(data)

              console.log(createData);
              

            //res.status(201).json(new ResData("created", 201, createData))
            res.redirect("/state")

        } catch (error) {
            next(error)
        }

    }

    async deletState(req,res,next){

        try {
            
            const {id}= req.body
            if(!id){throw new CumstomeError(404), "id kritmadingiz"}
            await this.#stateServis.delet(id)

            res.redirect("/state")



        } catch (error) {
            next(error)
        }
    }
}

const stateController= new StateController(stateServis)
module.exports={stateController}