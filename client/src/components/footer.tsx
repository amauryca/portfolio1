import { Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Amaury Castillo-Acevedo</h3>
          <p className="text-slate-300">Web Developer | Problem Solver | Community Leader</p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:amaurycacevedo@gmail.com"
            className="text-slate-300 hover:text-white transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/amaury.comp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors duration-200"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-400">
            © 2024 Amaury Castillo-Acevedo. Built with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
