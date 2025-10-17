import React from 'react';
import type { Testimonial } from '../types';
import WhatsAppButton from './WhatsAppButton';

const testimonialsData: Testimonial[] = [
  {
    name: 'Ivani',
    weightLost: 20,
    image: 'https://i.imgur.com/zZPmQPT.jpeg',
    text: 'Eu não acreditava que seria possível perder tanto peso sem sofrer. Esse método mudou minha vida e minha autoestima. Perdi 20kg e me sinto outra pessoa!',
  },
  {
    name: 'Maria',
    weightLost: 38,
    image: 'https://i.imgur.com/DnjPdU6.png',
    text: 'Depois de anos tentando de tudo, finalmente encontrei algo que funciona de verdade. Foram 38kg eliminados sem dietas malucas. Estou muito feliz e saudável.',
  },
  {
    name: 'Célia',
    weightLost: 35,
    image: 'https://i.imgur.com/AMzbial.png',
    text: 'Estava quase desistindo, mas decidi dar uma última chance. E valeu a pena! Eliminei 35kg e hoje tenho energia para brincar com meus netos. Recomendo demais!',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2">
    <img src={testimonial.image} alt={testimonial.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-emerald-200" />
    <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
    <p className="font-bold text-emerald-600 text-lg">{testimonial.name} - {testimonial.weightLost}kg eliminados</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nossos depoimentos são reais, nada Comprado!</h2>
          <p className="text-lg text-gray-600 mt-2">Veja a transformação de mulheres como você.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
            <WhatsAppButton text="EU QUERO SER A PRÓXIMA!" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
