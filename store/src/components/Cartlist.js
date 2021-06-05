import React from 'react';
import Cartitem from "./cartitem"
import {useDefault} from "./Context"
const Cartlist = () => {
    const {products}=useDefault()
    return ( 
        <React.Fragment>
                {products.filter(itm => itm.inCart === true).map(cartitm=><Cartitem key={cartitm.id} value={cartitm}/>)}
        </React.Fragment>
        
     );
}
 
export default Cartlist;