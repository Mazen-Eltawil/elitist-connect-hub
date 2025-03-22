
import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import { MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-elitist-dark-accent"></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0,rgba(0,0,0,0)_70%)]"
          style={{ 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-shine font-elegant font-light mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p 
              className="text-elitist-light/60 max-w-xl mx-auto text-sm md:text-base animate-fade-in"
              style={{ animationDelay: '200ms', letterSpacing: '0.05em' }}
            >
              We're here to assist you. Reach out and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0,rgba(0,0,0,0)_70%)]"
          style={{ 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        ></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <ContactInfo />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-elitist-dark-accent relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-2xl md:text-3xl text-shine font-elegant font-light mb-5">
              Our Location
            </h2>
            <div className="flex items-center justify-center gap-2 text-elitist-light/60">
              <MapPin size={18} className="text-elitist-gold" />
              <p className="tracking-wide">Dubai, United Arab Emirates</p>
            </div>
          </div>
          
          <div className="premium-card p-1 overflow-hidden animate-fade-in shadow-gold/20 shadow-lg" style={{ animationDelay: '200ms' }}>
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011823706!2d54.947287526927486!3d25.076280446545367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1691234567890!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Elitist Links Location"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
