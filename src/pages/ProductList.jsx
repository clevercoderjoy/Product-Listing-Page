import React, { useContext } from 'react'
import { products } from './../data/productsDB';
import { CartContext } from '../contexts/CartContext.jsx';
import { Link } from 'react-router-dom';
import { buttonStyle, linkStyle, listStyle } from './Cart';

function ProductList() {

    const { addItemToCart } = useContext(CartContext);
    return (
        <>
            <ul>
                {
                    products.map((item) => {
                        const { id, name, price } = item;
                        return (<li key={id} style={listStyle}>
                            <h3>{name} INR {price}</h3>
                            <button style={buttonStyle} onClick={() => addItemToCart(item)}>Add to Cart</button>
                            <Link to={`/productDetail/${id}`} style={linkStyle}>Product Detail</Link>
                        </li>)
                    })
                }
            </ul>
        </>
    )
}

export default ProductList