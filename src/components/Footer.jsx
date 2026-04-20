import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ShopHub</h3>
          <p>Your one-stop shop for modern lifestyle products. Quality and convenience delivered.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@shophub.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>🌐</span>
            <span>📱</span>
            <span>🐦</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;