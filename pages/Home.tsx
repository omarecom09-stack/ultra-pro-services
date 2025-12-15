import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowLeft, CheckCircle } from 'lucide-react';
import { CATEGORIES, SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import CategoryCard from '../components/CategoryCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredServices = SERVICES.slice(0, 4);
  const categoriesPreview = CATEGORIES.slice(0, 8); // Show only top 8

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    if (query) {
      navigate(`/services?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            منصتك الشاملة <br /> 
            <span className="text-brand-yellow">لكل الخدمات الرقمية</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            نحول أفكارك إلى واقع عبر نخبة من الخدمات الاحترافية. تصفح، اختر، واطلب مباشرة عبر واتساب بكل سهولة وأمان.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto relative mb-8">
            <input 
              type="text" 
              name="search"
              placeholder="ابحث عن خدمة (مثال: تصميم شعار، متجر إلكتروني...)" 
              className="w-full py-4 pr-6 pl-14 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-shadow text-lg"
            />
            <button 
              type="submit" 
              className="absolute left-2 top-2 bottom-2 bg-brand-yellow text-black p-3 rounded-full hover:bg-yellow-400 transition-colors"
            >
              <Search size={24} />
            </button>
          </form>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle size={18} className="text-brand-yellow" />
              <span>جودة مضمونة</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle size={18} className="text-brand-yellow" />
              <span>تسليم سريع</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle size={18} className="text-brand-yellow" />
              <span>طلب مباشر واتساب</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">تصفح حسب القسم</h2>
              <p className="text-gray-500">اختر من بين مجموعة واسعة من الخدمات الاحترافية</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-brand-black font-bold hover:text-brand-yellow transition-colors">
              عرض الكل <ArrowLeft size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {categoriesPreview.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/services" className="inline-flex items-center gap-2 text-brand-black font-bold hover:text-brand-yellow transition-colors">
              عرض جميع الأقسام <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">خدمات مميزة</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              أكثر الخدمات طلباً من قبل عملائنا، تم اختيارها لك بعناية لتناسب احتياجات مشروعك.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-block bg-brand-black text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-yellow hover:text-black transition-all shadow-lg hover:shadow-xl"
            >
              استكشف جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-yellow text-brand-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">جاهز لبدء مشروعك؟</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-80 font-medium">
            فريقنا جاهز لتنفيذ طلباتك. تواصل معنا الآن عبر واتساب واحصل على استشارة مجانية.
          </p>
          <a 
            href={`https://wa.me/213600000000`} 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            <CheckCircle />
            اطلب خدمتك الآن
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;