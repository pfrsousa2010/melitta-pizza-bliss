
import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5543988448558?text=Olá! Gostaria de fazer um pedido na Dona Melitta Pizzeria!", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/donamelittapizzeria/", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pizza-darkRed via-pizza-red to-pizza-red flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-pizza-cream animate-bounce-gentle"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-pizza-green animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-pizza-cream animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-pizza-green animate-bounce-gentle" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/828fb5c6-8923-483f-ad22-566fc1590595.png" 
              alt="Dona Melitta Pizzeria Logo" 
              className="w-80 h-auto mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            A Verdadeira Pizza<br />
            <span className="text-pizza-cream">Artesanal</span> que<br />
            Você Merece!
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-xl md:text-2xl text-pizza-cream mb-8 animate-fade-in drop-shadow-md" style={{animationDelay: '0.3s'}}>
            Sabor inesquecível em cada fatia
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Faça seu Pedido Agora!
            </Button>
            
            <Button 
              onClick={handleInstagramClick}
              variant="outline"
              className="bg-white/90 text-pizza-red border-2 border-white hover:bg-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Ver no Instagram
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-pizza-cream animate-fade-in" style={{animationDelay: '0.9s'}}>
            <p className="font-inter text-lg mb-2">📍 Rua das Siriemas, 162</p>
            <p className="font-inter text-lg">📱 (43) 9 8844-8558</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
