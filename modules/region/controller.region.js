const {CumstomeError}=require("../../lib/customeError")
const {v4:uuid}= require("uuid")
const { ResData } = require("../../lib/resData")
const {stateServis}= require("../state/servis.state")
const { regionServis } = require("./servis.region")

class StateController{
    #regionServis
    #stateServis
    constructor(regionServis, stateServis){
        this.#regionServis= regionServis
        this.#stateServis= stateServis
    }


    async getRegion(req,res,next){

        try {
           
           
            
            
            const data = await this.#regionServis.read()
            res.status(data.status).json(data)


        } catch (error) {
            next(error)
        }

    }

    async createRegion(req,res,next){

        try {
            
            const {region, stateId}= req.body
            if(!region|| !stateId){
                throw new CumstomeError("401", "siz region kiritmadingiz")
            }

            const stateFind= await this.#stateServis.getId(stateId)
            if(!stateFind){
                throw new CumstomeError(404, "kiritligan stateID yoq")
            }



            const id = uuid()

            const data = {id:id, region:region , stateId:stateId}

              const createData=await this.#regionServis.write(data)

              console.log(createData);
              

            //res.status(201).json(new ResData("created", 201, createData))
            res.redirect("/region")

        } catch (error) {
            next(error)
        }

    }

    async deletRegion(req,res,next){

        try {
            
            const {id}= req.body
            if(!id){throw new CumstomeError(404), "id kritmadingiz"}
            await this.#regionServis.delet(id)

            res.redirect("/region")



        } catch (error) {
            next(error)
        }
    }
}

const regionController= new StateController(regionServis, stateServis)
module.exports={regionController}