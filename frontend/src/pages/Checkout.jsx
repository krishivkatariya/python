import React, { useState } from 'react';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Checkout.css';

const Checkout = () => {
    const { cart, token, clearCart } = useStore();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);

    const total = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

    // Redirect to cart if empty or not logged in
    React.useEffect(() => {
        if (!token) {
            navigate('/login');
        } else if (cart.length === 0) {
            navigate('/cart');
        }
    }, [cart, token, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setError(null);

        // Combine address fields
        const fullAddress = `${formData.address}, ${formData.city}, ${formData.zipCode}, ${formData.country}`;

        const orderData = {
            total_amount: total.toFixed(2),
            delivery_address: fullAddress,
            status: "PLACED",
            items: cart.map(item => ({ product: item, quantity: item.quantity, price: item.price }))
        };

        try {
            // 1. Create the Order
            const { data: orderResponse } = await axios.post('http://127.0.0.1:8000/api/orders/', orderData, {
                headers: { Authorization: `Token ${token}` }
            });

            // 2. Process mock Payment (simulating Razorpay)
            const paymentData = {
                order: orderResponse.id,
                amount: total.toFixed(2),
                status: "SUCCESS"
            };

            await axios.post('http://127.0.0.1:8000/api/payments/', paymentData, {
                headers: { Authorization: `Token ${token}` }
            });

            alert('Payment Successful! Your order has been placed.');
            clearCart();
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('An error occurred during checkout. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    if (!token || cart.length === 0) return null;

    return (
        <div className="checkout-page animate-fade-in pt-section container">
            <h1 className="page-title text-center mb-4">Checkout.</h1>

            <div className="checkout-layout">
                <div className="checkout-form-container">
                    {error && <p className="error-message">{error}</p>}
                    <form className="checkout-form" onSubmit={handlePlaceOrder}>
                        <section className="checkout-section">
                            <h2>Delivery Address</h2>
                            <div className="form-row">
                                <input type="text" name="firstName" placeholder="First Name" required className="apple-input" value={formData.firstName} onChange={handleChange} />
                                <input type="text" name="lastName" placeholder="Last Name" required className="apple-input" value={formData.lastName} onChange={handleChange} />
                            </div>
                            <input type="text" name="address" placeholder="Street Address" required className="apple-input mt-2" value={formData.address} onChange={handleChange} />
                            <div className="form-row mt-2">
                                <input type="text" name="city" placeholder="City" required className="apple-input" value={formData.city} onChange={handleChange} />
                                <input type="text" name="zipCode" placeholder="ZIP Code" required className="apple-input" value={formData.zipCode} onChange={handleChange} />
                            </div>
                            <input type="text" name="country" placeholder="Country" required className="apple-input mt-2" value={formData.country} onChange={handleChange} />
                        </section>

                        <section className="checkout-section mt-4">
                            <h2>Payment Method</h2>
                            <div className="payment-card-box">
                                <input type="text" name="cardNumber" placeholder="Card Number" required className="apple-input" value={formData.cardNumber} onChange={handleChange} maxLength="16" />
                                <div className="form-row mt-2">
                                    <input type="text" name="expiry" placeholder="MM/YY" required className="apple-input" value={formData.expiry} onChange={handleChange} maxLength="5" />
                                    <input type="text" name="cvv" placeholder="CVV" required className="apple-input" value={formData.cvv} onChange={handleChange} maxLength="4" />
                                </div>
                            </div>
                        </section>

                        <button className="button full-width mt-4" type="submit" disabled={isProcessing}>
                            {isProcessing ? 'Processing Payment...' : `Pay $${total.toFixed(2)}`}
                        </button>
                    </form>
                </div>

                <div className="checkout-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-items">
                        {cart.map(item => (
                            <div key={item.id} className="summary-item">
                                <span className="summary-item-name">{item.quantity}x {item.name}</span>
                                <span>${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-totals mt-2">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
