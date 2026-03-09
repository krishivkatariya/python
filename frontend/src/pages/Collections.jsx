import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../store';
import { Filter } from 'lucide-react';
import './Collections.css';

const Collections = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const addToCart = useStore(state => state.addToCart);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch real products from backend", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading-state pt-section">Loading collections...</div>;

    return (
        <div className="collections-page animate-fade-in pt-section container">
            <div className="collections-header">
                <h1 className="page-title">All Models.</h1>
                <button className="button outline filter-btn"><Filter size={16} /> Filter</button>
            </div>

            <div className="collections-grid mt-4">
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
    );
};

export default Collections;
