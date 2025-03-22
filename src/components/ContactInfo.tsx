
import { Mail, Phone, Instagram, MessageSquare } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="premium-card p-8 md:p-12 flex flex-col space-y-10 h-full">
      <div className="space-y-4">
        <h3 className="text-xl text-shine font-elegant mb-6">Get in Touch</h3>
        <p className="text-elitist-light/80 text-sm md:text-base leading-relaxed mb-8">
          We're dedicated to providing you with exceptional service. Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="flex-grow">
        <ul className="space-y-8">
          <li className="flex items-start space-x-4 group">
            <div className="p-3 rounded-full border border-elitist-gold/30 group-hover:border-elitist-gold transition-colors duration-300">
              <Mail className="h-5 w-5 text-elitist-gold" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-elitist-light/50 mb-1">Email</p>
              <a 
                href="mailto:elitistlinks@gmail.com" 
                className="text-elitist-light hover:text-elitist-gold transition-colors duration-300"
              >
                elitistlinks@gmail.com
              </a>
            </div>
          </li>

          <li className="flex items-start space-x-4 group">
            <div className="p-3 rounded-full border border-elitist-gold/30 group-hover:border-elitist-gold transition-colors duration-300">
              <MessageSquare className="h-5 w-5 text-elitist-gold" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-elitist-light/50 mb-1">WhatsApp</p>
              <a 
                href="https://wa.me/0509977198" 
                className="text-elitist-light hover:text-elitist-gold transition-colors duration-300"
              >
                0509977198
              </a>
            </div>
          </li>

          <li className="flex items-start space-x-4 group">
            <div className="p-3 rounded-full border border-elitist-gold/30 group-hover:border-elitist-gold transition-colors duration-300">
              <Phone className="h-5 w-5 text-elitist-gold" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-elitist-light/50 mb-1">Phone</p>
              <a 
                href="tel:0509977198" 
                className="text-elitist-light hover:text-elitist-gold transition-colors duration-300"
              >
                0509977198
              </a>
            </div>
          </li>

          <li className="flex items-start space-x-4 group">
            <div className="p-3 rounded-full border border-elitist-gold/30 group-hover:border-elitist-gold transition-colors duration-300">
              <Instagram className="h-5 w-5 text-elitist-gold" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-elitist-light/50 mb-1">Instagram</p>
              <a 
                href="https://instagram.com/elitist.links" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-elitist-light hover:text-elitist-gold transition-colors duration-300"
              >
                @elitist.links
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
