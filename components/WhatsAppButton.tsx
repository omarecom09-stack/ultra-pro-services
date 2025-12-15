import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  const defaultLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a
      href={defaultLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-lg font-bold">
        تواصل معنا
      </span>
    </a>
  );
};

export default WhatsAppButton;