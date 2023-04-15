import { observer, inject } from "mobx-react";
import {
  CartMainContainer,
  CartSingleCard,
  CartImageWrapper,
  CartImageContainer,
  CardTitleAndDescription,
  ItemTitle,
  ItemSize,
  ItemToppings,
  ItemCost,
  CheckOutButton,
  CartCardsContainer,
  CardHeadlineContainer,
  CardHeadingText,
  CheckoutButtonWrapper,
  SelectedSizeWrapper,
  SelectedTppoingsWrapper,
} from "./styledComponent";
import PizzaStoreModel from "../../Stores/model";
import NavbarComponent from "../Navbar";
import { useState } from "react";
import CheckOutPage from "../CheckOutPage";

const CartComponent = inject("pizzaStore")(
  observer((props: any) => {
    const { pizzaStore } = props;
    const {
      setSelectedPizzaItem,
      selectedPizzaItem,
      addToCartSelectedItem,
      selectedSizeOfPizza,
      selectedToppingOfPizza,
      cartCount,
      clearStore
    } = pizzaStore;
    console.log(selectedToppingOfPizza, "shbjdsjdsvjbj");
    const[shouldShowCheckOut,setShouldShowCheckout] = useState(false)
    const OnClickCheckOut = ()=>{
      setShouldShowCheckout(true)
    }
    const cartItemCount = cartCount !== 0
    return (
      <>
        <NavbarComponent shouldShowChangeColor={true} cartCount={cartCount} />
        <CartMainContainer>
          <CartCardsContainer>
            <CardHeadlineContainer>
              <CardHeadingText>{"Item"}</CardHeadingText>
              <CardHeadingText>{"Name"}</CardHeadingText>
              <CardHeadingText>{'Selected Size'}</CardHeadingText>
              <CardHeadingText>{'Selected Topping'}</CardHeadingText>
              <CardHeadingText>{"Price"}</CardHeadingText>
            </CardHeadlineContainer>
            {addToCartSelectedItem.map((eachItem: PizzaStoreModel) => (
              <CartSingleCard>
                <CartImageWrapper>
                  <CartImageContainer src={eachItem.imgUrl} />
                </CartImageWrapper>
                
                  <ItemTitle>{eachItem.name}</ItemTitle>
                  <SelectedSizeWrapper><ItemSize>{selectedSizeOfPizza}</ItemSize></SelectedSizeWrapper>
                  <SelectedTppoingsWrapper>
                  {selectedToppingOfPizza.map((eachItem: string) => (
                    <ItemToppings>{eachItem}</ItemToppings>
                  ))}
                  </SelectedTppoingsWrapper>
                
                <ItemCost>{eachItem.price}</ItemCost>
              </CartSingleCard>
            ))}
            <CheckoutButtonWrapper>
              <CheckOutButton onClick={OnClickCheckOut}>{"CheckOut"}</CheckOutButton>
            </CheckoutButtonWrapper>
            {shouldShowCheckOut  && cartItemCount ? <CheckOutPage clearStore={clearStore}/> : null}
          </CartCardsContainer>
        </CartMainContainer>
      </>
    );
  })
);
export default CartComponent;
