const ApiStatus = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
export default ApiStatus



export type APIResponseEachObjectType = {
    id: number,
    name:string,
    description : string,
    isVeg:boolean,
    rating:number
    price:number
    img_url:string
    size:Array<APIResponseSizeType>
    toppings:Array<APIResponseToppinsType>
    
}

export type APIResponseSizeType = {
    isRadio:boolean,
    title:string,
    items:Array<ItemsSizeType>
}

export type APIResponseToppinsType = {
    isRadio:boolean,
    title:string,
    items:Array<ToppingItemsSizeType>
}

export type ItemsSizeType = {
    size:string
}

export type ToppingItemsSizeType = {
    name:string
}