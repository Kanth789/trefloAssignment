import styled from "styled-components"
export const NarbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Navbar = styled.div<NavBarProps>`
  overflow: hidden;
  background-color:${props=>props.shouldShowChangeColor ? '#e3d5ca' : "white"};
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  
`
export const NavbarLogoAndItem = styled.div`
max-width: 1200px;
display: block;
margin-left: auto;
margin-right: auto;
`

export const Logo = styled.div`
  display: flex;
`

export const Navitems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Navitem = styled.h4`
  margin-left: 50px;
  :hover{
    color: blueviolet;
  }
`

export const CompanyName = styled.h2`
  color: black;
`

export const CompanyChildName = styled.h2`
  color: Red;
`

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
    shouldShowChangeColor: string;
  }

export const CartCountWrapper = styled.div`
background-color: grey;
color: white;
    border-radius: 50%;
    padding: 4px 10px;
    margin-left: 6px;
`

export const CartCount = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`