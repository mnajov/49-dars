const {resolve}=require("node:path")
const {ResData}= require("../../lib/resData")
const {DataBaza}= require("../../lib/dataBaza")

class StateServis{
    #dataBaza
    constructor(dataBaza){
        this.#dataBaza= dataBaza
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


    async getId(id){
        const oldData = await this.#dataBaza.read()
        const find = oldData.find((el)=>el.id== id)
        return find



    }


    



}

const dataBaza = new DataBaza(resolve("db", "state.json"))
const stateServis= new StateServis(dataBaza)
module.exports= {stateServis}