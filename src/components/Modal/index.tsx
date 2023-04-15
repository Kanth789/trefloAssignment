import { useState } from "react";
import {
  ModalButton,
  ModalCancelButton,
  ModalCloseButton,
  ModalMainContainer,
  ModalText,
  ModalTextContainer,
} from "./styledComponent";

const Text = 'Are You Sure Want to LogOut'

const Cancel = 'Cancel'

const Logout = 'LogOut'

interface Props {
    onClickCloseOrCancel : VoidFunction
    OnClickOnLogotInModal:VoidFunction
}
const ModalComponent = (props:Props) => {
    const{onClickCloseOrCancel,OnClickOnLogotInModal} = props
   
  return (
    <><ModalMainContainer></ModalMainContainer><ModalTextContainer>
          <ModalText>{Text}</ModalText>
          <ModalButton>
              <ModalCancelButton onClick={onClickCloseOrCancel}>{Cancel}</ModalCancelButton>
              <ModalCloseButton onClick={OnClickOnLogotInModal}>{Logout}</ModalCloseButton>
          </ModalButton>
      </ModalTextContainer></>
    
  );
};
export default ModalComponent;
