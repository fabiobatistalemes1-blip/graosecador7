import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Elimine Peso sem dieta e exercícios,
          <br />
          <span className="text-emerald-600">
            com o Grão secreto + Potente que Bariátrica e Moujaro...
          </span>
          <br />
          Porém Natural e seguro!
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
          Descubra o método natural e rápido que está transformando a vida de milhares de mulheres, sem a necessidade de dietas restritivas ou rotinas de exercícios exaustivas.
        </p>
        <div className="flex justify-center">
            <WhatsAppButton text="QUERO ENTRAR NO GRUPO VIP!" isBouncing={true} />
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Vagas limitadas. Garanta a sua agora!
        </p>
      </div>
    </section>
  );
};

export default Hero;
