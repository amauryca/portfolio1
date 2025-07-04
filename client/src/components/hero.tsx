import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { Send, Eye } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="https://ibb.co/kLzBcPz" 
            alt="Amaury Castillo-Acevedo"
            className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover border-4 border-white"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight"
        >
          Hi, I'm <span className="text-primary">Amaury</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Need a website? I'll build it right — <span className="text-accent font-medium">custom, fast, and affordable.</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
            17-year-old web developer with 3 years of self-taught coding experience. I'm passionate about helping others grow online through beautiful, functional websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-8 py-3 text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              <Send className="w-5 h-5 mr-2" />
              Get Your Website
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-2 border-primary text-primary px-8 py-3 text-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200"
            >
              <Eye className="w-5 h-5 mr-2" />
              View My Work
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-slate-700 leading-relaxed">
            I'm a high school student with a passion for technology and community impact. Beyond coding, I'm active in leadership programs, STEM research, and civic engagement. My goal is to combine technical skills with meaningful projects that make a difference in people's lives.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
