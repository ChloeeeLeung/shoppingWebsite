import React from "react";
import logo from '../assets/logo.jpg';
import "../App.css";
import product1 from '../assets/product1.jpg';
import { Link, useLocation } from 'react-router-dom';

const ProductDecoration = ({ hierarchicalMenu }) => {
    const location = useLocation();

    console.log(location.pathname);
	return (
		<div className="App"> 
			<header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h4>CERAMIC WORLD</h4>
            </header>
            <body className="App-body">
                <nav class="Shopping-list">
                    <h6 className='Shopping-list'>Shopping List</h6>
                    <div className='Submenu'>
                    <div className='Row-container'>
                        <h6 className='Left-text'>Candle Container</h6>
                        <input type="number" className="Quantity-input" />
                        <h6 className='Left-text'>$ 150</h6>
                    </div>
                        <div className='Row-container'>
                        <h6 className='Left-text'>Candle Container</h6>
                        <input type="number" className="Quantity-input" />
                        <h6 className='Left-text'>$ 150</h6>
                    </div>
                    <hr className='Line' />
                    <button className="Checkout">Checkout</button>
                    </div>
                </nav>
                <nav className="Hierarchical">
                {hierarchicalMenu.map((item, index) => (
                    <React.Fragment key={item.path}>
                        {index !== 0 && ' > '}
                        <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                        {item.name}
                        </Link>
                    </React.Fragment>
                    ))}
                </nav>
                <div className="Product-page-card">
                    <img src={product1} className="Product-page-img" alt="Product 1" />
                    <dir className='Product-page-detail'>
                        <h3>Candle Container</h3>
                        <h5>Price: $ 150</h5>
                        <h5>Inventory: 3</h5>
                        <h5 className='Inventory'>Only 3 left!</h5>
                        <h6>Description: This is a candle container.</h6>
                        <button className="Add-to-cart">Add To Cart</button>
                    </dir>
                </div>
            </body>
		</div>
	);
};

export default ProductDecoration;
