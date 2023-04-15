import { inject, observer } from "mobx-react";
import NonVegIcon, { VegIcon } from "../../Icon";
import UserPizzaDetailsStore from "../../Stores";
import PizzaStoreModel from "../../Stores/model";
import {
  AddToCartButton,
  AddToCartCancelButton,
  AddToCartModel,
  AddToCartModelBackground,
  AddToCartModelButtons,
  AddToCartModelTextContainer,
  ContainerToBlur,
  Description,
  Heading,
  ImageAndTextContainer,
  InputLabel,
  InputType,
  InputTypeContainer,
  Size,
  SizeText,
  Toppings,
  ToppingsText,
  VegOrNonVegIcon,
} from "./styledComponent";

interface Props {
  onClickCloseButton: VoidFunction;
  pizzaDetails: PizzaStoreModel;
}
const AddToCartModelComponent = inject('pizzaStore')(observer((props:any) => {
  const { onClickCloseButton, pizzaDetails ,pizzaStore} = props;
  const{setSelectedSizeOfPizza,selectedSizeOfPizza,setSelectedToppingsOfPizza,selectedToppingOfPizza,setCartCount,setAddToCartItem} = pizzaStore
  const { name, description, imgUrl, isVeg, size, toppings } = pizzaDetails as PizzaStoreModel;
  const nameOfDifferentSize = size.map((eachItem) => eachItem.items);
  const nameOfDifferentToppings = toppings.map((eachItem) => eachItem.items);
  const isUserCanSelectMultipleSize = size.find(
    (eachItem) => eachItem.isRadio === true
  );
  const isUserCanSelectMultipleToppings = toppings.find(
    (eachItem) => eachItem.isRadio === true
  );

  const onClickOnRadioButton = (value:string) =>{
    setSelectedSizeOfPizza(value)
    
  }
  const onClickOnCheckedButton = (value:string)=>{
    setSelectedToppingsOfPizza(value)
    console.log(selectedToppingOfPizza)
  }
  const renderSingleSize = () => {
    return nameOfDifferentSize.map((eachItem) =>
      eachItem.map((eachItem,index) => (
        <InputTypeContainer key={index}>
          <InputType type="radio" value={eachItem.size} name="size" onClick={()=>onClickOnRadioButton(eachItem.size)}></InputType>
          <InputLabel>{eachItem.size}</InputLabel>
        </InputTypeContainer>
      ))
    );
  };
  const renderSingleTopping = () => {
    return nameOfDifferentToppings.map((eachItem) =>
    eachItem.map((eachItem, index) => (
      <InputTypeContainer key={index}>
        <InputType
          type="radio"
          name="topping"
          value={eachItem.name}
          onClick={() => onClickOnRadioButton(eachItem.name)}
        />
        <InputLabel>{eachItem.name}</InputLabel>
      </InputTypeContainer>
    ))
  );
  };

  const renderMultipleSize = () => {
    return nameOfDifferentSize.map((eachItem) =>
      eachItem.map((eachItem,index) => (
        <InputTypeContainer key={index}>
          <InputType type="checkbox" value={eachItem.size} name="size"onClick={()=>onClickOnCheckedButton(eachItem.size)}></InputType>
          <InputLabel>{eachItem.size}</InputLabel>
        </InputTypeContainer>
      ))
    );
  };
  const renderMultipleTopping = () => {
    return nameOfDifferentToppings.map((eachItem) =>
      eachItem.map((eachItem,index) => (
        <InputTypeContainer key={index}>
          <InputType type="checkbox" value={eachItem.name}name="toppings" onClick={()=>onClickOnCheckedButton(eachItem.name)}></InputType>
          <InputLabel>{eachItem.name}</InputLabel>
        </InputTypeContainer>
      ))
    );
  };

  const OnClickOnAddToCart = () =>{
    setCartCount()
    setAddToCartItem()
    onClickCloseButton()
  }

  

  return (
    <>
      <ContainerToBlur></ContainerToBlur>
      <AddToCartModel>
        <ImageAndTextContainer>
          <AddToCartModelBackground backgroundImageUrl={imgUrl} />
          <AddToCartModelTextContainer>
            <Heading>{name}</Heading>
            <Description>{description}</Description>
            <VegOrNonVegIcon>
              {isVeg ? (
                <VegIcon width={35} height={35} />
              ) : (
                <NonVegIcon width={35} height={35} />
              )}
            </VegOrNonVegIcon>
            <Size>
              {isUserCanSelectMultipleSize
                ? renderMultipleSize()
                : renderSingleSize()}
            </Size>
            <Toppings>
              {isUserCanSelectMultipleToppings
                ? renderMultipleTopping()
                : renderSingleTopping()}
            </Toppings>
                <AddToCartModelButtons>
            <AddToCartCancelButton onClick={onClickCloseButton}>
              {"cancel"}
            </AddToCartCancelButton>
            <AddToCartButton onClick={OnClickOnAddToCart}>{"Add"}</AddToCartButton>
            </AddToCartModelButtons>
          </AddToCartModelTextContainer>
        </ImageAndTextContainer>
      </AddToCartModel>
    </>
  );
}))
export default AddToCartModelComponent;


