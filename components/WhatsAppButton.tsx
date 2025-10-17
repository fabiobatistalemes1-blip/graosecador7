import React from 'react';
import { WHATSAPP_LINK } from '../config';

interface WhatsAppButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  isBouncing?: boolean;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text,
  variant = 'primary',
  isBouncing = false,
  className = '',
}) => {
  const baseClasses =
    'w-full md:w-auto text-center font-bold py-4 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-3 text-lg md:text-xl';

  const variantClasses = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-300',
    secondary: 'bg-white hover:bg-gray-100 text-emerald-600 shadow-gray-300',
  };
  
  const bounceClass = isBouncing ? 'animate-bounce' : '';

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${bounceClass} ${className}`}
    >
      <i className="fab fa-whatsapp text-2xl"></i>
      {text}
    </a>
  );
};

export default WhatsAppButton;
