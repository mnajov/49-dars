const {resolve}= require("node:path")
const { DataBaza } = require("../../lib/dataBaza")
const { ResData } = require("../../lib/resData")

class DisServis{
    #dataBaza 
    constructor(dataBaza){
        this.#dataBaza = dataBaza
    }

    async read(){
        const data = await this.#dataBaza.read()
        return new ResData("sucsses", 200 , data)
    }


    async write(data){

        const oldData = await this.#dataBaza.read()
        oldData.push(data)
        await this.#dataBaza.write(oldData)

        return data
    }

    async delet(id){
        const oldData = await this.#dataBaza.read()
        const finIndex = oldData.findIndex((el)=>el.id== id)
        if(finIndex==-1){ return false}
        const deletData = oldData.splice(finIndex,1)
        await this.#dataBaza.write(oldData)
        return deletData


    }
}


const dataBaza = new DataBaza(resolve("db", "districts.json"))

const disServis= new DisServis(dataBaza)
module.exports= {disServis}