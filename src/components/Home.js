import React from "react";
import { Link, useLocation  } from "react-router-dom";
import logo from '../assets/logo.jpg';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
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
         <nav>
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

function ProductList() {
  const location = useLocation();

  let productList = [];

  if (location.pathname === '/decoration') {
    productList = [
      { name: 'Candle Container 1', price: '$150', image: product1 },
      { name: 'Candle Container 2', price: '$130', image: product1 },
      { name: 'Candle Container 3', price: '$120', image: product1 },
      { name: 'Candle Container 4', price: '$110', image: product1 },
      { name: 'Candle Container 5', price: '$100', image: product1 },
      { name: 'Candle Container 6', price: '$140', image: product1 },
    ];
  } else if (location.pathname === '/tableware') {
    productList = [
      { name: 'Tableware 1', price: '$50', image: product2 },
      { name: 'Tableware 2', price: '$120', image: product2 },
      { name: 'Tableware 3', price: '$70', image: product2 },
      { name: 'Tableware 4', price: '$10', image: product2 },
      { name: 'Tableware 5', price: '$580', image: product2 },
      { name: 'Tableware 6', price: '$70', image: product2 },
    ];
  } else if (location.pathname === '/vase') {
    productList = [
      { name: 'Vase 1', price: '$100', image: product3 },
      { name: 'Vase 2', price: '$210', image: product3 },
      { name: 'Vase 3', price: '$140', image: product3 },
      { name: 'Vase 4', price: '$1800', image: product3 },
      { name: 'Vase 5', price: '$1005', image: product3 },
      { name: 'Vase 6', price: '$1040', image: product3 },
    ];
  } else if (location.pathname === '/cup') {
    productList = [
      { name: 'Cup 1', price: '$20', image: product4 },
      { name: 'Cup 2', price: '$120', image: product4 },
      { name: 'Cup 3', price: '$210', image: product4 },
      { name: 'Cup 4', price: '$250', image: product4 },
      { name: 'Cup 5', price: '$420', image: product4 },
      { name: 'Cup 6', price: '$270', image: product4 },
    ];
  }

  return (
    <div className="Product-list">
      {productList.map((product, index) => (
        <div className="Product-card" key={index}>
          <img src={product.image} className="Product-img" alt={product.name} />
          <Link to={`${location.pathname}/product`}>
            <h6 className="Product-name">{product.name}</h6>
          </Link>
          <h6 className="Product-price">{product.price}</h6>
          <button className="Add-to-cart">Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;

