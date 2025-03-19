import React, { useState } from 'react';

const OrderForm = ({ addToCart }) => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [orderDetails, setOrderDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    addToCart({ name, address, orderDetails });

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Place Your Order</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Order Details:</label>
        <textarea
          value={orderDetails}
          onChange={(e) => setOrderDetails(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
