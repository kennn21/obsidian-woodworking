import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would submit to an API
      setSubscribed(true);
      setEmail('');
    }
  };
  
  return (
    <div className="bg-amber-800 text-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Join Our Musical Community</h2>
          <p className="mb-6">
            Subscribe to receive updates on new instruments, craftsmanship techniques, and special offers.
          </p>
          
          {subscribed ? (
            <div className="bg-amber-700 p-4 rounded-md">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">We've added you to our newsletter list.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-amber-50 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;