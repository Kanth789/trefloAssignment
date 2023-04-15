import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import PizzaStoreModel from "../../Stores/model";

import NavbarComponent from "../Navbar";

import {  FooterNavLinks, Pizza } from "./constant";

import {
  Banner,
  BannerContainer,
  Footer,
  FooterContainer,
  FooterEachItem,
  FooterNavItemHeading,
  FooterNavItems,
  HomeContainer,
  ImageAndText,
  ManyMoreButton,
  NavLink,
  PizzaImageContainer,
  PizzaImages,
  SecondContainer,
  SecondContainerHeading,
} from "./styledComponent";

const HomeComponet = inject("pizzaStore")(
  observer((props: any) => {
    const { pizzaStore } = props;
    const { pizzaOverViewKList } = pizzaStore;
    const images = pizzaOverViewKList.map(
      (eachItem: PizzaStoreModel) => eachItem.imgUrl
    );

    const pizzaImages =  images.slice(0, 4)

    return (
      <HomeContainer>
        <NavbarComponent/>
        <Banner>
          <BannerContainer></BannerContainer>
        </Banner>
        <SecondContainer>
          <ImageAndText>
          <SecondContainerHeading>
            {"Our most popular deals"}
          </SecondContainerHeading>
          <PizzaImages>
            {pizzaImages.map((eachItem: string) => (
              <PizzaImageContainer
                backGroundUrl={eachItem}
              ></PizzaImageContainer>
            ))}

          </PizzaImages>
          <Link to={"/menu"} style={{ textDecoration: 'none'}}><ManyMoreButton>{'Many More'}</ManyMoreButton></Link>
          </ImageAndText>
        </SecondContainer>
        <FooterContainer>
         <Footer>
          <FooterNavItems>
            
            {FooterNavLinks.map((eachItem) => (
               <FooterEachItem>
               <FooterNavItemHeading>{eachItem.title}</FooterNavItemHeading>
              <>
                <NavLink>{eachItem.item.item1}</NavLink>
                <NavLink>{eachItem.item.item2}</NavLink>
                <NavLink>{eachItem.item.item3}</NavLink>
                <NavLink>{eachItem.item.item4}</NavLink>
              </>
              </FooterEachItem>
            ))}
          </FooterNavItems>
          </Footer>
        </FooterContainer>
      </HomeContainer>
    );
  })
);
export default HomeComponet;
