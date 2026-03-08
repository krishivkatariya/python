import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page animate-fade-in">
            <section className="hero-section">
                <h2 className="hero-headline">WatchHub Pro.</h2>
                <h3 className="hero-subheadline">Titanium. So strong. So light. So Pro.</h3>
                <p className="hero-price">From $999 or $41.62/mo. for 24 mo.</p>
                <div className="hero-cta">
                    <button className="button">Buy</button>
                    <a href="#" className="link-arrow">Learn more <ArrowRight size={14} /></a>
                </div>
                <div className="hero-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=2000" alt="Premium Watch" className="hero-image" />
                </div>
            </section>

            <section className="featured-section container pt-section pb-section">
                <h2 className="section-title text-center mb-4">The latest. Take a look at what's new, right now.</h2>
                <div className="card-grid">
                    <div className="product-card">
                        <h4>Classic Series 9</h4>
                        <p>Smarter. Brighter. Mightier.</p>
                        <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=600" alt="Watch 1" />
                        <div className="card-footer">
                            <span className="price">$399</span>
                            <button className="button button-small">Buy</button>
                        </div>
                    </div>
                    <div className="product-card dark">
                        <h4>Ultra 2 </h4>
                        <p>Next level adventure.</p>
                        <img src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=600" alt="Watch 2" />
                        <div className="card-footer">
                            <span className="price">$799</span>
                            <button className="button button-small outline light-outline">Buy</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <h4>Minimalist Edition</h4>
                        <p>Elegance in simplicity.</p>
                        <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=600" alt="Watch 3" />
                        <div className="card-footer">
                            <span className="price">$299</span>
                            <button className="button button-small">Buy</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
