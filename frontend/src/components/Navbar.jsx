import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search, Watch } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-brand nav-link">
                    <Watch size={20} />
                    <span>WatchHub</span>
                </Link>
                <div className="nav-links">
                    <Link to="/collections" className="nav-link">Collections</Link>
                    <Link to="/brands" className="nav-link">Brands</Link>
                    <Link to="/compare" className="nav-link">Compare</Link>
                </div>
                <div className="nav-links">
                    <Link to="/search" className="nav-link"><Search size={16} /></Link>
                    <Link to="/cart" className="nav-link"><ShoppingBag size={16} /></Link>
                    <Link to="/profile" className="nav-link"><User size={16} /></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
