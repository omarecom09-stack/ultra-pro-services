import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-brand-yellow font-bold' : 'text-gray-300 hover:text-white';

  return (
    <nav className="bg-brand-black text-white sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-wider">
            <Zap className="text-brand-yellow" size={32} />
            <span>خدمات <span className="text-brand-yellow">Ultra Pro</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className={isActive('/')}>الرئيسية</Link>
            <Link to="/services" className={isActive('/services')}>الخدمات</Link>
            <Link to="/contact" className={isActive('/contact')}>اتصل بنا</Link>
            <Link to="/services" className="bg-brand-yellow text-brand-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors">
              تصفح الخدمات
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 absolute w-full left-0 border-t border-zinc-800">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className={`block ${isActive('/')}`}>الرئيسية</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className={`block ${isActive('/services')}`}>الخدمات</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`block ${isActive('/contact')}`}>اتصل بنا</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;