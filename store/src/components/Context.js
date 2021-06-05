import React, { useContext, useEffect, useState } from 'react';
import { storeProducts, detailProduct } from "../data";

const Appmaterial = React.createContext()
export const Appprovider = ({ children }) => {
    const [products, setproducts] = useState([]);
    
    const [detailedproducts, setdetailedproducts] = useState({});
    const [modalopen, setmodalopen] = useState(false)
    const [modaldata, setmodaldata] = useState({});
    const [cartsubtotal, setcartsubtotal] = useState(0);
    const [carttax, setcarttax] = useState(0);
    const [carttotal, setcarttotal] = useState(0);
    const addtocart = (id) => {

        // setmycart([...mycart,item]);
        const newproduct = [...products];
        const index = newproduct.indexOf(getitem(id));

        newproduct[index].inCart = true;
        newproduct[index].count = 1;

        newproduct[index].total = newproduct[index].price;
        setproducts(newproduct);
         
       

    }
    const increase = (id) => {
        const newproduct = [...products];
        const index = newproduct.indexOf(getitem(id));

        newproduct[index].inCart = true;
        newproduct[index].count += 1;

        newproduct[index].total = newproduct[index].price*newproduct[index].count;
        setproducts(newproduct);
    }
    const decrease = (id) => {
        const newproduct = [...products];
        const index = newproduct.indexOf(getitem(id));
        if(newproduct[index].count===1){
            newproduct[index].inCart = false;
        newproduct[index].count =0 ;

        newproduct[index].total = newproduct[index].price*newproduct[index].count;
        }
        else if(newproduct[index].count>1){
            newproduct[index].inCart = true;
            newproduct[index].count -= 1;
    
            newproduct[index].total = newproduct[index].price*newproduct[index].count;
        }
        
        setproducts(newproduct);
    }
    const removeitem = (id) => {
        const newproduct = [...products];
        const index = newproduct.indexOf(getitem(id));

        newproduct[index].inCart = false;
        newproduct[index].count = 0;

        newproduct[index].total = 0;
        setproducts(newproduct);
    }
    const clearcart = () => {
        getproductfromdata();
    }
    const getitem = (id) => {
        const item = products.find(itm => itm.id === id)
        return item
    }
    const openmodal = (id) => {
        setmodalopen(true)
        setmodaldata(getitem(id))
    }
    const closemodal = () => {
        setmodalopen(false)

    }
    const handleDetail = (id) => {
        const item = getitem(id);
        setdetailedproducts(item)

    }
    useEffect(()=>{
        let subtotal=0;
        let tax=0;
        
        products.map(item=>(subtotal+=item.total));
        let temptax=subtotal*0.1;
        tax=parseFloat(temptax.toFixed(2));
        setcartsubtotal(subtotal);
        setcarttax(tax);
        setcarttotal(tax+subtotal);

    },[products])
    const getproductfromdata=()=>{
        let text = [];
        storeProducts.forEach(product => {
            const item = { ...product }
            text = [...text, item];
        });

        setproducts(text);
    }
    useEffect(() => {
        getproductfromdata();
    }, [])

    return (
        <Appmaterial.Provider value={{ cartsubtotal, carttotal, carttax, products, detailedproducts, modalopen, modaldata,  increase, decrease, removeitem, clearcart, handleDetail, addtocart, openmodal, closemodal }}>
            {children}
        </Appmaterial.Provider>
    );
}
export const useDefault = () => {
    return useContext(Appmaterial)
}
