import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Segredo do Emagrecimento. Todos os direitos reservados.</p>
        <p className="text-xs">
          Aviso Legal: Os resultados podem variar de pessoa para pessoa e não são garantidos. Consulte sempre um profissional de saúde antes de iniciar qualquer programa de emagrecimento.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
