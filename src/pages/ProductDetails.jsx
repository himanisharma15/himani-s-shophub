import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  
  // Find the product by ID from URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container center-text">
        <h2>Product not found.</h2>
        <Link to="/products" className="btn-primary">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <Link to="/products" className="back-link">&larr; Back</Link>
      
      <div className="details-card">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="details-info">
          <span className="product-category">{product.category}</span>
          <h2>{product.name}</h2>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="description">{product.description}</p>
          
          <button 
            className="btn-primary add-large"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;