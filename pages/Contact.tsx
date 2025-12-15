import React from 'react';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h1>
          <p className="text-gray-500 text-lg">نحن هنا للإجابة على استفساراتك ومساعدتك في اختيار الخدمة الأنسب</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
                <div className="flex items-start gap-4">
                    <div className="bg-brand-yellow/10 p-3 rounded-full text-brand-black">
                        <MessageCircle size={28} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">واتساب (مفضل للطلبات)</h3>
                        <p className="text-gray-500 mb-2">تواصل مباشر وسريع مع فريق المبيعات</p>
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-brand-black font-bold text-lg hover:text-brand-yellow transition-colors dir-ltr block text-right">
                           +{WHATSAPP_NUMBER}
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-brand-yellow/10 p-3 rounded-full text-brand-black">
                        <Mail size={28} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                        <p className="text-gray-500 mb-2">للاستفسارات العامة والشركات</p>
                        <a href="mailto:contact@ultrapro.com" className="text-brand-black font-bold hover:text-brand-yellow transition-colors">
                           contact@ultrapro.com
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-brand-yellow/10 p-3 rounded-full text-brand-black">
                        <Clock size={28} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                        <p className="text-gray-500">
                           يومياً من 9 صباحاً حتى 10 مساءً
                           <br />
                           فريق الدعم متاح 24/7 للحالات الطارئة
                        </p>
                    </div>
                </div>
            </div>

            {/* Direct WhatsApp CTA Card */}
            <div className="bg-brand-black text-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-yellow/20 rounded-full -ml-8 -mb-8 blur-xl"></div>
                
                <h2 className="text-2xl font-bold mb-4 relative z-10">هل لديك مشروع جاهز؟</h2>
                <p className="text-gray-300 mb-8 relative z-10">
                    لا تتردد في مراسلتنا الآن بتفاصيل مشروعك وسنقوم بالرد عليك بخطة عمل وعرض سعر فوري.
                </p>
                <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-lg relative z-10 flex items-center gap-2"
                >
                    <MessageCircle />
                    ابدأ المحادثة الآن
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;