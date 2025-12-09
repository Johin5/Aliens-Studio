import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TattooStyle } from '../types';

interface CategoryCardProps {
  style: TattooStyle;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ style, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative h-full w-full overflow-hidden cursor-pointer border border-gray-800 bg-black"
    >
      <img 
        src={style.image} 
        alt={style.title} 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-2">
            {style.title}
          </h3>
          <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] font-bold uppercase tracking-widest">Explore Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;