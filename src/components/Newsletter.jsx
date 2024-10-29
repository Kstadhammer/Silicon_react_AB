import React, { useState } from 'react';


const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    if (!email.trim()) return false; // Check for empty email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulated successful subscription
      console.log('Newsletter subscription simulated for:', email);
      setEmail('');
      setError('');
      setSuccessMessage('Thank you for subscribing to our newsletter!');

      // Log the API issue for debugging
      console.warn('Note: API is not functioning. Subscription simulated.');
    } catch (error) {
      console.error('Error in newsletter subscription simulation:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <section id="newsletter" className="newsletter container">
      <img 
        src="/src/assets/icons/notification.svg" 
        alt="Newsletter" 
        className="bounce-animation"
      />
      <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-wrapper">
            <i className="fas fa-envelope"></i>
            <input 
              type="email" 
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
            />
          </div>
          <button 
            type="submit" 
            id="subscribe-btn" 
            className="btn btn-primary-1"
          >
            Subscribe
          </button>
        </div>
        {error && <span className="error-text">{error}</span>}
        {successMessage && <span className="success-text">{successMessage}</span>}
      </form>
    </section>
  );
};

export default Newsletter;
