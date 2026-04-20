import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/Checkout';

function App() {
  // Initialize cart from LocalStorage, or empty array if none
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('shophub_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Toast state
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Save cart to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shophub_cart', JSON.stringify(cart));
  }, [cart]);

  // Handle adding an item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If product already in cart, increment quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Otherwise, add new product with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    showToast(`${product.name} added to cart!`);
  };

  // Handle removing item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Handle updating quantity
  const updateQuantity = (productId, action) => {
    setCart((prevCart) => 
      prevCart.map((item) => {
        if (item.id === productId) {
          if (action === 'increase') return { ...item, quantity: item.quantity + 1 };
          if (action === 'decrease' && item.quantity > 1) return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  // Clear cart entirely
  const clearCart = () => {
    setCart([]);
  };

  // Total cart count for the Navbar badge
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="app-container">
        <Navbar cartCount={totalCartCount} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/products" element={<Products onAddToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetails onAddToCart={addToCart} />} />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cart} 
                  onRemoveFromCart={removeFromCart} 
                  onUpdateQuantity={updateQuantity} 
                />
              } 
            />
            <Route 
              path="/checkout" 
              element={
                <Checkout 
                  cartItems={cart} 
                  onClearCart={clearCart} 
                />
              } 
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        
        <Footer />
        
        {/* Toast Notification Container */}
        <div className="toast-container">
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast({ message: '', type: 'success' })} 
          />
        </div>
      </div>
    </Router>
  );
}

export default App;