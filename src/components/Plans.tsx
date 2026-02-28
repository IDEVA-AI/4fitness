import { motion } from 'motion/react';
import { Check, ArrowRight, Zap } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'Iniciação & Saúde',
      description: 'Ideal para quem busca sair do sedentarismo com segurança e construir uma base sólida.',
      price: 'Sob consulta',
      highlighted: false,
      features: [
        'Treinos adaptados à sua rotina',
        'Instrução técnica passo a passo',
        'Acompanhamento próximo do instrutor',
        'Foco em mobilidade e adaptação',
        'Ambiente acolhedor e sem julgamentos',
      ],
      ctaText: 'Agendar Avaliação',
      ctaLink: 'https://wa.me/55619838435?text=Olá! Gostaria de agendar uma avaliação para o plano Iniciação & Saúde.',
    },
    {
      name: 'Performance & Evolução',
      description: 'Para quem deseja resultados rápidos, otimização de tempo e evolução constante.',
      price: 'Sob consulta',
      highlighted: true,
      badge: 'Mais Escolhido',
      features: [
        'Avaliação física inicial e planejamento de metas personalizado',
        'Treinos otimizados (Time-Efficient)',
        'Correção técnica rigorosa para evitar lesões',
        'Foco em ganho de força e resistência',
        'Ajustes periódicos na rotina de treinos',
      ],
      ctaText: 'Falar com Especialista',
      ctaLink: 'https://wa.me/55619838435?text=Olá! Gostaria de falar com um especialista sobre o plano Performance & Evolução.',
    },
    {
      name: 'Acompanhamento Premium',
      description: 'A experiência definitiva para atletas e alunos que buscam o máximo de personalização.',
      price: 'Sob consulta',
      highlighted: false,
      features: [
        'Avaliação física inicial e planejamento de metas personalizado',
        'Planejamento de treinos avançado e periodizado',
        'Suporte contínuo e direto via WhatsApp',
        'Foco máximo em prevenção de lesões e longevidade',
        'Acompanhamento de métricas de performance',
      ],
      ctaText: 'Agendar Avaliação',
      ctaLink: 'https://wa.me/55619838435?text=Olá! Gostaria de agendar uma avaliação para o plano Acompanhamento Premium.',
    }
  ];

  return (
    <section id="planos" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2"
          >
            <Zap className="h-4 w-4" />
            Invista em Você
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white mt-4 mb-6"
          >
            Planos sob medida para a sua <span className="text-primary">transformação</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Não acreditamos em mensalidades vazias. Oferecemos um acompanhamento real, focado na sua saúde, segurança e resultados. Escolha o nível de suporte ideal para o seu momento.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative rounded-3xl p-8 xl:p-10 flex flex-col h-full transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-gray-900 border-2 border-primary shadow-[0_0_40px_rgba(217,45,32,0.15)] transform lg:-translate-y-4 z-10' 
                  : 'bg-gray-900/50 border border-gray-800 hover:border-gray-700 hover:bg-gray-900'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-3 ${plan.highlighted ? 'text-white' : 'text-gray-200'}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed min-h-[60px]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-800">
                <div className="flex items-baseline text-white">
                  <span className="text-3xl font-black tracking-tight">{plan.price}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Valor focado na entrega de resultados reais.</p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.highlighted ? 'bg-primary/20 text-primary' : 'bg-gray-800 text-gray-400'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={`ml-3 text-sm ${plan.highlighted ? 'text-gray-200' : 'text-gray-400'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 group ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-primary/25'
                    : 'bg-secondary text-white hover:bg-secondary-hover border border-transparent'
                }`}
              >
                {plan.ctaText}
                <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${plan.highlighted ? 'group-hover:translate-x-1' : ''}`} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
