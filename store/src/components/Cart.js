import React from 'react';
import Title from "./title"
import Cartcolumns from "./Cartcolumn"
import Emptycar from "./Emptycart"
import { useDefault } from "./Context"
import Cartlist from "./Cartlist"
import Carttotal from "./Carttotal"
const Cart = () => {
    const { products } = useDefault()
    const getchildren = () => {
        if (products.filter(itm => itm.inCart === true).length > 0) {
            return (
                <React.Fragment>
                    <Title name="your" title="cart" />
                    <Cartcolumns />
                    <Cartlist />
                    <Carttotal />
                </React.Fragment>
            )
        }
        else return <Emptycar />

    }
    return (
        <section>
            {getchildren()}
        </section>
    );
}

export default Cart;