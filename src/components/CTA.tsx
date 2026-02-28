import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
        >
          Transformação real da sua disposição e corpo
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium"
        >
          Deixe a falta de tempo e o medo de lesões no passado. Junte-se a pessoas que valorizam acompanhamento profissional e rotinas eficientes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/55619838435?text=Olá! Gostaria de falar com um especialista da 4Fitness."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-primary bg-white hover:bg-gray-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300"
          >
            Falar com Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          
          <a
            href="https://wa.me/55619838435"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-lg font-bold rounded-md text-white hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            (55) 61983-8435
          </a>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-sm text-white/70"
        >
          Agende sua avaliação física inicial e receba um planejamento de metas personalizado.
        </motion.p>
      </div>
    </section>
  );
}
