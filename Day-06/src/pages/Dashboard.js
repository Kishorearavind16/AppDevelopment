import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from './authActions';
import '../assets/css/Dashboard.css'; 
import { selectUser } from '../redux/userSlice';

import product1Image from '../assets/images/Panton lamp.jpg';
import product2Image from '../assets/images/Sofa.jpg';
import product3Image from '../assets/images/Armchair.jpg';
import product4Image from '../assets/images/Office Table.jpg';
import product5Image from '../assets/images/Wooden Shelf.jpeg';
import product6Image from '../assets/images/Bertoia Side Chair.jpg';
import product7Image from '../assets/images/Dinning Table.jpeg';

export const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    console.log(user);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="logo"></div>
                <ul>
                    <li><Link to="/Dashboard">Home</Link></li>
                    <li><Link to="/academic">Products</Link></li>
                    <li><Link to="/application">Cart</Link></li>
                    <li><Link to="/application">Wishlist</Link></li>
                    <li><Link to="/application">FAQ</Link></li>
                </ul>
            </div>
            <div className="content">
                <header>
                    <div className="top-nav">
                        <div className="welcome">HI, {user.email}</div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </header>
                <main>
                    
                    <h1>Dashboard</h1>
                    <p>Your Products</p>
                    <div className="scroll-container">
                        <div className="product-card">
                            <img src={product1Image} alt="Product 1" className="product-image" />
                            <h2 className="product-title">Panton Lamp</h2>
                            {/*<p className="product-description"></p>*/}
                            <p className="product-price">RS 3500</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                        <div className="product-card">
                            <img src={product2Image} alt="Product 2" className="product-image" />
                            <h2 className="product-title">Sofa</h2>
                            {/*<p className="product-description"></p>*/}
                            <p className="product-price">RS 14000</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                        <div className="product-card">
                            <img src={product3Image} alt="Product 3" className="product-image" />
                            <h2 className="product-title">Armchair</h2>
                            {/*<p className="product-description"></p>*/}
                            <p className="product-price">RS 7500</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                        <div className="product-card">
                            <img src={product4Image} alt="Product 4" className="product-image" />
                            <h2 className="product-title">Office Table</h2>
                            {/*<p className="product-description"></p>*/}
                            <p className="product-price">RS 5500</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                        <div className="product-card">
                            <img src={product5Image} alt="Product 5" className="product-image" />
                            <h2 className="product-title">Wooden Shelf</h2>
                            {/*<p className="product-description"></p>*/}
                            <p className="product-price">RS 17600</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                        <div className="product-card">
                            <img src={product6Image} alt="Product 5" className="product-image" />
                            <h2 className="product-title">Chair</h2>
                            {/*<p className="product-description"></p>*/}
                            <p className="product-price">RS 4500</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                        <div className="product-card">
                            <img src={product7Image} alt="Product 5" className="product-image" />
                            <h2 className="product-title">Dinning Table</h2>
                            {/*<p className="product-description"></p>*/}
                            <p className="product-price">RS 20500</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}