import React from 'react';
import styled from "styled-components"
import {useDefault} from "./Context"
import {Link} from "react-router-dom";
import PropTypes from "prop-types"


const Product=(props)=>{
    const {addtocart,handleDetail,openmodal}=useDefault()
    const {id,title,img,price,inCart}=props.info
    return(
        <Productcontainer className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card ">
                <div className="img-container p-5" >
                    <Link to="/detail">
                      <img src={img} alt={title} className="card-img-top" onClick={()=>handleDetail(id)}></img>  
                    </Link>
                    <button className="card-btn" disabled={inCart? true:false} onClick={()=>{addtocart(id)
                         openmodal(id)}}>
                    {inCart?<p className="text-capitalize mb-0" disabled>{" "}in Cart</p>:<i className="fa fa-cart-plus"></i>}
                    </button>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center">{title}</p>
                    <h5 className="text-blue mb-0 font-italic">
                        <span className="mr-1">${price}</span>
                    </h5>

                </div>

            </div>
        </Productcontainer>
    )
}

const Productcontainer=styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:none;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgbs(0,0,0,0.2);
    }
    .card-footer{
        border-top:0.04rem solid rgba(0,0,0,0.2);
        background:rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
.card-btn{
    position :absolute;
    right:0;
    bottom:0;
    border:none;
    border-radius:0.5rem 0 0 0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    color:var(--mainWhite);
    font-size:1.4rem;
    transform:translate(100%,100%);
    transition:all 1s linear; 
}
.img-container:hover{
    .card-img-top{
        transform:scale(1.2);
    }
    .card-btn{
        transform:translate(0,0);
    }
}
.card-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
    border:none;
}
`;
export default Product;