import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ArrowLeft } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full">
      <div className="relative overflow-hidden h-48">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-3 right-3 bg-brand-yellow text-black text-xs font-bold px-3 py-1 rounded-full">
          {service.category}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-gray-700 font-bold text-sm">{service.rating}</span>
            <span className="text-gray-400 text-xs">({service.reviewsCount})</span>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-brand-yellow transition-colors line-clamp-2">
          {service.title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
          {service.shortDescription}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">يبدأ من</span>
            <span className="font-bold text-xl text-brand-black">{service.packages.basic.price}</span>
          </div>
          <Link 
            to={`/service/${service.id}`}
            className="bg-black text-white p-2 rounded-lg hover:bg-brand-yellow hover:text-black transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;