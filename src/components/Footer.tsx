const Footer = () => {
  const handleDeveloperEmail = () => {
    window.open("mailto:microfocuspro@gmail.com", "_blank");
  };

  return (
    <footer className="bg-pizza-darkRed py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <img 
              src="/lovable-uploads/9485b1dd-49a5-4023-8dff-1333579d37f6.png" 
              alt="Dona Melitta Pizzeria Logo" 
              className="w-32 h-auto mx-auto opacity-90"
            />
          </div>
          
          <p className="font-inter text-pizza-cream mb-2">
            © 2025 Dona Melitta Pizzeria. Todos os direitos reservados.
          </p>
          
          <p className="font-inter text-pizza-cream/70 text-sm">
            Rua das Siriemas, 162 • (43) 9 8844-8558
          </p>
          
          <div className="mt-4 flex justify-center space-x-6">
            <a 
              href="https://wa.me/5543988448558" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pizza-cream hover:text-white transition-colors duration-300"
            >
              WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/donamelittapizzeria/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pizza-cream hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>

          {/* Crédito da empresa desenvolvedora */}
          <div className="mt-6 pt-4 border-t border-pizza-cream/20">
            <p className="font-inter text-pizza-cream/60 text-xs">
              Desenvolvido por{" "}
              <button
                onClick={handleDeveloperEmail}
                className="text-pizza-cream hover:text-white font-semibold underline transition-colors duration-300 hover:no-underline"
              >
                Micro Focus Pro
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
