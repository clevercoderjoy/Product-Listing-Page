import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { buttonStyle, listStyle } from '../pages/Cart';

function ProductCard(item) {
    const { addItemToCart } = useContext(CartContext);
    const { id, name, price } = item;

    return (
        <>
            <div key={id} style={listStyle}>
                <h2>Product Name: {name}</h2>
                <h3>Product Price: INR {price}/-</h3>
                <button style={buttonStyle} onClick={(e) => addItemToCart(item, e)}>Add to Cart</button>
            </div>
        </>
    )
}

export default ProductCard