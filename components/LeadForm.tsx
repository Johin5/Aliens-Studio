import React, { useState } from 'react';
import { FormStatus, LeadFormData } from '../types';
import { CheckCircle, AlertCircle, ArrowRight, X, Lock, MapPin, Zap } from 'lucide-react';

interface LeadFormProps {
  onClose?: () => void;
  isModal?: boolean;
  className?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ onClose, isModal = false, className = '' }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    serviceType: 'Tattoo Consultation',
    description: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    // Simulate API call
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: 'Mumbai',
        serviceType: 'Tattoo Consultation',
        description: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={`bg-white p-6 md:p-10 relative ${isModal ? 'max-w-xl w-full mx-auto shadow-2xl border border-black' : ''} ${className}`}>
      {onClose && (
        <button onClick={onClose} className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-black transition-colors p-2">
          <X className="h-6 w-6" />
        </button>
      )}
      
      <div className="mb-6 md:mb-8">
        <span className="bg-black text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-2 md:mb-3 inline-flex items-center gap-1">
            <Zap className="w-3 h-3 text-yellow-400 fill-current" />
            High Demand
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter leading-none">Get Free Quote</h3>
        <p className="text-gray-500 mt-2 md:mt-3 font-medium text-xs md:text-sm leading-relaxed">
           Get an estimated price and book your slot with India's best artists.
        </p>
      </div>

      {status === FormStatus.SUCCESS ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
          <div className="bg-black p-4 mb-6 rounded-full">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h4 className="text-xl font-bold text-black mb-2 uppercase">Request Sent</h4>
          <p className="text-gray-500 font-light text-sm mb-6">Our studio manager will call you shortly to confirm your slot.</p>
          <button 
            onClick={() => {
              setStatus(FormStatus.IDLE);
              if(onClose) onClose();
            }}
            className="text-black border-b border-black pb-1 hover:opacity-70 font-bold uppercase text-xs tracking-widest"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-base md:text-sm text-black placeholder-gray-300 font-medium focus:border-black focus:outline-none focus:ring-0 transition-all rounded-none appearance-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label htmlFor="phone" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-base md:text-sm text-black placeholder-gray-300 font-medium focus:border-black focus:outline-none focus:ring-0 transition-all rounded-none appearance-none"
                placeholder="+91 99999 99999"
              />
            </div>
            <div>
               <label htmlFor="email" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Email (Optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-base md:text-sm text-black placeholder-gray-300 font-medium focus:border-black focus:outline-none focus:ring-0 transition-all rounded-none appearance-none"
                placeholder="email@address.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
             <div>
                <label htmlFor="city" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Preferred Studio</label>
                <div className="relative">
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-base md:text-sm text-black font-bold focus:border-black focus:outline-none focus:ring-0 appearance-none transition-all rounded-none"
                  >
                    <option>Mumbai (Malad)</option>
                    <option>Navi Mumbai</option>
                    <option>Pune</option>
                    <option>Bangalore</option>
                    <option>Delhi</option>
                    <option>Hyderabad</option>
                    <option>Chennai</option>
                    <option>Goa</option>
                  </select>
                  <MapPin className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
             </div>
             <div>
                <label htmlFor="serviceType" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Service</label>
                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-base md:text-sm text-black font-bold focus:border-black focus:outline-none focus:ring-0 appearance-none transition-all rounded-none"
                  >
                    <option>Tattoo Consultation</option>
                    <option>Getting a Tattoo</option>
                    <option>Piercing</option>
                    <option>Cover-up Tattoo</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
             </div>
          </div>

          <div>
             <label htmlFor="description" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Tattoo Idea (Optional)</label>
             <textarea
                id="description"
                name="description"
                rows={2}
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-base md:text-sm text-black placeholder-gray-300 font-medium focus:border-black focus:outline-none focus:ring-0 transition-all rounded-none appearance-none resize-none"
                placeholder="Briefly describe what you want (e.g. Lion on forearm, small text, etc.)"
             />
          </div>

          <button
            type="submit"
            disabled={status === FormStatus.SUBMITTING}
            className="mt-6 md:mt-8 w-full bg-black px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group shadow-xl hover:shadow-2xl hover:-translate-y-0.5 rounded-none border border-black"
          >
            {status === FormStatus.SUBMITTING ? (
              <div className="flex items-center">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-3"></div>
                Processing...
              </div>
            ) : (
              <span className="flex items-center">
                Get Estimated Price
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-2 mt-4 md:mt-6 text-[10px] text-gray-400 uppercase tracking-wider">
            <Lock className="w-3 h-3" />
            <span>100% Private & Secure</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default LeadForm;