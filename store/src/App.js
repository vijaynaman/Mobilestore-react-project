
import {Switch,Route} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Detail from "./components/Detail"
import Default from "./components/Default"
import Cart from "./components/Cart"
import React from 'react';
import Modal from "./components/Modal"
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/"  component={ProductList}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/cart" component={Cart}/>
        <Route path="*" component={Default}/>
      </Switch>
      <Modal/>
  </React.Fragment>
  );
}

export default App;
