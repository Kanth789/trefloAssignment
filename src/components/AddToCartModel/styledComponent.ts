import { type } from "os";
import styled from "styled-components";

export const AddToCartModel = styled.div`
position: fixed;
max-width: 600px;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: white;
border-radius: 15px;
`

export const AddToCartModelBackground = styled.div<AddToCartBackgroundImageProps>`
width: 250px;
background-image: url(${props => props.backgroundImageUrl});
background-repeat: no-repeat;
background-size: cover ;
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
`

export const AddToCartModelTextContainer = styled.div`
display: flex;
flex-direction: column;
padding-left: 15px;
`

export const AddToCartModelHeading = styled.div``

export const Heading = styled.h2``

export const ParagraphText = styled.h4``

export const ImageAndTextContainer = styled.div`
display: flex;
`

export const Description = styled.div``

export const VegOrNonVegIcon = styled.div`
padding: 6px 6px;
margin-top: 6px;
`

export const Size = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
`

export const Toppings = styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;
`

export const SizeText = styled.h3``

export const ToppingsText = styled.h3``

export const AddToCartCancelButton = styled.button`
padding: 6px 16px;
border-radius: 5px;
border: 1px solid blueviolet;
`
export const AddToCartButton = styled.button`
padding: 6px 16px;
border-radius: 5px;
border: none;
background-color: blueviolet;
color: white;

`
export const AddToCartModelButtons = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
margin-top: 20px;
margin-bottom: 20px;
`

export const ContainerToBlur = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: rgba(189,189,189,0.9);
`
export const InputType = styled.input``

export const InputLabel = styled.label`
margin-left: 4px;
`

export const InputTypeContainer = styled.div`
display: flex;
align-items: center;
`


interface AddToCartBackgroundImageProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundImageUrl: string;
  }