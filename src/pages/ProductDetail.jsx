import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/productsDB';
import ProductCard from '../components/ProductCard';

function ProductDetail() {
    const { productId } = useParams();

    const getProductDetails = (products, productId) => {
        return products.find(({ id }) => id === Number(productId));
    }
    const product = getProductDetails(products, productId);

    return (
        <>
            <h2>Product Details</h2>
            <ProductCard {...product} />
            <Link to="/" style={{ fontWeight: "bold", padding: "0.5rem 1rem", margin: "1rem", borderRadius: "5px", border: "none", textDecoration: "none", color: "red", display: "inline-block" }}>See All</Link>
        </>
    )
}

export default ProductDetail