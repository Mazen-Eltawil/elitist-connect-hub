
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden py-20">
        {/* Updated background color to match the logo's dark background exactly */}
        <div className="absolute inset-0 bg-[#1C1C1C] z-0"></div>
        
        {/* Subtle radial gradient for depth with gold that matches the logo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,187,98,0.08)_0,rgba(0,0,0,0)_70%)]" style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }}></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="flex flex-col items-center space-y-12 md:space-y-16">
            {/* Logo with refined animations */}
            <div className="relative">
              <img 
                src="/lovable-uploads/c87673ce-1ddd-4237-99f5-cbdead5700ad.png" 
                alt="Elitist Links Logo" 
                className="w-32 h-32 md:w-36 md:h-36 opacity-0" 
                style={{
                  animation: 'fadeIn 1.5s ease-out forwards',
                  backgroundColor: '#1C1C1C',
                  borderRadius: '0.5rem',
                  boxShadow: '0 10px 25px -10px rgba(217, 187, 98, 0.15)'
                }} 
              />
              
              {/* Subtle gold outline effect */}
              <div 
                className="absolute inset-0 rounded-lg opacity-0" 
                style={{
                  animation: 'fadeIn 2s ease-out forwards, subtlePulse 4s ease-in-out infinite',
                  border: '1px solid rgba(217, 187, 98, 0.3)',
                  boxShadow: '0 0 20px rgba(217, 187, 98, 0.1)'
                }}
              ></div>
            </div>
            
            {/* Contact button with luxurious animations */}
            <Link to="/contact" className="group opacity-0 transform translate-y-4" style={{
              animation: 'fadeInUp 1.2s ease-out 0.6s forwards'
            }}>
              <button className="luxury-button flex items-center gap-2 px-10 py-4 text-sm overflow-hidden">
                <span className="relative z-10 tracking-wider">CONTACT US</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};

export default Index;
