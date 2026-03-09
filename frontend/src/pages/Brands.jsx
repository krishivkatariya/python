import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../store';
import './Brands.css';

const Brands = () => {
    const [groupedProducts, setGroupedProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const addToCart = useStore(state => state.addToCart);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/')
            .then(res => {
                const grouped = res.data.reduce((acc, product) => {
                    const brandName = product.brand.name;
                    if (!acc[brandName]) acc[brandName] = [];
                    acc[brandName].push(product);
                    return acc;
                }, {});
                setGroupedProducts(grouped);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch products", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading-state pt-section">Loading brands...</div>;

    return (
        <div className="brands-page animate-fade-in pt-section container">
            <h1 className="page-title mb-4 text-center">Shop by Brand.</h1>

            <div className="brands-container mt-4">
                {Object.entries(groupedProducts).map(([brandName, products]) => (
                    <div key={brandName} className="brand-section mb-4">
                        <h2 className="brand-title">{brandName}</h2>
                        <div className="card-grid mt-2">
                            {products.map(product => (
                                <div key={product.id} className="product-card">
                                    <h4>{product.name}</h4>
                                    <p>{product.description?.substring(0, 50)}...</p>
                                    <img src={product.image_url} alt={product.name} />
                                    <div className="card-footer">
                                        <span className="price">₹{product.price}</span>
                                        <button className="button button-small" onClick={() => { addToCart(product); alert(`${product.name} added to your bag!`); }}>Add to Bag</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;
