import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ✅ Import your background image
import bgImage from '../assets/images/bg.jpg';

const statuses = [
  { label: 'Order Placed', time: 0 },
  { label: 'Being Prepared', time: 3000 },
  { label: 'On The Way', time: 6000 },
  { label: 'Arriving at Table', time: 9000 },
  { label: 'Delivered', time: 12000 },
];

const OrderTracking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = statuses.map((_, index) =>
      setTimeout(() => {
        setCurrentStep(index);
      }, statuses[index].time)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (currentStep === statuses.length - 1) {
      const doneTimer = setTimeout(() => {
        navigate('/feedback');
      }, 3000);
      return () => clearTimeout(doneTimer);
    }
  }, [currentStep, navigate]);

  const getStatusStyle = (index) => {
    if (index < currentStep) return 'bg-green-100 border-green-400 text-green-800';
    if (index === currentStep) return 'bg-yellow-100 border-yellow-400 text-yellow-800';
    return 'bg-gray-100 border-gray-300 text-gray-500';
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/80 backdrop-blur-md w-full max-w-2xl rounded-2xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-stone-800">Track Your Order</h1>

        
        <ul className="space-y-4 mb-10">
          {statuses.map((status, index) => (
            <li
              key={status.label}
              className={`flex items-center justify-between p-4 border rounded-lg shadow-sm transition duration-300 ${getStatusStyle(index)}`}
            >
              <span className="font-medium">{status.label}</span>
              {index < currentStep && <span className="text-green-600">✅</span>}
              {index === currentStep && <span className="animate-pulse text-xl text-yellow-600">⏳</span>}
            </li>
          ))}
        </ul>

        
        <div className="mb-8">
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-700 ease-in-out"
              style={{ width: `${((currentStep + 1) / statuses.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            Step {currentStep + 1} of {statuses.length}
          </p>
        </div>

        
        {currentStep === statuses.length - 1 && (
          <div className="text-center">
            <button
              onClick={() => navigate('/feedback')}
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              Continue to Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
