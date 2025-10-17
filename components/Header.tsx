import React from 'react';
import { WHATSAPP_LINK } from '../config';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
        >
          <h1 className="text-xl md:text-2xl font-bold">Emagreça urgente Grupo</h1>
          <i className="fab fa-whatsapp text-2xl md:text-3xl ml-2"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
