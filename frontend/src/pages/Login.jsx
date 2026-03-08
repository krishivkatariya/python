import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');

    const setToken = useStore(state => state.setToken);
    const setUser = useStore(state => state.setUser);
    const navigate = useNavigate();

    const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const endpoint = isLogin ? 'http://127.0.0.1:8000/api/users/auth/login/' : 'http://127.0.0.1:8000/api/users/auth/register/';

        try {
            const { data } = await axios.post(endpoint, formData);
            setToken(data.token);
            setUser(data.user);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.error || 'Authentication failed. Please check your details.');
        }
    };

    return (
        <div className="login-page animate-fade-in pt-section container">
            <div className="login-box">
                <h1 className="page-title text-center mb-2">{isLogin ? 'Sign In' : 'Create Account'}</h1>
                <p className="text-center mb-4 text-light">
                    {isLogin ? 'Sign in to WatchHub Store.' : 'Join the WatchHub Family.'}
                </p>

                {error && <p className="text-center" style={{ color: 'red', marginBottom: '16px' }}>{error}</p>}

                <form className="login-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input type="email" name="email" placeholder="Email Address" required className="apple-input" value={formData.email} onChange={handleInputChange} />
                    )}
                    <input type="text" name="username" placeholder="Username" required className="apple-input" value={formData.username} onChange={handleInputChange} />
                    <input type="password" name="password" placeholder="Password" required className="apple-input" value={formData.password} onChange={handleInputChange} />

                    <button className="button full-width mt-2" type="submit">
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                <div className="login-footer mt-4 text-center">
                    <p>
                        {isLogin ? "Don't have an ID? " : "Already have an ID? "}
                        <button className="text-btn" type="button" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Create yours now.' : 'Sign in.'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
