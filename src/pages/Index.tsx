
import Hero from "@/components/Hero";
import PizzaHighlights from "@/components/PizzaHighlights";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PizzaHighlights />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
