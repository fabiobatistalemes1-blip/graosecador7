import React from 'react';
import type { Benefit } from '../types';

const benefitsData: Benefit[] = [
  {
    icon: 'fa-utensils',
    title: 'Sem Dietas Restritivas',
    description: 'Coma o que você gosta sem culpa. Nosso método funciona sem que você precise passar fome ou cortar seus alimentos preferidos.',
  },
  {
    icon: 'fa-bed',
    title: 'Sem Exercícios Cansativos',
    description: 'Alcance o corpo dos seus sonhos sem precisar passar horas na academia ou fazer exercícios exaustivos e chatos.',
  },
  {
    icon: 'fa-rocket',
    title: 'Resultados Rápidos',
    description: 'Veja os resultados aparecerem no espelho e na balança em poucas semanas. Um emagrecimento visível e motivador.',
  },
  {
    icon: 'fa-leaf',
    title: 'Componente 100% Natural',
    description: 'Nosso segredo é baseado em um componente natural, seguro para a sua saúde e sem efeitos colaterais indesejados.',
  },
];

const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:-translate-y-2">
        <div className="flex justify-center mb-4">
            <div className="bg-emerald-100 p-4 rounded-full">
                <i className={`fas ${benefit.icon} text-3xl text-emerald-600`}></i>
            </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
        <p className="text-gray-600">{benefit.description}</p>
    </div>
);


const Benefits: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Por Que Nosso Método é Diferente?</h2>
           <p className="text-lg text-gray-600 mt-2">A solução que você sempre procurou está aqui.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map(benefit => (
                <BenefitCard key={benefit.title} benefit={benefit} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
