import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, onClearCart }) => {
  const navigate = useNavigate();
  
  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  // Error state for validation
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      onClearCart();
      navigate('/', { state: { orderSuccess: true } });
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="empty-cart" style={{width: '100%'}}>
          <h2>Your cart is empty</h2>
          <button className="btn-primary" onClick={() => navigate('/products')} style={{marginTop: '1rem'}}>
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      
      <div className="checkout-container">
        {/* Form Section */}
        <div className="checkout-form-section">
          <h3>Shipping Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="address">Shipping Address</label>
              <textarea 
                id="address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St, City, Country"
              />
              {errors.address && <span className="error-text">{errors.address}</span>}
            </div>

            <button type="submit" className="btn-primary btn-block">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="checkout-items-list" style={{margin: '1.5rem 0', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0'}}>
            {cartItems.map(item => (
              <div key={item.id} className="checkout-item">
                <div className="checkout-item-details">
                  <span>{item.name}</span>
                  <span>Qty: {item.quantity} x ${item.price.toFixed(2)}</span>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="summary-row" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="summary-total" style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 'bold', borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
