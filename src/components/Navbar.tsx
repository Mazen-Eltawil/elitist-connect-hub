
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo px-6 md:px-12 ${
        isScrolled ? 'py-4 bg-elitist-dark-accent/95 backdrop-blur-md shadow-md shadow-black/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img 
            src="/lovable-uploads/6e5291cd-9e45-42cc-b7d3-683612efddb3.png" 
            alt="Elitist Links Logo" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link 
            to="/" 
            className={`elegant-link text-sm uppercase tracking-wider ${isActive('/') ? 'after:scale-x-100' : ''}`}
            style={{ letterSpacing: '0.1em' }}
          >
            Home
          </Link>
          <Link 
            to="/contact" 
            className={`elegant-link text-sm uppercase tracking-wider ${isActive('/contact') ? 'after:scale-x-100' : ''}`}
            style={{ letterSpacing: '0.1em' }}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-elitist-gold" 
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-elitist-dark-accent/98 backdrop-blur-md z-40 pt-24 px-6 md:hidden transition-transform duration-500 ease-out-expo ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-10 items-center">
          <Link 
            to="/" 
            className="elegant-link text-lg uppercase tracking-wider"
            onClick={closeMobileMenu}
            style={{ letterSpacing: '0.1em' }}
          >
            Home
          </Link>
          <Link 
            to="/contact" 
            className="elegant-link text-lg uppercase tracking-wider"
            onClick={closeMobileMenu}
            style={{ letterSpacing: '0.1em' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
