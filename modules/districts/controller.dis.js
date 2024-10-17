const { v4:uuid } = require("uuid")
const { CumstomeError } = require("../../lib/customeError")
const {regionServis}= require("../region/servis.region")
const { disServis } = require("./servis.dis")

class DisController{
    #disServis
    #regionServis
    constructor(disServis, regionServis){
        this.#disServis=disServis
        this.#regionServis=regionServis

    }

    async getDis(req,res,next){

        try {
           
           
            
            
            const data = await this.#disServis.read()
            res.status(data.status).json(data)


        } catch (error) {
            next(error)
        }


    }


    async createDis(req,res,next){

        try {

            const {dis, regionId}= req.body
            if(!dis||!regionId){

                throw new CumstomeError(401, "distric yoki regionId ni kiritmadingiz")
            }
            const regionFind= await this.#regionServis.getId(regionId)
            if(!regionFind){
                throw new CumstomeError(404, "bunday ID-li region yoq")
            }


            const id = uuid()
            const data = {id:id, name: dis, regionId:regionId}
            const creatData= await this.#disServis.write(data)
            res.redirect("/dis")



            
        } catch (error) {
            next(error)
        }


    }


    async deletDis(req,res,next){

        try {
            
            const {id}= req.body
            if(!id){throw new CumstomeError(404), "id kritmadingiz"}
            await this.#disServis.delet(id)

            res.redirect("/dis")



        } catch (error) {
            next(error)
        }
    }







}

const disController = new DisController(disServis,regionServis)
module.exports= {disController}
