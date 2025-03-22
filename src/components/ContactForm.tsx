
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormState: FormData = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing again
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form after successful submission
      setFormData(initialFormState);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="premium-card p-8 md:p-12 h-full shadow-lg shadow-black/20 backdrop-blur-md">
      <h3 className="text-2xl text-shine font-elegant mb-8 font-light">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="space-y-1.5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="elegant-input w-full py-3"
          />
          {errors.name && (
            <p className="text-red-400 text-xs flex items-center gap-1 mt-1.5">
              <AlertCircle size={12} />
              {errors.name}
            </p>
          )}
        </div>
        
        <div className="space-y-1.5">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="elegant-input w-full py-3"
          />
          {errors.email && (
            <p className="text-red-400 text-xs flex items-center gap-1 mt-1.5">
              <AlertCircle size={12} />
              {errors.email}
            </p>
          )}
        </div>
        
        <div className="space-y-1.5">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone (Optional)"
            className="elegant-input w-full py-3"
          />
        </div>
        
        <div className="space-y-1.5">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="elegant-input w-full resize-none py-3"
          />
          {errors.message && (
            <p className="text-red-400 text-xs flex items-center gap-1 mt-1.5">
              <AlertCircle size={12} />
              {errors.message}
            </p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`elegant-button w-full mt-10 py-3.5 uppercase tracking-wider ${isSubmitting ? 'cursor-wait' : ''}`}
          style={{ letterSpacing: '0.1em' }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 border-2 border-elitist-gold/30 border-t-elitist-gold rounded-full animate-spin"></span>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
