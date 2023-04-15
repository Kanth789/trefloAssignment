import { action, observable } from "mobx"
import PizzaStoreModel from "./model"
import ApiStatus, { APIResponseEachObjectType } from "../Constant"
import PizzStoreAPIApi from "../Serivce/index.api"
import { BidonSuccess } from "../utils"

class UserPizzaDetailsStore {
   @observable pizzaOverViewKList : Array<PizzaStoreModel>
   @observable pizzOverViewAPIStatus : typeof ApiStatus.initial
   @observable pizzOverViewAPIError : any
   @observable selectedPizzaItem : PizzaStoreModel | null
   @observable selectedSizeOfPizza:string|null
   @observable selectedToppingOfPizza : Array<string>
   @observable addToCartSelectedItem : Array<PizzaStoreModel> 
   @observable cartCount: number
   pizzStoreOverViewSerivce : PizzStoreAPIApi

   constructor(pizzStoreOverViewSerivce:PizzStoreAPIApi){
    this.pizzOverViewAPIStatus = ApiStatus.initial
    this.pizzaOverViewKList = []
    this.pizzOverViewAPIError = ''
    this.pizzStoreOverViewSerivce = pizzStoreOverViewSerivce
    this.selectedPizzaItem = null
    this.selectedSizeOfPizza = ''
    this.selectedToppingOfPizza = []
    this.addToCartSelectedItem = []
    this.cartCount = 0
    
   }

   @action.bound
   clearStore = ()=>{
    this.cartCount = 0
    this.selectedPizzaItem = null
    this.addToCartSelectedItem = []
   }


   @action.bound
   setApiStatus(value: string) {
    this.pizzOverViewAPIStatus = value;
  }
   
   @action.bound
   getPizzListOverViewAPI = () =>{
        const respone = this.pizzStoreOverViewSerivce.getPizzaOverViewAPI()
        BidonSuccess(respone,this.onSuccess,this.onFailure)  
   }

   
   @action.bound
   onSuccess = (responseData : Array<APIResponseEachObjectType>)=>{
    const eachItem = responseData.map(eachItem=>new PizzaStoreModel(eachItem))
    this.pizzaOverViewKList.splice(0, this.pizzaOverViewKList.length, ...eachItem);
    this.setApiStatus(ApiStatus.success);
   
  }
  @action.bound
  onFailure = ()=>{
    this.setApiStatus(ApiStatus.failure)
  }

  @action.bound
  setSelectedPizzaItem = (data:PizzaStoreModel) =>{
    this.selectedPizzaItem = data
  }

  @action.bound
  setSelectedSizeOfPizza = (value:string)=>{
    this.selectedSizeOfPizza = value
  }
  @action.bound
  setSelectedToppingsOfPizza = (value:string)=>{
    if (this.selectedToppingOfPizza.includes(value)) {
      const updatedToppings = this.selectedToppingOfPizza.filter(
        (item: string) => item !== value
      );
      this.selectedToppingOfPizza = updatedToppings;
    } else {
      this.selectedToppingOfPizza.push(value);
    }
    return this.selectedToppingOfPizza;
  }

  @action.bound
  setCartCount = () =>{
    this.cartCount = this.cartCount + 1
  }

  @action.bound 
  setAddToCartItem = () =>{
    if(this.selectedPizzaItem)
     if(this.addToCartSelectedItem.includes(this.selectedPizzaItem)) return
    else  this.addToCartSelectedItem.push(this.selectedPizzaItem)
  }
}

export default UserPizzaDetailsStore