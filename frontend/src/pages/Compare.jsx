import React from 'react';
import './Compare.css';

const Compare = () => {
    return (
        <div className="compare-page animate-fade-in pt-section container">
            <h1 className="page-title text-center mb-4">Which watch is right for you?</h1>

            <div className="compare-grid mt-4">
                {/* Column 1 */}
                <div className="compare-col">
                    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-s9-202309_GEO_IN_FMT_WHH?wid=340&hei=264&fmt=png-alpha&.v=1693611649622" alt="Watch Series 9" className="compare-img" />
                    <h3 className="mt-2">Watch Series 9</h3>
                    <p className="price mt-2">From ₹41,900</p>
                    <button className="button button-small mt-2">Find out more</button>

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
                    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_IN_FMT_WHH?wid=340&hei=264&fmt=png-alpha&.v=1724128549641" alt="Watch Ultra 2" className="compare-img" />
                    <h3 className="mt-2">Watch Ultra 2</h3>
                    <p className="price mt-2">From ₹89,900</p>
                    <button className="button button-small mt-2">Find out more</button>

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

                {/* Column 3 */}
                <div className="compare-col">
                    <img src="https://media.rolex.com/image/upload/q_auto:eco,f_auto,c_limit,w_800/v1/catalogue/2024/upright-c/m124060-0001" alt="Submariner Date" className="compare-img" />
                    <h3 className="mt-2">Submariner Date</h3>
                    <p className="price mt-2">From ₹8,50,000</p>
                    <button className="button button-small mt-2">Find out more</button>

                    <div className="specs mt-4">
                        <div className="spec-item">
                            <span className="spec-icon">🌊</span>
                            <p>Waterproof to 300 meters</p>
                        </div>
                        <div className="spec-item">
                            <span className="spec-icon">⏱️</span>
                            <p>Unidirectional rotatable bezel</p>
                        </div>
                        <div className="spec-item">
                            <span className="spec-icon">⚙️</span>
                            <p>Perpetual, mechanical, self-winding</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compare;
