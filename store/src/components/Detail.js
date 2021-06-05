import React from 'react';
import {useDefault} from "./Context"
import {Link} from "react-router-dom"
import {Buttoncontainer} from "./button"

const Detail = () => {
    const {detailedproducts,addtocart,openmodal}=useDefault()
    const {id, company,img,info,price,title,inCart}=detailedproducts
    return (
        
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-blue my-5">
                 <h1> {title}</h1>   
                </div>
            </div>
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                    <img className="img-fluid " src={img} alt={title}/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h1>model:{title}</h1>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        made by:<span>{company}</span>
                    </h4>
                    <h4 className="text-blue">
                        <strong>
                            price:<span>$</span>{price}
                        </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        some info about product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                        <Link to="/">
                            <Buttoncontainer className="mr-2">
                                back to Cart
                            </Buttoncontainer>
                        </Link>
                        <Buttoncontainer  cart disabled={inCart? true:false} onClick={()=>{addtocart(id)
                         openmodal(id)}}>
                    {inCart?<p className="text-capitalize mb-0" disabled>{" "}in Cart</p>:<p className="text-capitalize mb-0" >{" "}add to cart</p>}
                    </Buttoncontainer>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
 
export default Detail