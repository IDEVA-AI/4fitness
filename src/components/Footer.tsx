import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-display font-black text-white tracking-tighter mb-4 block">
              4<span className="text-primary">FITNESS</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Centro de treinamento especializado que promove a integração sustentável da atividade física à rotina diária.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/4fitness" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-gray-400 hover:text-white text-sm transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white text-sm transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="text-gray-400 hover:text-white text-sm transition-colors">Diferenciais</a></li>
              <li><a href="#depoimentos" className="text-gray-400 hover:text-white text-sm transition-colors">Depoimentos</a></li>
              <li><a href="#planos" className="text-primary hover:text-primary-hover font-medium text-sm transition-colors">Ver Planos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">(55) 61983-8435</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">contato@4fitness.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Av. Principal, 123 - Centro</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Horário</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400 text-sm">Segunda - Sexta</span>
                <span className="text-white text-sm font-medium">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400 text-sm">Sábado</span>
                <span className="text-white text-sm font-medium">08:00 - 12:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="text-gray-400 text-sm">Domingo</span>
                <span className="text-gray-600 text-sm font-medium">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 4Fitness. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Desenvolvido com foco em performance e conversão.
          </p>
        </div>
      </div>
    </footer>
  );
}
