import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Import images
import bgImage from '../assets/images/bg.jpg';
import qrImage from '../assets/images/img.png';

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const totalAmount = parseFloat(state?.totalAmount) || 0;

  const [selectedPayment, setSelectedPayment] = useState('cash');
  const [upiId, setUpiId] = useState('');
  const [error, setError] = useState('');

  const paymentMethods = [
    { id: 'cash', label: 'Cash', icon: '💵' },
    { id: 'upi', label: 'UPI', icon: '📱' },
    { id: 'scanner', label: 'QR Scanner', icon: '🔲' },
  ];

  const isValidUpi = (id) => /^[\w.-]+@[\w.-]+$/.test(id);

  const handlePayment = () => {
    setError('');

    if (selectedPayment === 'upi') {
      if (!upiId.trim()) {
        setError('UPI ID is required.');
        return;
      }

      if (!isValidUpi(upiId)) {
        setError('Please enter a valid UPI ID.');
        return;
      }
    }

    const methodLabel = paymentMethods.find((m) => m.id === selectedPayment)?.label;
    alert(`Processing payment of ₹${totalAmount.toFixed(2)} via ${methodLabel}`);

    setTimeout(() => {
      navigate('/ordertracking', { replace: true });
    }, 600);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/80 backdrop-blur-md w-full max-w-lg rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">Choose Payment Method</h1>

       
        <div className="space-y-4 mb-6">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`flex items-center gap-4 border rounded-lg p-5 cursor-pointer transition 
                ${selectedPayment === method.id ? 'border-rose-500 bg-rose-50' : 'border-gray-300 hover:bg-gray-50'}`}
            >
              <input
                type="radio"
                name="payment-method"
                value={method.id}
                checked={selectedPayment === method.id}
                onChange={() => setSelectedPayment(method.id)}
                className="h-5 w-5 text-rose-600 focus:ring-rose-500"
              />
              <span className="text-lg font-medium text-gray-800">{method.icon} {method.label}</span>
            </label>
          ))}
        </div>

        
        {selectedPayment === 'upi' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter Your UPI ID</label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="e.g., user@upi"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            {error && <p className="text-sm text-rose-600 mt-2">{error}</p>}
          </div>
        )}

        
        {selectedPayment === 'scanner' && (
          <div className="flex flex-col items-center mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Scan this QR to pay</p>
            <img
              src={qrImage}
              alt="QR Code"
              className="w-64 h-64 object-contain border border-gray-300 rounded-lg shadow-md"
            />
          </div>
        )}

       
        <button
          onClick={handlePayment}
          className="w-full bg-rose-600 text-white font-semibold py-4 rounded-full hover:bg-rose-700 transition duration-200"
        >
          Pay ₹{totalAmount.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Payment;
