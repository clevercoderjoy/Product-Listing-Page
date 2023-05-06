import React, { useContext } from 'react';
import { Routes, NavLink, Route } from "react-router-dom";
import ProductList from '../pages/ProductList';
import Cart from '../pages/Cart';
import { CartContext } from '../contexts/CartContext';
import ProductDetail from '../pages/ProductDetail';

function Header() {
    const { cartItems } = useContext(CartContext);
    const getActiveStyle = ({ isActive }) => ({
        margin: "1rem",
        textDecoration: "none",
        fontWeight: "bold",
        color: isActive ? "red" : "black",
    });
    return (
        <div>
            <h1>Clever Cart</h1>
            <nav>
                <NavLink to="/" style={getActiveStyle}>Home</NavLink>
                <strong>||</strong>
                <NavLink to="/cart" style={getActiveStyle}>Cart</NavLink>
            </nav>

            <h2>Items in cart: {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}</h2>

            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/productDetail/:productId" element={<ProductDetail />} />
            </Routes>
        </div>
    )
}

export default Header