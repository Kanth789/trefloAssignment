import { APIResponseEachObjectType } from "../Constant";
import PizzaStoreService from ".";
import responseApi from "../utils";

class PizzStoreAPIApi implements PizzaStoreService{
   async getPizzaOverViewAPI (): Promise<APIResponseEachObjectType | unknown>{
    const response = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68',{
        headers:{
             Authorization: `Bearer` 

        },
        method:'GET'
    });
   return responseApi(response)
   
   }
}
export default PizzStoreAPIApi