
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Heart, Clock } from "lucide-react";

const PizzaHighlights = () => {
  const highlights = [
    {
      icon: <Flame className="h-12 w-12 text-pizza-red" />,
      title: "Massa Artesanal",
      description: "Pizzas e esfirras feitas diariamente com ingredientes selecionados e muito amor"
    },
    {
      icon: <Heart className="h-12 w-12 text-pizza-red" />,
      title: "Ingredientes Frescos",
      description: "Selecionamos os melhores ingredientes para garantir o sabor perfeito em cada produto"
    },
    {
      icon: <Clock className="h-12 w-12 text-pizza-red" />,
      title: "Preparo Rápido",
      description: "Suas pizzas e esfirras quentinhas e deliciosas, prontas rapidinho"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pizza-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pizza-darkRed mb-4">
            Por que Escolher a Dona Melitta?
          </h2>
          <p className="font-inter text-xl text-gray-700 max-w-2xl mx-auto">
            Cada pizza e esfirra é preparada com carinho e dedicação, usando apenas os melhores ingredientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-pizza-darkRed mb-4">
                  {highlight.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Images Section */}
        <div className="mt-20">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-pizza-darkRed text-center mb-12">
            Nossos Deliciosos Produtos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-pizza-red to-pizza-darkRed flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🍕</div>
                  <p className="font-playfair text-xl font-semibold">Pizza Margherita</p>
                  <p className="font-inter text-sm opacity-90">Molho, mussarela, tomate, manjericão</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-pizza-green to-green-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🍕</div>
                  <p className="font-playfair text-xl font-semibold">Pizza Especial</p>
                  <p className="font-inter text-sm opacity-90">Com nossos ingredientes premium</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🥟</div>
                  <p className="font-playfair text-xl font-semibold">Esfirra de Carne</p>
                  <p className="font-inter text-sm opacity-90">Massa macia com recheio temperado</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-orange-600 to-red-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🥟</div>
                  <p className="font-playfair text-xl font-semibold">Esfirra de Frango</p>
                  <p className="font-inter text-sm opacity-90">Sabor caseiro irresistível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzaHighlights;
