import logo from './assets/logo.jpg';
import product1 from './assets/product1.jpg';
import './App.css';

function App() {
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
        <div className="Row">
          <button className="Catagories-button">Decoration</button>
          <button className="Catagories-button">Tableware</button>
          <button className="Catagories-button">Vase</button>
          <button className="Catagories-button">Cup</button>
          <button className="Catagories-button">Course</button>
        </div>
        <div className="Product-list">
          <div className="Product-card">
             <img src={product1} className="Product-img" alt="Product 1" />
            <h6 className="Product-name">Candle Container</h6>
            <h6 className="Product-price">$ 150</h6>
            <button className="Add-to-cart">Add To Cart</button>
          </div>
         <div className="Product-card">
             <img src={product1} className="Product-img" alt="Product 1" />
            <h6 className="Product-name">Candle Container</h6>
            <h6 className="Product-price">$ 150</h6>
            <button className="Add-to-cart">Add To Cart</button>
          </div>
          <div className="Product-card">
             <img src={product1} className="Product-img" alt="Product 1" />
            <h6 className="Product-name">Candle Container</h6>
            <h6 className="Product-price">$ 150</h6>
            <button className="Add-to-cart">Add To Cart</button>
          </div>
          <div className="Product-card">
             <img src={product1} className="Product-img" alt="Product 1" />
            <h6 className="Product-name">Candle Container</h6>
            <h6 className="Product-price">$ 150</h6>
            <button className="Add-to-cart">Add To Cart</button>
          </div>
          <div className="Product-card">
             <img src={product1} className="Product-img" alt="Product 1" />
            <h6 className="Product-name">Candle Container</h6>
            <h6 className="Product-price">$ 150</h6>
            <button className="Add-to-cart">Add To Cart</button>
          </div>
          <div className="Product-card">
             <img src={product1} className="Product-img" alt="Product 1" />
            <h6 className="Product-name">Candle Container</h6>
            <h6 className="Product-price">$ 150</h6>
            <button className="Add-to-cart">Add To Cart</button>
          </div>
           <div className="Product-card">
             <img src={product1} className="Product-img" alt="Product 1" />
            <h6 className="Product-name">Candle Container</h6>
            <h6 className="Product-price">$ 150</h6>
            <button className="Add-to-cart">Add To Cart</button>
          </div>
           <div className="Product-card">
             <img src={product1} className="Product-img" alt="Product 1" />
            <h6 className="Product-name">Candle Container</h6>
            <h6 className="Product-price">$ 150</h6>
            <button className="Add-to-cart">Add To Cart</button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
