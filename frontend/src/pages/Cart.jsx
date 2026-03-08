import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, token } = useStore();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

    const handleProceedToCheckout = () => {
        if (!token) {
            alert("Please login to place an order.");
            navigate('/login');
            return;
        }
        navigate('/checkout');
    };

    if (cart.length === 0) {
        return (
            <div className="cart-page animate-fade-in pt-section container text-center">
                <h1 className="page-title mb-4">Your bag is empty.</h1>
                <p className="mb-4">Free delivery and free returns.</p>
                <Link to="/collections" className="button">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-page animate-fade-in pt-section container">
            <h1 className="page-title mb-4 text-center">Review your bag.</h1>
            <p className="text-center mb-4">Free delivery and free returns.</p>

            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image_url} alt={item.name} className="cart-img" />
                        <div className="cart-details">
                            <div className="cart-item-header">
                                <h3>{item.name}</h3>
                                <span className="cart-price">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                            </div>
                            <p className="cart-quantity">Quantity: {item.quantity}</p>
                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash2 size={16} /> Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary mt-4">
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                    <span>Shipping</span>
                    <span>FREE</span>
                </div>
                <div className="summary-row total-row">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>

                <div className="cart-actions mt-4">
                    <button className="button full-width" onClick={handleProceedToCheckout}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
