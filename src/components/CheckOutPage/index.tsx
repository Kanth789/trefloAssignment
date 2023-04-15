import { useEffect, useState } from "react";
import {
  BannerContainer,
  BlurContainer,
  CheckOutButton,
  DescriptionText,
  DescriptionWrapper,
  FromContainer,
  ImageContainer,
  InputType,
  Label,
  MainContainerOfCheckout,
  MessageText,
  SuccessIconWrapper,
} from "./styledComponent";
import { SuccessIconComponent } from "../../Icon";
import { useHistory } from "react-router-dom";

interface Props{
    clearStore:VoidFunction
}

const CheckOutPage = (props:Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shouldShowSuccess, setShouldShowSuccess] = useState(false);
  const history = useHistory()
  useEffect(() => {
    if(shouldShowSuccess) return
    const timeout = setTimeout(() => {
        history.push('/');
        props.clearStore()
    }, 10000);
    
    return () => clearTimeout(timeout);
  }, [history]);
  const OnClickSubmit = ()=>{
    setShouldShowSuccess(true)
  }
  return (
    <><BlurContainer></BlurContainer><MainContainerOfCheckout>
          <BannerContainer>
              <ImageContainer src="https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/bogo-delivery.69fa4201f405eacdc695e183efdad34a.1.jpg" />
          </BannerContainer>
          {shouldShowSuccess ? (
              <><SuccessIconWrapper>
                  <SuccessIconComponent width={30} height={40}/>
              </SuccessIconWrapper><DescriptionWrapper><DescriptionText>{'Hi'}{name},{`We have send the Invoice to your Mail ${email} once them all the details`}</DescriptionText><DescriptionText>{'Thank You Visit Again'}</DescriptionText><MessageText>{'Wait, A second will redirect to Home If you missed something grab that...'}</MessageText></DescriptionWrapper></>
          ) : (
              <FromContainer>
                <Label>{'Name'}</Label>
                  <InputType
                      type="text"
                      onChange={(e) =>setName(e.target.value)}
                  ></InputType>
                  <Label>{'Email'}</Label>
                  <InputType
                      type="email"
                      onChange={(e) =>setEmail(e.target.value)}
                  ></InputType>
                  <CheckOutButton onClick={OnClickSubmit}>{"Submit"}</CheckOutButton>
              </FromContainer>
          )}
      </MainContainerOfCheckout></>
  );
};
export default CheckOutPage;
