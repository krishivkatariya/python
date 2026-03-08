import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-section">
                        <h4>Shop and Learn</h4>
                        <a href="#">Mens Watches</a>
                        <a href="#">Womens Watches</a>
                        <a href="#">Smartwatches</a>
                        <a href="#">Luxury Edit</a>
                    </div>
                    <div className="footer-section">
                        <h4>Account</h4>
                        <a href="#">Manage Your ID</a>
                        <a href="#">Order Status</a>
                        <a href="#">WatchHub Store</a>
                    </div>
                    <div className="footer-section">
                        <h4>About WatchHub</h4>
                        <a href="#">Materials & Ethics</a>
                        <a href="#">Investors</a>
                        <a href="#">Careers</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>More ways to shop: <a href="#">Find a WatchHub Store</a> or <a href="#">other retailer</a> near you.</p>
                    <div className="legal">
                        <p>Copyright © 2026 WatchHub Inc. All rights reserved.</p>
                        <div className="legal-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Sales and Refunds</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
