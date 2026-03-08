import React from 'react';
import './Compare.css';

const Compare = () => {
    return (
        <div className="compare-page animate-fade-in pt-section container">
            <h1 className="page-title text-center mb-4">Which watch is right for you?</h1>

            <div className="compare-grid mt-4">
                {/* Column 1 */}
                <div className="compare-col">
                    <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=300" alt="Watch 1" className="compare-img" />
                    <h3 className="mt-2">Series 9</h3>
                    <p className="price mt-2">From $399</p>
                    <button className="button button-small mt-2">Buy</button>

                    <div className="specs mt-4">
                        <div className="spec-item">
                            <span className="spec-icon">✨</span>
                            <p>Always-On Retina display</p>
                        </div>
                        <div className="spec-item">
                            <span className="spec-icon">❤️</span>
                            <p>ECG app</p>
                        </div>
                        <div className="spec-item">
                            <span className="spec-icon">🔋</span>
                            <p>18 hours battery life</p>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="compare-col">
                    <img src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=300" alt="Watch 2" className="compare-img" />
                    <h3 className="mt-2">Ultra 2</h3>
                    <p className="price mt-2">From $799</p>
                    <button className="button button-small mt-2">Buy</button>

                    <div className="specs mt-4">
                        <div className="spec-item">
                            <span className="spec-icon">✨</span>
                            <p>Always-On Retina display (3000 nits)</p>
                        </div>
                        <div className="spec-item">
                            <span className="spec-icon">❤️</span>
                            <p>ECG app & Siren tool</p>
                        </div>
                        <div className="spec-item">
                            <span className="spec-icon">🔋</span>
                            <p>36 hours battery life</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compare;
