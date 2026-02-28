import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export default function Differentials() {
  const comparisons = [
    {
      feature: 'Suporte contínuo e instruções claras',
      us: true,
      them: false,
      detail: 'Técnica rigorosa para evitar lesões e maximizar resultados.'
    },
    {
      feature: 'Ambiente planejado para otimização do tempo',
      us: true,
      them: false,
      detail: 'Treinos eficientes sem filas ou distrações.'
    },
    {
      feature: 'Atendimento humanizado e focado',
      us: true,
      them: false,
      detail: 'Você não é apenas um número. Conhecemos suas limitações e metas.'
    },
    {
      feature: 'Avaliação física e planejamento de metas',
      us: true,
      them: false,
      detail: 'Ponto de partida claro com métricas reais de evolução.'
    },
    {
      feature: 'Treinos genéricos e impessoais',
      us: false,
      them: true,
      detail: 'Fichas padronizadas que não respeitam sua individualidade.'
    },
    {
      feature: 'Risco de lesão por falta de instrução',
      us: false,
      them: true,
      detail: 'Falta de correção técnica durante a execução dos movimentos.'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-6"
          >
            Por que escolher a <span className="text-primary">4Fitness</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Superamos as objeções comuns: falta de tempo, receio de não se adaptar à rotina e o medo de não receber atenção adequada.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gray-900 border-b border-gray-800 p-4 sm:p-6">
            <div className="col-span-12 sm:col-span-6 flex items-center">
              <h3 className="text-lg font-bold text-white">O que você encontra</h3>
            </div>
            <div className="hidden sm:flex col-span-3 items-center justify-center">
              <span className="text-lg font-black text-primary">4Fitness</span>
            </div>
            <div className="hidden sm:flex col-span-3 items-center justify-center">
              <span className="text-lg font-bold text-gray-500">Academias Comuns</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-800/50">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-12 p-4 sm:p-6 hover:bg-gray-900 transition-all duration-300 group cursor-default">
                <div className="col-span-12 sm:col-span-6 mb-4 sm:mb-0">
                  <p className="text-base font-medium text-gray-200">{item.feature}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
                </div>

                {/* Mobile Labels */}
                <div className="col-span-6 sm:hidden flex items-center text-sm font-bold text-gray-400 mb-2">
                  4Fitness:
                </div>
                <div className="col-span-6 sm:hidden flex items-center text-sm font-bold text-gray-400 mb-2">
                  Comum:
                </div>

                {/* Values */}
                <div className="col-span-6 sm:col-span-3 flex items-center sm:justify-center">
                  {item.us ? (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                      <X className="h-5 w-5 text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3 flex items-center sm:justify-center">
                  {item.them ? (
                    <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center">
                      <Check className="h-5 w-5 text-red-500" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                      <X className="h-5 w-5 text-gray-500" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
