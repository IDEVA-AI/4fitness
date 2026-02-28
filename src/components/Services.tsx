import { motion } from 'motion/react';
import { Dumbbell, Activity, HeartPulse, Timer, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Dumbbell className="h-8 w-8 text-primary" />,
      title: 'Treinamento de Força Personalizado',
      description: 'Ganho de força e massa muscular com execução técnica impecável. Ideal para quem busca sair do sedentarismo ou otimizar performance com segurança.',
      challengeSolved: 'Resolve o medo de lesões por falta de instrução.'
    },
    {
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: 'Condicionamento e Resistência',
      description: 'Métodos práticos para melhorar sua capacidade cardiovascular e fôlego diário, garantindo eficiência máxima em cada sessão.',
      challengeSolved: 'Resolve a ineficiência de treinos genéricos.'
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      title: 'Mobilidade e Longevidade',
      description: 'Rotinas focadas em restaurar a função articular e prevenir dores, integrando a atividade física à sua rotina de forma natural.',
      challengeSolved: 'Resolve a desmotivação em academias impessoais.'
    },
    {
      icon: <Timer className="h-8 w-8 text-primary" />,
      title: 'Treinos Otimizados (Time-Efficient)',
      description: 'Ambiente planejado e metodologia direta ao ponto para quem tem agenda lotada mas não abre mão da saúde.',
      challengeSolved: 'Resolve a falta de tempo para treinar.'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm"
          >
            Nossas Soluções
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-white mt-2 mb-6"
          >
            Treinamento especializado para resultados reais
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Oferecemos métodos práticos e acompanhamento próximo para ganho de força, resistência e mobilidade, garantindo eficiência máxima em cada sessão.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-gray-950 rounded-xl border border-gray-800 group-hover:border-primary/50 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block w-fit">
                    {service.challengeSolved}
                  </p>
                  <a
                    href="https://wa.me/55619838435?text=Olá! Gostaria de agendar uma avaliação para o serviço de treinamento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary-hover transition-colors whitespace-nowrap"
                  >
                    Agendar Avaliação
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
