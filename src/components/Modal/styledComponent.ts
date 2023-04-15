import styled from "styled-components";

export const ModalMainContainer = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: rgba(189,189,189,0.9);
`

export const ModalTextContainer = styled.div`
position: fixed;
max-width: 600px;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: white;
padding: 10px 40px;
border-radius: 15px;
`

export const ModalText = styled.h3``

export const ModalCloseButton = styled.button`
background-color: blueviolet;
color: white;
border-radius: 8px;
padding: 8px 12px;
border: none;
`

export const ModalCancelButton = styled.button`
color:black;
border-radius: 8px;
border: 1px solid grey;
padding: 8px 12px;
`

export const ModalButton = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
margin-bottom: 15px;
justify-content: space-around;
`