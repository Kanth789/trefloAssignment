import { Link } from "react-router-dom"
import { CompanyTitle, Pizza } from "../Home/constant"
import { CompanyChildName, Navitems, Navitem, CompanyName, Logo, NarbarContainer, NavbarLogoAndItem, Navbar, CartCountWrapper, CartCount } from "./styledComponent"
import ModalComponent from "../Modal"
import { useState } from "react"

const NavbarComponent = (props:any) => {
    const {shouldShowChangeColor,cartCount= 0} = props
    const[shouldShow,setShouldModal] = useState(false)
    const onClickLogOut = () => {
      setShouldModal(true)
    }
    const onClickCloseOrCancel = () =>{
      setShouldModal(false)
    }
    return(
        <Navbar shouldShowChangeColor={shouldShowChangeColor}>
        <NavbarLogoAndItem>
        <NarbarContainer>
          <Logo>
            <CompanyName>{CompanyTitle}</CompanyName>
            <CompanyChildName>{Pizza}</CompanyChildName>
          </Logo>
          <Navitems>
            <Link to={"/"} style={{ textDecoration: 'none', color:'black'  }}><Navitem>{"Home"}</Navitem></Link>
            <Link to={"/menu"} style={{ textDecoration: 'none', color:'black' }}><Navitem>{"Menu"}</Navitem></Link>
            <Link to={"/cart"} style={{ textDecoration: 'none', color:'black'}}><CartCount><Navitem>{"Cart"}</Navitem><CartCountWrapper>{cartCount}</CartCountWrapper></CartCount></Link>
            <Navitem onClick={onClickLogOut}>{"Logout"}</Navitem>
            {shouldShow ? <ModalComponent onClickCloseOrCancel={onClickCloseOrCancel}/> : null}
          </Navitems>
        </NarbarContainer>
        </NavbarLogoAndItem>
      </Navbar>
    )
}
export default NavbarComponent