import React from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components"
import {useDefault} from "./Context"
import { Buttoncontainer} from "./button"

const Modal = () => {
    const {modaldata,closemodal,modalopen}=useDefault()
    const {img,price,title}=modaldata
    return ( <>
    <Modelcontainer className={modalopen?"":"d-none"}>
<div  className="container">
    <div className="row ">
        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
            <h5>
                item added to te cart
            </h5>
            <img className="img-fluid" src={img} alt={title}></img>
            <h5>{title}</h5>
            <h5 className="text-muted">price :<span>$</span>{price}</h5>
            <Link to="/" className="mr-2 py-2">
                <Buttoncontainer onClick={closemodal}>continue shopping</Buttoncontainer>
            </Link>
            <Link to="/cart" className="py-2">
                <Buttoncontainer cart onClick={closemodal}>go to cart</Buttoncontainer>
            </Link>
        </div>
    </div>
</div>
    </Modelcontainer>
    </> );
}
 const Modelcontainer=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}
`;
export default Modal;<>
<h1>hello moto</h1>
</>