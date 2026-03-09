import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../store';
import { Filter, X } from 'lucide-react';
import './Collections.css';

const Collections = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
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

    const availableBrands = [...new Set(products.map(p => p.brand?.name).filter(Boolean))];
    const availableCategories = [...new Set(products.map(p => p.category?.name).filter(Boolean))];

    const toggleBrand = (brand) => {
        setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
    };

    const toggleCategory = (category) => {
        setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
    };

    const clearFilters = () => {
        setSelectedBrands([]);
        setSelectedCategories([]);
    };

    const filteredProducts = products.filter(product => {
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand?.name);
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category?.name);
        return brandMatch && categoryMatch;
    });

    if (loading) return <div className="loading-state pt-section">Loading collections...</div>;

    return (
        <div className="collections-page animate-fade-in pt-section container">
            <div className="collections-header">
                <h1 className="page-title">All Models.</h1>
                <button
                    className={`button outline filter-btn ${showFilters ? 'active' : ''}`}
                    onClick={() => setShowFilters(!showFilters)}
                >
                    {showFilters ? <X size={16} /> : <Filter size={16} />}
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
            </div>

            <div className="collections-content">
                {showFilters && (
                    <div className="filter-sidebar animate-fade-in">
                        <div className="filter-header">
                            <h3>Filters</h3>
                            <button className="clear-btn" onClick={clearFilters}>Clear All</button>
                        </div>

                        <div className="filter-group">
                            <h4>Brands</h4>
                            {availableBrands.map(brand => (
                                <label key={brand} className="filter-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedBrands.includes(brand)}
                                        onChange={() => toggleBrand(brand)}
                                    />
                                    {brand}
                                </label>
                            ))}
                        </div>

                        <div className="filter-group">
                            <h4>Categories</h4>
                            {availableCategories.map(category => (
                                <label key={category} className="filter-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => toggleCategory(category)}
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                <div className="collections-grid mt-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <h4>{product.name}</h4>
                                <p>{product.description?.substring(0, 50)}...</p>
                                <img src={product.image_url} alt={product.name} />
                                <div className="card-footer">
                                    <span className="price">₹{product.price}</span>
                                    <button className="button button-small" onClick={() => { addToCart(product); alert(`${product.name} added to your bag!`); }}>Add to Bag</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">No products match your selected filters.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Collections;
