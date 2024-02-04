import React from "react";
import { Link, useLocation  } from "react-router-dom";
import logo from '../assets/logo.jpg';
import ProductList from './ProductList';
import "../App.css";

function Home({ hierarchicalMenu }) {
  const location = useLocation();
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
        <div className="Row">
          <Link to="/decoration">
            <button className="Catagories-button">Decoration</button>
          </Link>
          <Link to="/tableware">
            <button className="Catagories-button">Tableware</button>
          </Link>
          <Link to="/vase">
            <button className="Catagories-button">Vase</button>
          </Link>
          <Link to="/cup">
            <button className="Catagories-button">Cup</button>
          </Link>
        </div>
        <ProductList/>
      </body>
    </div>
    
  );
}

export default Home;

