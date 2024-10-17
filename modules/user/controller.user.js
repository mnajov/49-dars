const { CumstomeError } = require("../../lib/customeError")
const {bcrypt}= require("../../lib/bcrypt")
const {userServis}= require("./servis.user")
const {v4:uuid}= require("uuid")

class UserController{
    #userServis
    constructor(userServis){
        this.#userServis=userServis
    }

    async getUser(req,res,next){
        const data = await this.#userServis.getUser()
        res.status(data.status).json(data)
    }


    async reg(req,res,next){
        try {
            const {login,password,districtId,address}= req.body


            
            

            if(!login||!password||!districtId||!address){
                throw new CumstomeError(401, "formalardan birini toldirmadingiz")
            }
            const dataLogin=await this.#userServis.getByLogin(login)
            
            if(dataLogin.data){
                throw new CumstomeError(401, "bunday login mavjud")
            }
            const passHash= await bcrypt.hash(password)
            const newData = {id: uuid(), login: login, password: passHash , districtId: districtId,address:address  }

            const resData= await this.#userServis.setUser(newData)

            //res.status(resData.status).json(resData)
            res.redirect("/login")


        } catch (error) {
            next(error)
        }
    }



}

const userController = new UserController(userServis)
module.exports={userController}


