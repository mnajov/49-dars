const { CumstomeError } = require("../../lib/customeError")
const {bcrypt}= require("../../lib/bcrypt")
const {userServis}= require("../user/servis.user")
const { myJwt } = require("../../lib/jwt")

class AuthController{
    #userServis

    constructor(userServis){
        this.#userServis = userServis

    }


    async login(req,res,next){

       try {

        const {login, password}= req.body
        if(!login||!password){

            throw new CumstomeError(401, "siz parol yoki passwordni kiritmadingiz")
        }    
        
        const {data} = await this.#userServis.getByLogin(login)

        if(!data){

            throw new CumstomeError("401", "login mavjud emas")
        }

        const chekPassword = await bcrypt.compare(password, data.password)

        

        const token =await myJwt.token(data.id)


        res.cookie("token", token);
        
        res.redirect("/home");

        






       } catch (error) {
        next(error)
       }

    }


}

const authController = new AuthController(userServis)

module.exports = {authController}