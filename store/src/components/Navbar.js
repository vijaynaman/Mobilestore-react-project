import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";
import logo from "../logo.svg"
import {Buttoncontainer} from "./button"

 const Navbar=()=>{
return (
    <NavBar className="navbar navbar-expand-sm  navbar-dark px-sm-5 ">
        
      
            <Link to="/" >
<img src={logo} alt="log" className="navbar-brand"></img>
            </Link>
        
        <ul className="navbar-nav align-item-center ">
            <li className="nav-item ml-3 ">
<Link className="nav-link" to="/"><strong>Product</strong> </Link>
            </li>
        </ul>
        <Link to="/cart" className="ml-auto"><Buttoncontainer><span className="px-2"><i className="fa fa-cart-plus"></i></span>My Cart</Buttoncontainer></Link>

    </NavBar>);
}
const NavBar=styled.nav`
background:var(--mainBlue);
color:var(--mainWhite) !important;
font-size:1.3rem;
text-transform:capitalize !important;
`
export default Navbar;