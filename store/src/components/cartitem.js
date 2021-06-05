import React from 'react';
import {useDefault} from "./Context"
const Cartitem = ({value}) => {
    const {img,title,id,price,count,total}=value;
    const {increase,decrease,removeitem}=useDefault()
    return (
        <div className="container-fluid ">
        <div className="row my-3 text-capitalize text-center  ">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} className="img-fluid " style={{width:"5rem",height:"5rem"}} alt={title}/>
            </div>
            <div className="col-10 mx-auto col-lg-2 text-center">
                <p className="text-uppercase"><span className="d-lg-none">product: </span>{title}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2 text-center">
                <p className="text-uppercase">${price}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2 text-center">
                <div className="text-uppercase">
                    <div className="d-flex  justify-content-center">
                      <div className="mx-1">
                      <span className="btn btn-block " onClick={()=>decrease(id)}>-</span>
                          </div>  
                          <div className="mx-1">
                      <span className="btn btn-block " >{count}</span>
                          </div>
                          <div className="mx-1">
                      <span className="btn btn-block " onClick={()=>increase(id)}>+</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 text-center">
                <p className="text-uppercase"><span className="fa fa-trash fa-lg" onClick={()=>removeitem(id)}></span></p>
            </div>
            <div className="col-10 mx-auto col-lg-2 text-center">
                <p className="text-uppercase"><strong>item  total: $ {total}</strong></p>
            </div> 
        </div>
    </div>
        );
}
 
export default Cartitem;<h1> hello from cartitem</h1>