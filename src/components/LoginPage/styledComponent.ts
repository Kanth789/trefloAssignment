import styled from "styled-components";

export const LoginPageWrapper = styled.div`
height: calc(100vh - 80px);
`

export const LoginNavbar = styled.div`
max-width: 1200px;
display: block;
margin-left: auto;
margin-right: auto;

`

export const LogoWrapper = styled.div`
display: flex;
align-items: center;
padding: 10px;

`

export const CompanyNameText = styled.h2`
`
export const SubCompanyNameText = styled.h2`
color:red;
`

export const FormWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
background-color: white;
padding: 15px 15px;
width: 400px;
height: 300px;
border-radius: 12px;
`

export const InputType = styled.input`
margin-top: 8px;
margin-bottom: 8px;
padding: 8px;
width: 200px;
`

export const InputLabel = styled.label`
text-align: right;
`

export const LoginFromWrapper = styled.div`
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`

export const ErrorMessageText = styled.h3`
color: red;
text-align: center;
`

export const LoginPageBodyWrapper = styled.div`
background-image: url('https://b.zmtcdn.com/data/pictures/chains/9/18423509/2cc323f411e2fdc298289a62474d7688.jpeg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 position: fixed;
 width: 100%;
`

export const LoginButton = styled.button`
padding: 10px 20px;
font-size: 16px;
font-weight: 600;
color: white;
border-radius: 10px;
border: none;
margin-top: 30px;
background-color: blueviolet;
`
export const LoginFromContainer = styled.div`
max-width: 400px;
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 10rem;
`