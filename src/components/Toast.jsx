import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className={`toast-notification toast-${type}`}>
      {type === 'success' && <span className="toast-icon">✓</span>}
      {type === 'error' && <span className="toast-icon">✕</span>}
      <span>{message}</span>
    </div>
  );
};

export default Toast;
