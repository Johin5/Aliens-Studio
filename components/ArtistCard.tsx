import React from 'react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="group relative">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 border border-gray-200 group-hover:border-black transition-colors">
        <img 
          src={artist.image} 
          alt={artist.name} 
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-black uppercase tracking-tight mb-1">{artist.name}</h3>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{artist.role}</p>
        <p className="text-[10px] text-white bg-black inline-block px-2 py-0.5 font-bold uppercase tracking-wider">{artist.specialty}</p>
      </div>
    </div>
  );
};

export default ArtistCard;