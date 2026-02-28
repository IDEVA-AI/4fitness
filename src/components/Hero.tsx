import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop',
    title: 'Transformação real da sua disposição e corpo',
    subtitle: 'Através de treinos práticos e seguros.',
    description: 'Ajudamos pessoas que buscam sair do sedentarismo ou atletas que desejam otimizar performance. Valorizamos acompanhamento profissional e rotinas de treino sustentáveis e eficientes.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1920&auto=format&fit=crop',
    title: 'Segurança técnica absoluta em cada movimento',
    subtitle: 'Acompanhamento humanizado e próximo.',
    description: 'Não perca tempo em ambientes impessoais. Nossa metodologia foca na técnica correta para evitar lesões e garantir resultados rápidos e duradouros.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1920&auto=format&fit=crop',
    title: 'Integração sustentável entre exercício e rotina',
    subtitle: 'Treinos planejados para o seu tempo.',
    description: 'Supere a falta de tempo. Criamos rotinas eficientes que se adaptam ao seu dia a dia, promovendo longevidade física e bem-estar constante.',
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10" />
          <img
            src={slides[currentSlide].image}
            alt="Treinamento 4Fitness"
            className="w-full h-full object-cover object-center opacity-60"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                {slides[currentSlide].title}
                <span className="block text-primary mt-2 text-3xl sm:text-4xl md:text-5xl">{slides[currentSlide].subtitle}</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/55619838435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] group"
                >
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute z-30 bottom-10 right-10 flex space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-gray-900/50 text-white hover:bg-primary backdrop-blur-sm transition-colors border border-gray-700 hover:border-primary"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-gray-900/50 text-white hover:bg-primary backdrop-blur-sm transition-colors border border-gray-700 hover:border-primary"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute z-30 bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
