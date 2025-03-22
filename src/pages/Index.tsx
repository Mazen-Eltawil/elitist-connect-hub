
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden py-20">
        <div className="absolute inset-0 bg-elitist-dark-accent z-0"></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0,rgba(0,0,0,0)_70%)]"
          style={{ 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="flex flex-col items-center space-y-8 md:space-y-12">
            <img 
              src="/lovable-uploads/6e5291cd-9e45-42cc-b7d3-683612efddb3.png" 
              alt="Elitist Links Logo" 
              className="w-28 h-28 md:w-32 md:h-32 animate-gentle-pulse animate-fade-in"
            />
            
            <img 
              src="/lovable-uploads/fce93589-97ff-4f62-af3a-591ac9708474.png" 
              alt="Elitist Links" 
              className="w-64 md:w-96 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            />
            
            <p 
              className="text-elitist-light/60 uppercase tracking-widest text-sm md:text-base mb-4 animate-fade-in letter-spacing-wider" 
              style={{ 
                animationDelay: '400ms',
                letterSpacing: '0.25em' 
              }}
            >
              FIND YOUR WANTS
            </p>
            
            <Link 
              to="/contact" 
              className="elegant-button group animate-fade-in flex items-center px-10 py-3.5 text-sm tracking-wide"
              style={{ animationDelay: '600ms' }}
            >
              <span className="mr-2">CONTACT US</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
