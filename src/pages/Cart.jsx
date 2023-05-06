import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItems } = useContext(CartContext);
    const { removeItemFromCart } = useContext(CartContext);
    return (
        <>
            <ul>
                {
                    cartItems.map((item) => {
                        const { id, name, price, quantity } = item;
                        return (<li key={id} style={listStyle}>
                            <h3>{name} INR {price}</h3>
                            
                            <button style={buttonStyle} onClick={() => removeItemFromCart(item)} >Remove from Cart</button>

                            <Link to={`/productDetail/${id}`} style={linkStyle}>Product Detail</Link>

                            <span style={spanStyle}>Quantity: {quantity}</span>
                        </li>)
                    })
                }
            </ul>
        </>
    )
}

export default Cart

export const listStyle = { border: "1px solid black", margin: "1rem", padding: "1rem", listStyle: "none", borderRadius: "5px" };
export const buttonStyle = { fontWeight: "bold", padding: "0.5rem 1rem", margin: "1rem", borderRadius: "5px", border: "none", cursor: "pointer" };
export const linkStyle = { fontWeight: "bold", padding: "0.5rem 1rem", margin: "1rem", borderRadius: "5px", border: "none", textDecoration: "none", color: "red" };
export const spanStyle = { fontWeight: "bold", padding: "0.5rem 1rem", margin: "1rem", borderRadius: "5px", border: "none", textDecoration: "none" };