import { useEffect, useState } from "react";
import {
  LoginPageWrapper,
  LoginNavbar,
  LoginFromWrapper,
  LogoWrapper,
  CompanyNameText,
  SubCompanyNameText,
  FormWrapper,
  InputLabel,
  InputType,
  ErrorMessageText,
  LoginPageBodyWrapper,
  LoginButton,
  LoginFromContainer,
} from "./styledComponent";
import { savedPassword, savedUserName } from "./constant";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const LoginPageComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [shouldShowError, setShouldError] = useState(false);
  const history = useHistory();

  const OnClickLogin = () => {
    if (savedUserName.includes(userName) && savedPassword.includes(password)){
      Cookies.set('jwt_token', userName) 
      history.push("/")
    }
    else setShouldError(true);
  };
  return (
    <LoginPageWrapper>
      <LoginFromWrapper>
        <LoginNavbar>
          <LogoWrapper>
            <CompanyNameText>{"Treflo"}</CompanyNameText>
            <SubCompanyNameText>{"Pizza"}</SubCompanyNameText>
          </LogoWrapper>
        </LoginNavbar>
      </LoginFromWrapper>
      <LoginPageBodyWrapper>
        <LoginFromContainer>
        <FormWrapper>
          <InputLabel>{"UserName"}</InputLabel>
          <InputType
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          ></InputType>
          <InputLabel>{"Password"}</InputLabel>
          <InputType
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></InputType>
          <LoginButton onClick={OnClickLogin}>{"Login"}</LoginButton>
          {shouldShowError ? (
            <ErrorMessageText>
              {"Once Check with UserName And Password, those are not match "}
            </ErrorMessageText>
          ) : (
            ""
          )}
        </FormWrapper>
        </LoginFromContainer>
      </LoginPageBodyWrapper>
    </LoginPageWrapper>
  );
};
export default LoginPageComponent;
