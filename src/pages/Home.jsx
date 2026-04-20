import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const heroSlides = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80"
];

const Home = ({ onAddToCart }) => {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000); // changes every 5 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (location.state?.orderSuccess) {
      alert("🎉 Order placed successfully! Thank you for shopping with us.");
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Show only first 6 products as featured now since we have more
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home-page">
      <section className="hero">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Rishuu's ShopHub</h1>
          <p>Discover the latest trends in electronics, fashion, and accessories.</p>
          <Link to="/products" className="btn-primary hero-btn">Shop Now</Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
        <div className="text-center">
          <Link to="/products" className="btn-outline view-all-btn">View All Products</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;