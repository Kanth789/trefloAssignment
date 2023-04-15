import { inject, observer } from "mobx-react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NonVegIcon, { StarIcon, VegIcon } from "../../../Icon";
import PizzaStoreModel from "../../../Stores/model";
import AddToCartModelComponent from "../../AddToCartModel";
import NavbarComponent from "../../Navbar";
import { MainContainer, Container, ImageAndDescription, ImageWrapper, PizzaImage, ImageDescription, Title, Price, Rating, AddToCardButton, Description, AllItemDescriptionCard } from "./styledComponent";

const AllItems = inject("pizzaStore")(
  observer((props: any) => {
    const { pizzaStore } = props;
    const { pizzaOverViewKList,setSelectedPizzaItem,selectedPizzaItem ,cartCount} = pizzaStore;
    const [shouldShowAddToCartModal, setShouldShowAddToCartModal] = useState(false);

    const renderRatingList = (value: number) => {
      const stars = [];
      const rating = Math.round(value)
      for (let i = 0; i < rating; i++) {
        if (i < value) {
          stars.push(<StarIcon width={20} height={20} color={"yellow"} />);
        } else {
          stars.push(<StarIcon width={20} height={20} color={"grey"} />);
        }
      }

      return stars;
    };

    const history = useHistory();
    const isMenuPage = history.location.pathname === '/menu';

    const OnClickAddToCart = (selectedItem: PizzaStoreModel) => {
      setSelectedPizzaItem(selectedItem);
      setShouldShowAddToCartModal(true);
    };

    const onClickCloseButton = () => {
      setShouldShowAddToCartModal(false);
    };

    return (
      <>
        <NavbarComponent shouldShowChangeColor={isMenuPage} cartCount={cartCount}/>
        <MainContainer>
          <Container>
            {pizzaOverViewKList.map((eachItem: PizzaStoreModel) => (
              <ImageAndDescription key={eachItem.id}>
                <ImageWrapper>
                  <PizzaImage src={eachItem.imgUrl}></PizzaImage>
                </ImageWrapper>
                <ImageDescription>
                  <Title>{eachItem.name}</Title>
                  <Description>{eachItem.description}</Description>
                </ImageDescription>
                <AllItemDescriptionCard>
                {eachItem.isVeg ? (
                  <VegIcon width={40} height={40} />
                ) : (
                  <NonVegIcon width={40} height={40} />
                )}
                <Price>{eachItem.price}/-</Price>
                <Rating>{renderRatingList(eachItem.rating)}</Rating>
                <AddToCardButton onClick={() => OnClickAddToCart(eachItem)}>{"Add To Cart"}</AddToCardButton>
                </AllItemDescriptionCard>
              </ImageAndDescription>
            ))}
          </Container>
        </MainContainer>
        {shouldShowAddToCartModal && selectedPizzaItem && (
          <AddToCartModelComponent
            onClickCloseButton={onClickCloseButton}
            pizzaDetails={selectedPizzaItem}           />
        )}
      </>
    )
  })
);

export default AllItems;
