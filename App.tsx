import React, { useState } from 'react';
import { Menu, Instagram, Facebook, Youtube, MapPin, Star, Shield, PenTool, ArrowRight, Plus, CheckCircle, Smartphone, Users, Trophy, Phone, MessageCircle, Calculator, Zap, CreditCard } from 'lucide-react';
import { TattooStyle, Story, Artist, Location, FAQItem, Testimonial, Offer } from './types';
import LeadForm from './components/LeadForm';
import ChatWidget from './components/ChatWidget';
import CategoryCard from './components/CategoryCard';
import ArtistCard from './components/ArtistCard';
import TestimonialCard from './components/TestimonialCard';
import OfferCard from './components/OfferCard';

// --- DATA: Studio Content ---

const STYLES: TattooStyle[] = [
  { 
    id: '1', 
    title: 'Lord Shiva Tattoos', 
    image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=600',
    className: 'md:col-span-2 md:row-span-2'
  },
  { 
    id: '2', 
    title: 'Religious Tattoos', 
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=600',
    className: 'md:col-span-2'
  },
  { 
    id: '3', 
    title: 'Geometric Tattoos', 
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80&w=600',
    className: ''
  },
  { 
    id: '4', 
    title: 'Small Tattoos', 
    image: 'https://images.unsplash.com/photo-1582298538104-fe2e74c2ed54?auto=format&fit=crop&q=80&w=600',
    className: ''
  },
  { 
    id: '5', 
    title: 'Travel Tattoos', 
    image: 'https://images.unsplash.com/photo-1536243290639-689559f5ff40?auto=format&fit=crop&q=80&w=600',
    className: ''
  },
  { 
    id: '6', 
    title: 'Portrait Realism', 
    image: 'https://images.unsplash.com/photo-1560707303-4e98035872dc?auto=format&fit=crop&q=80&w=600',
    className: 'md:row-span-2'
  },
];

