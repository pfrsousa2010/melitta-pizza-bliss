import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Instagram, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/554330254600?text=Olá! Dona Melitta Pizzeria, gostaria de fazer um pedido!", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/donamelittapizzeria/", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pizza-darkRed to-pizza-red">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Faça seu Pedido Agora!
          </h2>
          <p className="font-inter text-xl text-pizza-cream max-w-2xl mx-auto">
            Entre em contato conosco e saboreie as melhores pizzas e esfirras da região
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="bg-white/95 backdrop-blur shadow-2xl hover:shadow-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-pizza-darkRed mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-pizza-red" />
                    <div>
                      <p className="font-inter font-semibold text-gray-800">WhatsApp</p>
                      <p className="font-inter text-gray-600">(43) 3025-4600</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-pizza-red" />
                    <div>
                      <p className="font-inter font-semibold text-gray-800">Endereço</p>
                      <p className="font-inter text-gray-600">Rua Débora, 30</p>
                    </div>
                  </div>

                  {/* Mapa e botão Google Maps */}
                  <div className="mt-4 flex flex-col items-start">
                    <iframe
                      title="Mapa Dona Melitta Pizzeria"
                      src="https://www.google.com/maps?q=-23.3161441,-51.1423422&z=17&output=embed"
                      width="100%"
                      height="180"
                      style={{ border: 0, borderRadius: '12px', marginBottom: '12px', minWidth: '200px' }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <Button
                      asChild
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-2 shadow-md transition-all duration-300 flex items-center gap-2"
                    >
                      <a
                        href="https://www.google.com/maps/place/Dona+Melitta+Pizzeria/@-23.3161728,-51.1424789,20.75z/data=!4m15!1m8!3m7!1s0x94eb4379fa85d435:0x4031cfb60d60f05e!2sR.+D%C3%A9bora,+30+-+Interlagos,+Londrina+-+PR,+86039-330!3b1!8m2!3d-23.3161253!4d-51.142347!16s%2Fg%2F11rg66xrj4!3m5!1s0x94eb43ed9f82931d:0x8bb17a67b28a02a4!8m2!3d-23.3161441!4d-51.1423422!16s%2Fg%2F11ty4pvhv5?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-5 w-5 mr-2" />
                        Me leve até lá
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-6 w-6 text-pizza-red" />
                    <div>
                      <p className="font-inter font-semibold text-gray-800">Instagram</p>
                      <p className="font-inter text-gray-600">@donamelittapizzeria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-pizza-red" />
                    <div>
                      <p className="font-inter font-semibold text-gray-800">Horário</p>
                      <p className="font-inter text-gray-600">De quarta a segunda das 1830h às 23h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="bg-white/95 backdrop-blur shadow-2xl hover:shadow-white/10 transition-all duration-300">
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="font-playfair text-2xl font-bold text-pizza-darkRed mb-6 text-center">
                  Como Fazer seu Pedido
                </h3>
                
                <div className="space-y-6">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="mr-3 h-6 w-6" />
                    Pedir pelo WhatsApp
                  </Button>
                  
                  <Button 
                    onClick={handleInstagramClick}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <Instagram className="mr-3 h-6 w-6" />
                    Ver Cardápio no Instagram
                  </Button>
                  
                  <div className="text-center pt-4">
                    <p className="font-inter text-sm text-gray-600">
                      🍕 🥟 Entrega rápida • Pagamento na entrega
                    </p>
                    
                  </div>

                  {/* Métodos de Pagamento */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-inter font-semibold text-gray-800 mb-3 text-center">Formas de Pagamento</p>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="text-center">
                        <p className="font-inter text-xs font-semibold text-gray-700 mb-1">VISA</p>
                        <i className="fa-brands fa-cc-visa text-3xl text-blue-800"></i>
                      </div>
                      <div className="text-center">
                        <p className="font-inter text-xs font-semibold text-gray-700 mb-1">Mastercard</p>
                        <i className="fa-brands fa-cc-mastercard text-3xl text-red-600"></i>
                      </div>
                      <div className="text-center">
                        <p className="font-inter text-xs font-semibold text-gray-700 mb-1">PIX</p>
                        <i className="fa-brands fa-pix text-3xl text-green-500"></i>
                      </div>
                      <div className="text-center">
                        <p className="font-inter text-xs font-semibold text-gray-700 mb-1">Dinheiro</p>
                        <i className="fa-solid fa-money-bill-1 text-3xl text-green-600"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                Sua Fome Pede Dona Melitta! 🍕🥟
              </h3>
              <p className="font-inter text-pizza-cream text-lg mb-6">
                Não perca tempo, faça seu pedido agora e experimente as melhores pizzas e esfirras da região!
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-pizza-cream text-pizza-darkRed hover:bg-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-110"
              >
                PEDIR AGORA! 🚀
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
