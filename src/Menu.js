import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Delicious cheese pizza with fresh toppings.',
      image: 'path/to/pizza-image.jpg', // Replace with actual image path
      price: 9.99,
    },
    {
      id: 2,
      name: 'Burger',
      description: 'Juicy beef burger with lettuce and tomato.',
      image: 'path/to/burger-image.jpg', // Replace with actual image path
      price: 5.99,
    },
    {
      id: 3,
      name: 'Pasta',
      description: 'Creamy Alfredo pasta with chicken.',
      image: 'path/to/pasta-image.jpg', // Replace with actual image path
      price: 12.99,
    },
  ];

  return (
    <div>
      <h2>Menu</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