const STORIES: Story[] = [
  { id: 's1', title: "Virat Kohli's Ink Journey", subtitle: "With Aliens Tattoo", image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=600' },
  { id: 's2', title: "The Untold Story", subtitle: "Kriti Sanon's First Tattoo", image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600' },
  { id: 's3', title: "Overcoming Adversity", subtitle: "Pandya's Tattoo Lessons", image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600' },
  { id: 's4', title: "Arjun's Second Tattoo", subtitle: "A Memory of his Mom", image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600' },
];

const OFFERS: Offer[] = [
  { id: 'o1', category: 'Gift Card', title: 'The gift of art for your special one', bgColor: 'bg-gray-100', image: 'https://images.unsplash.com/photo-1545934666-fce152504b7e?auto=format&fit=crop&q=80&w=400' },
  { id: 'o2', category: 'Pet Birthday', title: 'A Special Treat for Pet Parents', bgColor: 'bg-[#C6EAE3]', image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=400' },
  { id: 'o3', category: 'Birthday', title: 'This is your Birthday Gift Card', bgColor: 'bg-[#EAC8B3]', image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=400' },
  { id: 'o4', category: 'Anniversary', title: 'Celebrate your love with Aliens', bgColor: 'bg-[#FAD996]', image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=400' },
  { id: 'o5', category: 'HDFC Bank', title: 'Your loyalty appreciated with Aliens', bgColor: 'bg-[#96C0FA]', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=400' },
  { id: 'o6', category: 'Aliens Pay', title: 'Tattoo Now Pay Later', bgColor: 'bg-[#EAEA36]', image: 'https://images.unsplash.com/photo-1563200153-6196304bb053?auto=format&fit=crop&q=80&w=400' },
  { id: 'o7', category: 'Axis Bank', title: 'Your Companion in your Inking Journey', bgColor: 'bg-[#D783A6]', image: 'https://images.unsplash.com/photo-1556740922-b062540b075c?auto=format&fit=crop&q=80&w=400' },
  { id: 'o8', category: 'Yes Bank', title: 'Yes X Aliens, Your ink partners', bgColor: 'bg-[#96E5FA]', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=400' },
  { id: 'o9', category: 'Royal Enfield', title: 'Royal Enfield Riders Exclusive', bgColor: 'bg-[#FA9696]', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c3d?auto=format&fit=crop&q=80&w=400' },
];

const ARTISTS: Artist[] = [
  { id: 'a1', name: 'Sunny Bhanushali', role: 'Founder & Master', specialty: 'Hyper-Realism', image: 'https://images.unsplash.com/photo-1583345237708-1f3243774523?auto=format&fit=crop&q=80&w=600' },
  { id: 'a2', name: 'Allan Gois', role: 'Senior Artist', specialty: 'Portrait', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=600' },
  { id: 'a3', name: 'Vishal Maurya', role: 'Lead Artist', specialty: 'Geometry', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=600' },
  { id: 'a4', name: 'Dipti Chourasiya', role: 'Artist', specialty: 'Color Work', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600' },
];

const LOCATIONS: Location[] = [
  { id: 'l1', city: 'Mumbai', address: 'Malad West, Andheri' },
  { id: 'l2', city: 'Navi Mumbai', address: 'Vashi, Seawoods' },
  { id: 'l3', city: 'Pune', address: 'Koregaon Park' },
  { id: 'l4', city: 'Goa', address: 'Calangute' },
  { id: 'l5', city: 'Bangalore', address: 'Indiranagar' },
  { id: 'l6', city: 'Delhi', address: 'Hauz Khas' },
  { id: 'l7', city: 'Hyderabad', address: 'Jubilee Hills' },
  { id: 'l8', city: 'Chennai', address: 'Nungambakkam' },
];

const FAQS: FAQItem[] = [
  { id: 'f1', question: 'How much does a tattoo typically cost?', answer: 'Cost depends on size, complexity, and placement. Our basic minimum charge starts from ₹3000. For custom large pieces, we recommend a consultation for an accurate quote.' },
  { id: 'f2', question: 'Can you fix my old/bad tattoo?', answer: 'Yes! We specialize in cover-ups. Our artists can design a new piece that cleverly hides the old one, or we can improve the existing work.' },
  { id: 'f3', question: 'Is it painful?', answer: 'Pain is subjective and depends on placement. However, our artists use advanced techniques and top-quality equipment to minimize discomfort. It is usually described as a scratching sensation.' },
  { id: 'f4', question: 'What is Tattoo Aftercare?', answer: 'We provide a detailed aftercare kit and instructions. Generally, keep it clean, moisturized, and out of the sun for 2 weeks.' },
];

const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Rohan Mehta', role: 'Software Engineer', quote: 'The hygiene standards are unmatched. I was nervous about my first tattoo, but the team made me feel so comfortable.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200' },
  { id: 't2', name: 'Sarah Jenkins', role: 'Travel Blogger', quote: 'I traveled from London just for Aliens. The realism work is literally mind-blowing. Worth every mile.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
  { id: 't3', name: 'Vikram Singh', role: 'Architect', quote: 'They took my vague idea and turned it into a masterpiece. The detailing on the geometric design is precise.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
];

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleFaq = (id: string) => setOpenFaqId(openFaqId === id ? null : id);

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-20 md:pb-0">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 px-4 md:py-4 md:px-12 flex justify-between items-center transition-all">
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-black flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 2L2 22h20L12 2zm0 3.5L18.5 20h-13L12 5.5z"/></svg>
             </div>
             <div className="flex flex-col leading-none">
                <span className="font-black text-xs uppercase tracking-widest">Aliens</span>
                <span className="font-bold text-[10px] uppercase tracking-wider">Tattoo Studio</span>
             </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
           <a href="#styles" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">Tattoos</a>
           <a href="#offers" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">Offers</a>
           <a href="#locations" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">Locations</a>
           <button onClick={openModal} className="bg-black text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg flex items-center gap-2">
              <Smartphone className="w-3 h-3" />
              Get Free Quote
           </button>
        </div>
        <button className="md:hidden" onClick={openModal}>
          <span className="text-[10px] font-bold uppercase tracking-widest border border-black px-3 py-1.5 active:bg-black active:text-white transition-colors">Get Quote</span>
        </button>
      </nav>

      {/* --- 1. Hero Section: "Your Story" --- */}
      <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1590246294320-f470503f8480?auto=format&fit=crop&q=80&w=1600" 
             alt="Man with tattoo" 
             className="w-full h-full object-cover object-top"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>

        {/* Floating Content Card (Left Aligned) */}
        <div className="relative z-10 container mx-auto px-4 md:px-12 h-full flex items-center">
          <div className="bg-white p-8 md:p-12 max-w-lg shadow-2xl animate-fade-in-up">
            
            {/* Added Aliens Pay Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EAEA36] px-3 py-1.5 mb-4 shadow-sm transform -translate-x-1">
               <CreditCard className="w-3 h-3 text-black" />
               <span className="text-[10px] font-black uppercase tracking-widest text-black">
                  Aliens Pay: Tattoo Now, Pay Later
               </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-black leading-[0.9] uppercase tracking-tighter mb-6">
               Your Tattoo<br/>
               Is About<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black">Your Story.</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base font-medium mb-8 leading-relaxed">
               Award-winning artistry tailored to your vision. Join 10,000+ satisfied clients who trust Aliens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                  onClick={openModal}
                  className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
               >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
               </button>
               <a 
                  href="tel:+919833065209"
                  className="border border-black text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
               >
                  <Smartphone className="w-4 h-4" />
                  Call Us
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Celebrity Stories --- */}
      <section className="py-20 md:py-24 bg-white">
         <div className="container mx-auto px-4 md:px-12">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-2">Stories of Aliens</h2>
               <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">We ink the icons</p>
            </div>
            
            {/* Horizontal Scroll on Mobile */}
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-4 md:grid md:grid-cols-4 md:gap-6 md:mx-0 md:px-0 md:pb-0">
               {STORIES.map(story => (
                  <div key={story.id} className="min-w-[70vw] md:min-w-0 snap-center group cursor-pointer relative aspect-[3/4] overflow-hidden" onClick={openModal}>
                     <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 flex flex-col justify-end p-6">
                        <p className="text-white text-[9px] font-bold uppercase tracking-widest mb-1">{story.subtitle}</p>
                        <h3 className="text-white text-lg font-black uppercase leading-tight">{story.title}</h3>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 3. Tattoo Styles Grid (MOVED HERE) --- */}
      <section id="styles" className="py-20 md:py-24 bg-white">
         <div className="container mx-auto px-4 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
               <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2 block">Inspiration</span>
               <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                  Choose Your Vibe
               </h2>
            </div>
            <button 
               onClick={openModal}
               className="hidden md:flex items-center gap-2 border-b border-black pb-1 text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
               Get Quote for Custom Design
               <ArrowRight className="w-4 h-4" />
            </button>
         </div>

         {/* Layout: Horizontal Scroll on Desktop and Mobile */}
         <div className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-8 md:mx-0 md:px-0 md:pb-4">
            {STYLES.map(style => (
               <div 
                  key={style.id} 
                  className="shrink-0 snap-center w-[85vw] h-[450px] md:w-[400px] md:h-[600px]"
               >
                  <CategoryCard style={style} onClick={openModal} />
               </div>
            ))}
         </div>
         
         <div className="mt-8 text-center md:hidden">
            <button 
               onClick={openModal}
               className="bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest w-full"
            >
               Get Custom Design Quote
            </button>
         </div>
      </section>

      {/* --- 4. Masters of Ink (Artists) (MOVED FROM BOTTOM) --- */}
      <section id="artists" className="py-20 md:py-24 bg-[#F5F5F7]">
         <div className="container mx-auto px-4 md:px-12">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
               <div>
                  <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-none">Masters of Ink</h2>
                  <p className="text-gray-500 mt-2 text-sm font-medium">Not just artists, but storytellers.</p>
               </div>
               <button onClick={openModal} className="text-black border-b border-black pb-1 text-xs font-bold uppercase tracking-widest hover:opacity-60">View All Artists</button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
               {ARTISTS.map(artist => (
                  <ArtistCard key={artist.id} artist={artist} />
               ))}
            </div>
         </div>
      </section>

      {/* --- 5. YELLOW BAND: Tattoo Now Pay Later --- */}
      <section className="bg-[#EAEA36] w-full py-10 md:py-12">
         <div className="container mx-auto px-4 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none mb-4">
               Tattoo Now, Pay Later
            </h2>
            <p className="text-black/80 text-sm md:text-lg font-bold mb-8 max-w-2xl mx-auto">
               You can now choose to pay later in easy monthly instalments through our Aliens Payment Plans.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
               <div className="flex items-center gap-2 text-black font-black uppercase text-xs tracking-widest">
                  <CheckCircle className="w-5 h-5" />
                  No Charges.
               </div>
               <div className="flex items-center gap-2 text-black font-black uppercase text-xs tracking-widest">
                  <CheckCircle className="w-5 h-5" />
                  No Interest.
               </div>
               <div className="flex items-center gap-2 text-black font-black uppercase text-xs tracking-widest">
                  <CheckCircle className="w-5 h-5" />
                  Instant Approvals.
               </div>
            </div>
         </div>
      </section>

      {/* --- 6. EMBEDDED LEAD FORM (High Conversion Section) --- */}
      <section className="bg-[#111] py-20 md:py-24 text-white relative overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
         </div>

         <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="text-left">
                  <div className="inline-block bg-white text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-6">
                     Free Consultation
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                     Start Your<br/>
                     Journey
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                     Don't know where to start? Get a free consultation and price estimate. Our experts will guide you through design, placement, and pricing.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                     <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide">
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span>Instant Price Estimate</span>
                     </li>
                     <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide">
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span>Digital Mockup of Design</span>
                     </li>
                     <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide">
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span>Connect with Top Artists</span>
                     </li>
                  </ul>
               </div>

               {/* Embedded Form */}
               <div className="bg-white text-black shadow-2xl relative">
                  <div className="absolute -top-4 -right-4 bg-[#EAEA36] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 z-20 shadow-md">
                     EMI Available
                  </div>
                  <LeadForm className="shadow-none border-0" />
               </div>
            </div>
         </div>
      </section>

      {/* --- 7. Exclusive Offers Strip (Compact) --- */}
      <section id="offers" className="py-12 bg-[#F9F9FB] border-b border-gray-200">
         <div className="container mx-auto px-4 md:px-12">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-black text-black uppercase tracking-tight">Partner Rewards</h3>
               <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Swipe for more</p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-2">
               {OFFERS.filter(o => o.id !== 'o6').map(offer => (
                  <div key={offer.id} className="snap-center shrink-0">
                  <OfferCard offer={offer} onClick={openModal} />
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 8. Customer Love (Testimonials) --- */}
      <section className="py-20 md:py-24 bg-white border-t border-gray-100">
         <div className="container mx-auto px-4 md:px-12">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-2">Client Love</h2>
               <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Real stories from real people</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
               {TESTIMONIALS.map(t => (
                  <TestimonialCard key={t.id} testimonial={t} />
               ))}
            </div>
         </div>
      </section>

      {/* --- 9. Locations & FAQ --- */}
      <section id="locations" className="py-20 md:py-24 bg-white">
         <div className="container mx-auto px-4 md:px-12">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-2">Aliens are Everywhere</h2>
               <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Find a studio near you</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
               {LOCATIONS.map(loc => (
                  <div key={loc.id} className="border border-gray-200 p-6 hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer group" onClick={openModal}>
                     <h3 className="text-xl font-black uppercase mb-1">{loc.city}</h3>
                     <p className="text-xs text-gray-500 group-hover:text-gray-400 font-bold uppercase tracking-wider">{loc.address}</p>
                  </div>
               ))}
            </div>

            {/* FAQs */}
            <div className="max-w-3xl mx-auto border-t border-gray-200 pt-16">
               <h3 className="text-2xl font-black uppercase mb-8 text-center">Frequently Asked Questions</h3>
               <div className="space-y-4">
                  {FAQS.map(faq => (
                     <div key={faq.id} className="border border-gray-200 bg-gray-50">
                        <button 
                           onClick={() => toggleFaq(faq.id)}
                           className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-100 transition-colors"
                        >
                           <span className="font-bold text-xs uppercase tracking-wide pr-4">{faq.question}</span>
                           <div className={`transition-transform duration-300 flex-shrink-0 ${openFaqId === faq.id ? 'rotate-45' : ''}`}>
                              <Plus className="w-4 h-4" />
                           </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaqId === faq.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                           <div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed">
                              {faq.answer}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black py-12 text-white mb-16 md:mb-0">
         <div className="container mx-auto px-4 md:px-12">
            <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
               <div>
                  <span className="font-black text-xl uppercase tracking-widest block mb-4">Aliens Tattoo</span>
                  <p className="text-gray-500 text-xs leading-relaxed">
                     A premium tattoo studio with more than 18 outlets across India. We believe in creating art that connects with your soul.
                  </p>
               </div>
               <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-white">Tattoo Styles</h4>
                  <ul className="space-y-2 text-xs text-gray-400">
                     <li>Lord Shiva Tattoos</li>
                     <li>Geometric Tattoos</li>
                     <li>Portrait Realism</li>
                     <li>Traveler Tattoos</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-white">Important Links</h4>
                  <ul className="space-y-2 text-xs text-gray-400">
                     <li>Tattoo Pricing</li>
                     <li>Aliens Rewards</li>
                     <li>Tattoo Aftercare</li>
                     <li>Own a Franchise</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-white">Contact</h4>
                  <ul className="space-y-2 text-xs text-gray-400">
                     <li>+91 98330 65209</li>
                     <li>getinked@alienstattoo.com</li>
                     <div className="flex gap-4 mt-4">
                        <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
                        <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
                        <Youtube className="w-5 h-5 hover:text-white cursor-pointer" />
                     </div>
                  </ul>
               </div>
            </div>
            <div className="text-center text-[10px] text-gray-600 uppercase tracking-widest">
               © 2024 Aliens Tattoo Studio. All Rights Reserved.
            </div>
         </div>
      </footer>

      {/* --- Lead Form Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative z-10 w-full max-w-lg animate-fade-in-up">
            <LeadForm onClose={closeModal} isModal={true} />
          </div>
        </div>
      )}

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 shadow-[0_-5px_10px_rgba(0,0,0,0.1)]">
         <button onClick={openModal} className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest active:scale-95 transition-transform">
            Get Free Quote
         </button>
      </div>

      {/* --- Chat Widget --- */}
      <ChatWidget />
    </div>
  );
};

export default App;