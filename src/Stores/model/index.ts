import { observable } from "mobx"
import { APIResponseEachObjectType, APIResponseSizeType, APIResponseToppinsType } from "../../Constant"
import ToppingSizeModel from "./ToppingModel"
import PizzaSizeModel from "./PizzaSizeModel"

class PizzaStoreModel {
    @observable id : number
    @observable name:string
    @observable description : string
    @observable isVeg:boolean
    @observable rating:number
    @observable price:number
    @observable imgUrl:string
    @observable size:Array<PizzaSizeModel>
    @observable toppings:Array<ToppingSizeModel>
    constructor(data:APIResponseEachObjectType) {
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.isVeg = data.isVeg
        this.rating = data.rating
        this.price = data.price
        this.imgUrl = data.img_url
        this.size = data.size.map((eachItem:APIResponseSizeType)=> new PizzaSizeModel(eachItem))
        this.toppings = data.toppings.map((eachItem: APIResponseToppinsType)=>new ToppingSizeModel(eachItem))
    }
}


export default PizzaStoreModel
