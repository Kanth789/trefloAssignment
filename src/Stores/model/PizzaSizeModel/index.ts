import { observable } from "mobx"
import { APIResponseSizeType, ItemsSizeType } from "../../../Constant"
import { PizzaSizeItemModel } from "../ToppingSizeItemModel"

class PizzaSizeModel {
   @observable isRadio:boolean
   @observable title:string
   @observable items:Array<PizzaSizeItemModel>
   constructor(data:APIResponseSizeType){
    this.isRadio = data.isRadio
    this.title = data.title
    this.items = data.items.map((eachItem) => new PizzaSizeItemModel(eachItem));
   }
}
export default PizzaSizeModel