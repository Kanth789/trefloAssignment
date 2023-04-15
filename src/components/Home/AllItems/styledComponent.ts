import styled from "styled-components";
import { isTablet } from "../../../utils";


export const MainContainer  = styled.div`

`

export const Container = styled.div`
max-width: 1300px;
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 100px;
${isTablet}
{
    max-width: 600px;
}

`

export const ImageAndDescription = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
${isTablet}
{
    display: flex;
    flex-direction: column;
   
}
border: 1px solid  #f5ebe0;
margin-top: 10px;
padding: 10px;
`

export const ImageWrapper = styled.div``

export const PizzaImage = styled.img`
width: 450px;
height: 250px;
`

export const ImageDescription = styled.div`
width: 400px;
`

export const Description = styled.p``

export const TitleAndDescription = styled.div``

export const Title = styled.h4``

export const Price = styled.h4``

export const Rating = styled.div`
display: flex;
flex-wrap: wrap;
width: 100px;
`

export const AddToCardButton = styled.button`
background-color: blueviolet;
color: white;
border-radius: 8px;
border: none;
padding: 8px 12px;
`

export const AllItemDescriptionCard = styled.div`
${isTablet}
{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
`