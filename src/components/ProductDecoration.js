import React from "react";
import logo from '../assets/logo.jpg';
import "../App.css";
import { Link, useLocation } from 'react-router-dom';

const ProductDecoration = ({ hierarchicalMenu }) => {
    const location = useLocation();
    const { product } = location?.state;

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
                        <Link to={item.path} className={location.pathname === item.path ? 'active' : ''} state={{ product: product }}>
                        {item.name}
                        </Link>
                    </React.Fragment>
                    ))}
                </nav>
                <div className="Product-page-card">
                    <img src={product.image} className="Product-page-img" alt="Product 1" />
                    <dir className='Product-page-detail'>
                        <h3>{product.name}</h3>
                        <h5>Price: {product.price}</h5>
                        <h5>Inventory: {product.inventory}</h5>
                        {product.inventory <= 3 && (
                            <h5 className="Inventory">Only {product.inventory} left!</h5>
                        )}
                        <h6>Description: This is a {product.name}.</h6>
                        <button className="Add-to-cart">Add To Cart</button>
                    </dir>
                </div>
            </body>
		</div>
	);
};

export default ProductDecoration;
