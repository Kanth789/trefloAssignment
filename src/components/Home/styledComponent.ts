import styled from "styled-components";
import { isTablet } from "../../utils";

export const HomeContainer = styled.div``;



export const BannerContainer = styled.div`
  background-repeat: no-repeat;
  background-position: top;
  background-size: auto 100%;
  height: 500px;
  background-image: url("https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.dab5070ae0236043c1f69aebad78b396.jpg");
  ${isTablet}{
    height: 330px;
  }
`;

export const Banner = styled.div`
  min-height: 300px;
  padding-top: 16px;
  margin-top: 30px;
`

export const SecondContainer = styled.div`
`

export const SecondContainerHeading = styled.h3`
color: black;
text-align: center;
margin-top: 20px;
`

export const PizzaImageContainer = styled.div<PizzaImageProps>`
background-image: url(${props => props.backGroundUrl});
  background-size: cover;
  width: 450px;
  height: 250px;
  margin-left: 40px;
  border-radius: 15px;
  ${isTablet}{
    width: 250px;
    height: 145px;
  }
 
`

export const PizzaImages  = styled.div`
display:grid;
grid-template-columns:auto auto;
grid-row-gap: 50px;
grid-column-gap: 50px;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
${isTablet}
{
  margin-left: 20px;
}
`

export const ImageAndText = styled.div`
padding-bottom: 30px;
`

export const FooterContainer = styled.div`
background-color: black;
`

export const FooterNavItems = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`
export const Footer = styled.div`
max-width: 1200px;
margin-left: auto;
margin-right: auto;
display: block;
`

export const FooterNavItemHeading = styled.h2`
color: white;
`

export const NavLink = styled.h3`
 color: white;
`

export const FooterEachItem = styled.div`
padding-top: 20px;
padding-bottom: 20px;
margin-right: auto;
margin-left: 25px;
`
export const ManyMoreButton = styled.button`
color: black;
font-weight: 600;
max-width: 1200px;
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 30px;
width: 200px;
padding:15px;
border-radius: 15px;
border: none;
background-color:#e3d5ca;
:hover{
  background-color: #edede9;
}
${isTablet}{
  width: 300px;
}

`

interface PizzaImageProps extends React.HTMLAttributes<HTMLDivElement> {
    backGroundUrl: string;
  }