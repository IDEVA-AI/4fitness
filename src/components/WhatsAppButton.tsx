import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      href="https://wa.me/55619838435"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#20bd5a] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center transform scale-90 sm:scale-100"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-gray-800">
        Fale com um especialista
        {/* Arrow */}
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
      </span>
    </motion.a>
  );
}
