const {userServis}= require("../../user/servis.user")
class HomeController{
    #userServis
    constructor(userServis){
        this.#userServis= userServis
    }

    async home(req,res,next){
        try {
            const data = await this.#userServis.getUser()
              
            res.render("index.ejs", data)
            
        } catch (error) {
            next(error)
        }

    }

}


const homeController = new HomeController(userServis)
module.exports= {homeController}
