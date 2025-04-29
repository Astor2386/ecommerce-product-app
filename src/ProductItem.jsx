// src/ProductItem.jsx
import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img
        src={product.image}
        alt={`${product.name} - ${product.description}`} // More descriptive alt text
        className="product-image"
      />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductItem;