import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Check, Star, ArrowRight, MessageCircle, ShieldCheck, PlayCircle } from 'lucide-react';
import { SERVICES, generateWhatsAppLink } from '../constants';
import { ServicePackage } from '../types';

type PackageType = 'basic' | 'standard' | 'premium';

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('basic');

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold mb-4">الخدمة غير موجودة</h2>
        <Link to="/services" className="bg-brand-yellow px-6 py-2 rounded-full font-bold">عودة للخدمات</Link>
      </div>
    );
  }

  const currentPackage: ServicePackage = service.packages[selectedPackage];
  
  const whatsappLink = generateWhatsAppLink(
    service.title,
    currentPackage.name,
    currentPackage.price,
    currentPackage.deliveryTime
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-brand-yellow">الرئيسية</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-brand-yellow">الخدمات</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img src={service.image} alt={service.title} className="w-full h-auto object-cover max-h-[500px]" />
            </div>

            {/* Info */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>
              
              <div className="flex items-center gap-6 mb-6 text-sm">
                <div className="bg-brand-yellow/20 text-brand-black px-3 py-1 rounded-full font-bold">
                  {service.category}
                </div>
                <div className="flex items-center gap-1 text-yellow-500 font-bold">
                  <Star fill="currentColor" size={18} />
                  <span>{service.rating}</span>
                  <span className="text-gray-400 font-normal">({service.reviewsCount} تقييم)</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 border-b pb-2">وصف الخدمة</h3>
              <p className="text-gray-600 leading-loose text-lg whitespace-pre-line mb-8">
                {service.description}
              </p>

               {/* Portfolio Section */}
               {service.portfolio && service.portfolio.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 border-r-4 border-brand-yellow pr-3">
                    معرض الأعمال السابقة
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.portfolio.map((item, index) => (
                      <div key={index} className="rounded-xl overflow-hidden shadow-md border border-gray-100 h-64 bg-black relative group">
                        {item.type === 'video' ? (
                           <div className="relative w-full h-full">
                              <video 
                                src={item.url} 
                                controls 
                                className="w-full h-full object-cover" 
                                poster={item.thumbnail}
                                preload="metadata"
                              >
                                متصفحك لا يدعم تشغيل الفيديو.
                              </video>
                              <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                {/* Play icon hint (disappears on interaction if native controls take over, but serves as a visual cue) */}
                              </div>
                           </div>
                        ) : (
                          <div className="w-full h-full overflow-hidden">
                             <img 
                              src={item.url} 
                              alt={`Previous work ${index + 1}`} 
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <ShieldCheck className="text-green-500 mt-1" />
                    <div>
                        <h4 className="font-bold">ضمان الجودة</h4>
                        <p className="text-sm text-gray-500">نضمن لك عملاً احترافياً يطابق المواصفات.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <Clock className="text-blue-500 mt-1" />
                    <div>
                        <h4 className="font-bold">التزام بالوقت</h4>
                        <p className="text-sm text-gray-500">تسليم في الموعد المحدد لكل باقة.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Package Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
              
              {/* Package Tabs */}
              <div className="flex text-center border-b font-bold text-sm">
                {(['basic', 'standard', 'premium'] as PackageType[]).map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`flex-1 py-4 transition-colors ${selectedPackage === pkg ? 'bg-brand-black text-brand-yellow' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                  >
                    {service.packages[pkg].name}
                  </button>
                ))}
              </div>

              {/* Package Content */}
              <div className="p-6">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-2xl font-bold text-gray-900">{currentPackage.name}</span>
                  <span className="text-3xl font-extrabold text-brand-black">{currentPackage.price}</span>
                </div>

                <p className="text-gray-500 mb-6 text-sm font-medium flex items-center gap-2">
                   <Clock size={16} /> مدة التسليم: <span className="text-gray-900 font-bold">{currentPackage.deliveryTime}</span>
                </p>

                <ul className="space-y-3 mb-8">
                  {currentPackage.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <Check size={18} className="text-green-500 mt-1 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#1fb655] transition-colors shadow-md hover:shadow-lg"
                >
                  <MessageCircle size={24} />
                  اطلب الآن عبر واتساب
                </a>
                
                <p className="text-xs text-center text-gray-400 mt-4">
                  سيتم تحويلك إلى واتساب لإتمام تفاصيل الطلب مع فريق الدعم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;