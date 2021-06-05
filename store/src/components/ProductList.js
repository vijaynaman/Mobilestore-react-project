import React ,{useState}from 'react';
import Product from "./Product"
import Title from "./title"
import {useDefault} from "./Context"
const ProductList=()=>{
    const {products}=useDefault()
    
    return(
        <React.Fragment>
            <div className="py-5">
                <div className="container px-5">
                    <Title name="Our" title="products"/>
                    <div className="row">
                    {products.map(product=>{
                        
                        return <Product key={product.id} info={product}/>
                    })}
                    </div>
                </div>
            </div>
        </React.Fragment>);
}
export default ProductList