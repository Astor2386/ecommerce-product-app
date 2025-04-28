// src/App.jsx
import { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      description: 'A powerful laptop for work and gaming.',
      category: 'Electronics',
      image: '/images/laptop.jpg', // Placeholder for the laptop image
    },
    {
      id: 2,
      name: 'Airpods',
      price: 229.99,
      description: 'Wireless earbuds with great sound quality.',
      category: 'Electronics',
      image: '/images/headphones.jpg', // Placeholder for the headphones image
    },
    {
      id: 3,
      name: 'Gamer Chair',
      price: 399.99,
      description: 'Ultimate comfort for intense gaming',
      category: 'Home&Office',
      image: '/images/gamerchair.jpg', // Placeholder for the Gamerchair image
    },
    {
      id: 4,
      name: 'IPhone',
      price: 699.99,
      description: 'A high-end smartphone with advanced features.',
      category: 'Electronics',
      image: '/images/smartphone.jpg', // Placeholder for the smartphone image
    },
    {
      id: 5,
      name: 'T-shirt',
      price: 29.99,
      description: 'Stylish shirt with Hexagon pattern.',
      category: 'Clothing',
      image: '/images/shirt.jpg', // Placeholder for the shirts image
    },
  ]);

  return (
    <div className="app-container">
      <h1>E-Commerce Product App</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;