import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ✅ Step 1: Import background image
import bgImage from '../assets/images/bg.jpg'; 

export default function Feedback() {
  const [formData, setFormData] = useState({
    overallSatisfaction: '',
    foodQuality: '',
    service: '',
    ambiance: '',
    comments: '',
    name: '',
    email: '',
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleRadioChange = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateEmail = (email) => {
    return email === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    setError('');

    const { overallSatisfaction, foodQuality, service, ambiance, email } = formData;

    if (!overallSatisfaction || !foodQuality || !service || !ambiance) {
      setError('Please rate all categories before submitting.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    console.log('✅ Feedback submitted:', formData);
    alert('🎉 Thank you for your feedback!');
    navigate('/contact');
  };

  const RadioGroup = ({ name, category, options = ['Excellent', 'Good', 'Average', 'Poor'] }) => (
    <div className="flex flex-wrap gap-3 p-4">
      {options.map((option) => (
        <label
          key={option}
          className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border px-4 h-11 cursor-pointer transition-colors duration-300 ${
            formData[category] === option
              ? 'border-[3px] px-3.5 border-[#e8b4b7] text-[#e8b4b7]'
              : 'border border-[#e4dddd] text-[#171212]'
          }`}
        >
          {option}
          <input
            type="radio"
            className="sr-only"
            name={name}
            checked={formData[category] === option}
            onChange={() => handleRadioChange(category, option)}
          />
        </label>
      ))}
    </div>
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center px-4 py-8 font-sans"
      style={{ backgroundImage: `url(${bgImage})`, fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="w-full max-w-xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-[#171212] mb-3">We Value Your Feedback</h2>
        <p className="text-center text-base text-[#444] mb-6">
          Your feedback helps us improve. Please share your thoughts with us.
        </p>

        
        <div>
          <h3 className="text-lg font-semibold text-[#171212] px-4 pb-1">Overall Satisfaction</h3>
          <RadioGroup name="overallSatisfaction" category="overallSatisfaction" />

          <h3 className="text-lg font-semibold text-[#171212] px-4 pb-1">Food Quality</h3>
          <RadioGroup name="foodQuality" category="foodQuality" />

          <h3 className="text-lg font-semibold text-[#171212] px-4 pb-1">Service</h3>
          <RadioGroup name="service" category="service" />

          <h3 className="text-lg font-semibold text-[#171212] px-4 pb-1">Ambiance</h3>
          <RadioGroup name="ambiance" category="ambiance" />
        </div>

        
        <div className="px-4 py-3">
          <label className="block text-sm font-medium text-[#171212] mb-1">Additional Comments</label>
          <textarea
            className="w-full rounded-xl border border-[#e4dddd] bg-white p-4 text-base text-[#171212] min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#e8b4b7]"
            value={formData.comments}
            onChange={(e) => handleInputChange('comments', e.target.value)}
          />
        </div>

        
        <div className="px-4 py-2">
          <label className="block text-sm font-medium text-[#171212] mb-1">Your Name</label>
          <input
            type="text"
            className="w-full rounded-xl border border-[#e4dddd] bg-white h-12 px-4 text-base text-[#171212] focus:outline-none focus:ring-2 focus:ring-[#e8b4b7]"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </div>

        
        <div className="px-4 py-2">
          <label className="block text-sm font-medium text-[#171212] mb-1">Your Email</label>
          <input
            type="email"
            className="w-full rounded-xl border border-[#e4dddd] bg-white h-12 px-4 text-base text-[#171212] focus:outline-none focus:ring-2 focus:ring-[#e8b4b7]"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>

        
        {error && <p className="text-sm text-red-600 px-4 pt-2 font-medium">{error}</p>}

        
        <div className="flex justify-center px-4 py-5">
          <button
            className="rounded-full h-11 px-6 bg-[#e8b4b7] text-[#171212] text-sm font-bold hover:bg-[#e09da1] transition-colors"
            onClick={handleSubmit}
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
