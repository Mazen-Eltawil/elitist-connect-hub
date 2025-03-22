
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden py-20">
        <div className="absolute inset-0 bg-elitist-dark-accent z-0"></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0,rgba(0,0,0,0)_70%)]"
          style={{ 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <img 
            src="/lovable-uploads/6e5291cd-9e45-42cc-b7d3-683612efddb3.png" 
            alt="Elitist Links Logo" 
            className="w-32 h-32 mb-12 animate-gentle-pulse animate-fade-in"
          />
          
          <img 
            src="/lovable-uploads/fce93589-97ff-4f62-af3a-591ac9708474.png" 
            alt="Elitist Links" 
            className="w-64 md:w-96 mb-8 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          />
          
          <p className="text-elitist-light/70 uppercase tracking-widest text-sm md:text-base mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            FIND YOUR WANTS
          </p>
          
          <Link 
            to="/contact" 
            className="elegant-button group animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            <span>Contact Us</span>
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
