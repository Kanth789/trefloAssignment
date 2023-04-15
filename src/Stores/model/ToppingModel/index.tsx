import { observable } from "mobx"
import { APIResponseSizeType, APIResponseToppinsType } from "../../../Constant"
import {  ToppingNameItemModel } from "../ToppingSizeItemModel"

class ToppingSizeModel {
   @observable isRadio:boolean
   @observable title:string
   @observable items:Array<ToppingNameItemModel>
   
   constructor(data:APIResponseToppinsType){
      this.isRadio = data.isRadio
      this.title = data.title
      this.items = data.items.map((eachItem) => new ToppingNameItemModel(eachItem));
   }
}
export default ToppingSizeModel