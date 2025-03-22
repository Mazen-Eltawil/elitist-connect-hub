
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-elitist-dark-accent border-t border-elitist-gold/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/fce93589-97ff-4f62-af3a-591ac9708474.png" 
                alt="Elitist Links" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-elitist-light/60 text-sm">
              &copy; {currentYear} Elitist Links. All rights reserved.
            </p>
            <p className="text-elitist-light/40 text-xs mt-2 tracking-widest" style={{ letterSpacing: '0.15em' }}>
              FIND YOUR WANTS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
