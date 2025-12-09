import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Offer } from '../types';

interface OfferCardProps {
  offer: Offer;
  onClick: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative min-w-[160px] md:min-w-[200px] h-[180px] p-3 flex flex-col justify-between cursor-pointer group overflow-hidden border border-black/10 transition-transform hover:-translate-y-1 hover:shadow-lg ${offer.bgColor}`}
    >
      <div className="relative z-10">
        <span className="inline-block text-[7px] font-bold uppercase tracking-widest bg-black text-white px-1.5 py-0.5 mb-1.5">
          {offer.category}
        </span>
        <h3 className="text-xs font-black uppercase tracking-tight leading-none text-black max-w-[95%]">
          {offer.title}
        </h3>
      </div>

      <div className="relative h-20 w-full mt-2">
          <img 
            src={offer.image} 
            alt={offer.title}
            className="absolute bottom-[-10px] right-[-10px] w-24 h-24 object-contain object-bottom transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
          />
      </div>

      <div className="relative z-10 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <div className="flex items-center gap-1 text-black border-b border-black w-max pb-0.5">
            <span className="text-[7px] font-bold uppercase tracking-widest">Claim</span>
            <ArrowRight className="w-2 h-2" />
         </div>
      </div>
    </div>
  );
};

export default OfferCard;