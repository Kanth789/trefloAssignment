import { APIResponseEachObjectType } from "../Constant"


interface PizzaStoreService {
    getPizzaOverViewAPI:()=>Promise<APIResponseEachObjectType | unknown>
}

export default PizzaStoreService