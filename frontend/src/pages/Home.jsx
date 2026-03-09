import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page animate-fade-in">
            <section className="hero-section">
                <h2 className="hero-headline">WatchHub Pro.</h2>
                <h3 className="hero-subheadline">Titanium. So strong. So light. So Pro.</h3>
                <p className="hero-price">From ₹41,900 or ₹4,162/mo. for 12 mo.</p>
                <div className="hero-cta">
                    <button className="button">Buy</button>
                    <a href="#" className="link-arrow">Learn more <ArrowRight size={14} /></a>
                </div>
                <div className="hero-image-wrapper">
                    <img src="https://media.rolex.com/image/upload/q_auto:eco,f_auto,c_limit,w_800/v1/catalogue/2024/upright-c/m124060-0001" alt="Premium Watch" className="hero-image" />
                </div>
            </section>

            <section className="featured-section container pt-section pb-section">
                <h2 className="section-title text-center mb-4">The latest. Take a look at what's new, right now.</h2>
                <div className="card-grid">
                    <div className="product-card">
                        <h4>Classic Series 9</h4>
                        <p>Smarter. Brighter. Mightier.</p>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-s9-202309_GEO_IN_FMT_WHH?wid=340&hei=264&fmt=png-alpha&.v=1693611649622" alt="Watch Series 9" />
                        <div className="card-footer">
                            <span className="price">₹41,900</span>
                            <button className="button button-small">Buy</button>
                        </div>
                    </div>
                    <div className="product-card dark">
                        <h4>Ultra 2 </h4>
                        <p>Next level adventure.</p>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_IN_FMT_WHH?wid=340&hei=264&fmt=png-alpha&.v=1724128549641" alt="Watch Ultra 2" />
                        <div className="card-footer">
                            <span className="price">₹89,900</span>
                            <button className="button button-small outline light-outline">Buy</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <h4>Minimalist Edition</h4>
                        <p>Elegance in simplicity.</p>
                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-se-202409_GEO_IN_FMT_WHH?wid=340&hei=264&fmt=png-alpha&.v=1724032115167" alt="Watch SE" />
                        <div className="card-footer">
                            <span className="price">₹29,900</span>
                            <button className="button button-small">Buy</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
