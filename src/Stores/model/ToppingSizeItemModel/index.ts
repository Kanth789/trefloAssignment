import { ItemsSizeType, ToppingItemsSizeType } from "../../../Constant"

export class ToppingNameItemModel {
    name:string
    constructor(data:ToppingItemsSizeType)
    {
        this.name = data.name
    }
}


export class  PizzaSizeItemModel {
    size:string
    constructor(data:ItemsSizeType)
    {
        this.size = data.size
    }
}