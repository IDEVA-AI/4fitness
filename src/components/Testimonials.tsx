import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ricardo Mendes',
      role: 'Empresário',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop',
      quote: 'Eu não tinha tempo e odiava o ambiente lotado das academias. Na 4Fitness, encontrei treinos diretos ao ponto. Em 3 meses, minha disposição para o trabalho e minha saúde se transformaram completamente.',
      highlight: true
    },
    {
      name: 'Ana Carolina',
      role: 'Arquiteta',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop',
      quote: 'Sempre tive medo de me lesionar. O acompanhamento técnico rigoroso dos instrutores me deu a confiança que eu precisava para evoluir nos treinos de força.',
      highlight: false
    },
    {
      name: 'Marcos Silva',
      role: 'Atleta Amador',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop',
      quote: 'Buscava otimizar minha performance na corrida. O trabalho de fortalecimento e mobilidade feito aqui foi o divisor de águas para baixar meus tempos sem sentir dores.',
      highlight: false
    },
    {
      name: 'Juliana Costa',
      role: 'Médica',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=256&auto=format&fit=crop',
      quote: 'A rotina de plantões me deixava exausta. A 4Fitness conseguiu integrar a atividade física na minha vida de forma sustentável e acolhedora.',
      highlight: false
    }
  ];

  const highlighted = testimonials.find(t => t.highlight);
  const others = testimonials.filter(t => !t.highlight);

  return (
    <section id="depoimentos" className="py-24 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-6"
          >
            Transformações reais, <span className="text-primary">resultados concretos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Depoimentos de alunos que superaram o sedentarismo e registros de transformações físicas reais. Demonstração de evolução em performance e saúde.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gray-900 border border-gray-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/30 transition-all duration-500 ${testimonial.highlight ? 'md:col-span-2 lg:col-span-1 border-primary/20 bg-gradient-to-br from-gray-900 to-gray-950' : ''}`}
            >
              {testimonial.highlight && <Quote className="absolute top-6 right-6 h-16 w-16 text-gray-800/30 -rotate-12 group-hover:text-primary/10 transition-colors" />}

              <div>
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className={`text-gray-200 leading-relaxed mb-8 ${testimonial.highlight ? 'text-lg font-medium' : 'text-base'}`}>
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`w-12 h-12 rounded-full object-cover ${testimonial.highlight ? 'border-2 border-primary' : 'border border-gray-700'}`}
                    referrerPolicy="no-referrer"
                  />
                  {testimonial.highlight && <div className="absolute -bottom-1 -right-1 bg-primary text-white p-0.5 rounded-full"><Star className="h-3 w-3 fill-white" /></div>}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
