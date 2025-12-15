import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { SERVICES, CATEGORIES } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    const search = params.get('search');
    
    if (cat) setSelectedCategory(cat);
    if (search) setSearchTerm(search);
  }, [location]);

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">كل الخدمات</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4 space-y-6">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Search size={18} /> بحث
              </h3>
              <input 
                type="text"
                placeholder="ابحث عن خدمة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="font-bold flex items-center gap-2">
                  <Filter size={18} /> التصنيفات
                </h3>
                {selectedCategory !== 'All' && (
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className="text-xs text-red-500 flex items-center gap-1 hover:underline"
                  >
                    <X size={12} /> إلغاء
                  </button>
                )}
              </div>
             
              <ul className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
                <li>
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-right px-3 py-2 rounded-md transition-colors ${selectedCategory === 'All' ? 'bg-brand-yellow text-black font-bold' : 'hover:bg-gray-100 text-gray-600'}`}
                  >
                    الكل
                  </button>
                </li>
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full text-right px-3 py-2 rounded-md transition-colors ${selectedCategory === cat.name ? 'bg-brand-yellow text-black font-bold' : 'hover:bg-gray-100 text-gray-600'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grid */}
          <div className="w-full lg:w-3/4">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-xl text-center shadow-sm">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">لا توجد خدمات مطابقة</h3>
                <p className="text-gray-500">جرب تغيير كلمات البحث أو اختر تصنيفاً آخر.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  className="mt-6 text-brand-black underline hover:text-brand-yellow"
                >
                  عرض كل الخدمات
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;