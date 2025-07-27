import { useNavigate } from 'react-router-dom';

// ✅ Step 1: Import your background image
import bgImage from '../assets/images/bg.jpg'; 

export default function Contact() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); 
  };

  const contactInfo = [
    { label: 'Phone', value: '+91 79034 77497' },
    { label: 'Email', value: 'ronitraj527@gmail.com' },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '11:00 AM – 10:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 11:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 9:00 PM' },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center px-6 py-10 font-sans"
      style={{ backgroundImage: `url(${bgImage})` }} 
    >
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl rounded-xl shadow-lg px-6 py-8">
        <header className="mb-8 border-b pb-4 border-[#e4e4e4]">
          <h1 className="text-3xl font-bold text-[#171212]">Contact Us</h1>
          <p className="text-[#444] text-base mt-2">
            Got a question or want to say hello? We're here for you!
          </p>
        </header>

        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#171212] mb-2">Our Location</h2>
          <p className="text-[#171212] mb-4">Marya Vihar Colony, Kumhrar, Patna, Bihar 800026, India</p>
          <div className="rounded-xl overflow-hidden shadow-sm">
            <iframe
              title="Gourmet Bistro Map"
              className="w-full aspect-video"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7196.919796791392!2d85.18543456691361!3d25.58962986932652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58abde5f6cbb%3A0x713819d94236a61b!2sOm%20Karnath%20Dham!5e0!3m2!1sen!2sin!4v1753169897017!5m2!1sen!2sin"
            ></iframe>
          </div>
        </section>

        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#171212] mb-2">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 border-t border-[#e4dddd]">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="py-4 border-b border-[#f0eded]">
                <p className="text-[#82686a] text-sm">{info.label}</p>
                <p className="text-[#171212] text-sm">{info.value}</p>
              </div>
            ))}
          </div>
        </section>

        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#171212] mb-2">Hours of Operation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 border-t border-[#e4dddd]">
            {hours.map((item, idx) => (
              <div key={idx} className="py-4 border-b border-[#f0eded]">
                <p className="text-[#82686a] text-sm">{item.day}</p>
                <p className="text-[#171212] text-sm">{item.time}</p>
              </div>
            ))}
          </div>
        </section>

        
        <div className="flex justify-start">
          <button
            onClick={handleBackToHome}
            className="bg-[#f4f1f1] hover:bg-[#e8e5e5] text-[#171212] text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            ⬅ Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
