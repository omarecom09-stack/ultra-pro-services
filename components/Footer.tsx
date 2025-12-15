import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Zap className="text-brand-yellow" size={28} />
              <span>خدمات <span className="text-brand-yellow">Ultra Pro</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              منصتك الأولى للخدمات الرقمية الاحترافية. نربطك بأفضل الحلول التقنية والإبداعية لتنمية أعمالك بسرعة وكفاءة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand-yellow">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-brand-yellow transition-colors">الرئيسية</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-brand-yellow transition-colors">جميع الخدمات</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-yellow transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand-yellow">أهم التصنيفات</h3>
            <ul className="space-y-3">
              <li><Link to="/services?cat=design" className="text-gray-300 hover:text-brand-yellow transition-colors">تصميم وجرافيك</Link></li>
              <li><Link to="/services?cat=dev" className="text-gray-300 hover:text-brand-yellow transition-colors">برمجة وتطوير</Link></li>
              <li><Link to="/services?cat=marketing" className="text-gray-300 hover:text-brand-yellow transition-colors">تسويق إلكتروني</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand-yellow">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <MessageCircle size={20} className="text-brand-yellow" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-white dir-ltr">
                  +{WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-brand-yellow" />
                <span>contact@ultrapro.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-brand-yellow" />
                <span>المملكة العربية السعودية، الرياض</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} خدمات Ultra Pro. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;