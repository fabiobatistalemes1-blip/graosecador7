import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const CTASection: React.FC = () => {
  return (
    <section className="bg-emerald-600 text-white py-16 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronta Para Começar Sua Transformação?
        </h2>
        <div className="flex justify-center">
          <WhatsAppButton text="SIM, QUERO EMAGRECER AGORA!" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
