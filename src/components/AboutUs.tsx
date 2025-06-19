
const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pizza-darkRed mb-8">
            Nossa História
          </h2>
          
          <div className="bg-gradient-to-r from-pizza-cream to-white p-8 md:p-12 rounded-2xl shadow-xl">
            <p className="font-inter text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Na <span className="font-bold text-pizza-red">Dona Melitta Pizzeria</span>, cada pizza é uma obra de arte culinária. 
              Combinamos a tradição italiana com o carinho brasileiro, criando sabores únicos que conquistam corações.
            </p>
            
            <p className="font-inter text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Nossa massa é preparada diariamente com ingredientes selecionados, e nosso molho especial é o segredo 
              que faz da nossa pizza uma experiência inesquecível.
            </p>
            
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <p className="font-playfair text-lg font-semibold text-pizza-darkRed">Qualidade</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">❤️</div>
                <p className="font-playfair text-lg font-semibold text-pizza-darkRed">Paixão</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🍕</div>
                <p className="font-playfair text-lg font-semibold text-pizza-darkRed">Tradição</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
