import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/services?category=${encodeURIComponent(category.name)}`}
      className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:border-brand-yellow transition-all duration-300 group cursor-pointer h-full"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {category.icon}
      </div>
      <h3 className="font-bold text-gray-800 text-center group-hover:text-brand-yellow transition-colors">
        {category.name}
      </h3>
    </Link>
  );
};

export default CategoryCard;