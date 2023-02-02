import './index.css';
import React from "react";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    const cantElementosCarrito = 5;
    return <div className="carrito"><BsCart4></BsCart4><span className="cantElementos">{cantElementosCarrito}</span></div>;
};

export default CartWidget;