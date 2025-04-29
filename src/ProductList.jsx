// src/ProductList.jsx
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList({ products }) {
  const electronicsProducts = products.filter(
    (product) => product.category === 'Electronics'
  );
  const clothingProducts = products.filter(
    (product) => product.category === 'Clothing'
  );
  const homeofficeProducts = products.filter(
    (product) => product.category === 'Home&Office'
  );

  return (
    <div className="product-list">
      <section>
        <h2>Electronics Products</h2>
        {electronicsProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>

      <section>
        <h2>Clothing Products</h2>
        {clothingProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>

      <section>
        <h2>Home&Office Products</h2>
        {homeofficeProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default ProductList;