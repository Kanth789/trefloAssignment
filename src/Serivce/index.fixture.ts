import pizzStoreOverViewJson from '../pizzStoreOverView.json'
import { APIResponseEachObjectType } from "../Constant";
import PizzaStoreService from ".";
import { resloveTime } from '../utils';



class PizzaStoreFixture  implements PizzaStoreService{
    getPizzaOverViewAPI () : Promise<APIResponseEachObjectType>{
        return resloveTime(pizzStoreOverViewJson)
    }
}

export default PizzaStoreFixture



