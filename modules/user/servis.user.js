const { ResData } = require("../../lib/resData")
const {resolve}= require("node:path")
const {DataBaza}= require("../../lib/dataBaza")
class UserServis{
    #dataBaza
  
  
    constructor(dataBaza){
        this.#dataBaza= dataBaza
        
    }

    async getUser(){
        const data = await this.#dataBaza.read()
        return new ResData("geting sucsses", 200, data)
    }


    async setUser(data){

        const oldData= await this.#dataBaza.read()

        oldData.push(data)
        

        await this.#dataBaza.write(oldData)
        const resData= new ResData("created sucsses", 201,data )
        return resData
    }

    async getByLogin(login){
        const oldData= await this.#dataBaza.read()
        const data = oldData.find((el)=> el.login==login)

        return new ResData("chek login", 200, data)

    }
    async getOneById(id){
        const oldData= await this.#dataBaza.read()
        const data = oldData.find((el)=> el.id==id)

        return new ResData("chek id", 200, data)

    }

}

const dataBaza= new DataBaza(resolve("db", "userdb.json"))
const userServis = new UserServis(dataBaza)
module.exports= {userServis}