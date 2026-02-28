import { motion } from 'motion/react';
import { Target, Shield, Users, Clock } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: 'A Essência',
      title: 'A Jornada 4Fitness',
      description: 'Nascemos para oferecer um treinamento personalizado, longe das academias lotadas e sem orientação. Na 4Fitness, cada aluno é visto e orientado de perto para alcançar seus objetivos reais.',
      icon: <Target className="h-6 w-6 text-white" />
    },
    {
      year: 'Nossa Missão',
      title: 'Integração Sustentável',
      description: 'Acreditamos que o exercício deve se adaptar à sua rotina, não o contrário. Focamos em técnica rigorosa e suporte constante para garantir longevidade física e resultados seguros.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      year: 'O Diferencial',
      title: 'Suporte e Técnica',
      description: 'Nosso diferencial é o acompanhamento humanizado e técnico para evitar lesões. Unimos otimização do tempo a resultados concretos. Aqui seu tempo é valorizado.',
      icon: <Users className="h-6 w-6 text-white" />
    }
  ];

  const stats = [
    { value: '+5', label: 'Anos de Experiência' },
    { value: '+1000', label: 'Vidas Transformadas' },
    { value: '100%', label: 'Acompanhamento' },
    { value: '0', label: 'Rotinas Genéricas' },
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-4"
          >
            Muito mais que uma academia, <span className="text-primary">seu centro de transformação.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Conheça a filosofia que guia nossos treinos e entenda por que nossos alunos alcançam resultados duradouros.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-10 md:pl-0"
              >
                <div className="md:flex items-start group">
                  <div className="absolute left-0 top-0 md:relative md:flex-shrink-0 md:mr-6 flex items-center justify-center w-12 h-12 rounded-full bg-secondary border border-gray-700 group-hover:border-primary group-hover:bg-primary transition-colors duration-300 z-10">
                    {item.icon}
                  </div>
                  {/* Vertical line for mobile */}
                  <div className="absolute left-6 top-12 bottom-[-3rem] w-px bg-gray-800 md:hidden last:hidden"></div>

                  <div className="mt-1 md:mt-0">
                    <span className="text-sm font-bold tracking-wider text-primary uppercase mb-1 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
                alt="Equipe 4Fitness em ação"
                className="w-full h-auto object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50">
                      <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
