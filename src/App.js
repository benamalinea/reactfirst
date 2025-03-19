import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import OrderForm from './OrderForm';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Modern Food Ordering Website</h1>
      </header>
      <Menu />
      <OrderForm addToCart={setCartItems} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
