import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Microscope, TrendingUp, Database } from "lucide-react";
import { Link } from "wouter";

export default function ProjectScentMemory() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <Button variant="ghost" className="text-slate-700 hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <span className="text-xl font-bold text-primary">Amaury</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Scent & Memory Research"
                className="w-full max-w-2xl h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Scent & Memory Research Project
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
              Scientific experiment exploring the connection between scent and memory retention, featuring comprehensive data collection and visualization.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-secondary/10 text-secondary">Research</Badge>
              <Badge className="bg-secondary/10 text-secondary">STEM</Badge>
              <Badge className="bg-secondary/10 text-secondary">Data Visualization</Badge>
              <Badge className="bg-secondary/10 text-secondary">Scientific Method</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">Project Overview</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  This rigorous scientific research project investigated the fascinating relationship between olfactory stimuli and memory performance. Through controlled experiments and systematic data collection, I explored how different scents influence memory retention and recall.
                </p>
                <p>
                  The research involved designing proper experimental protocols, managing participant data, and creating comprehensive visualizations to communicate findings effectively to both scientific and general audiences.
                </p>
                <p>
                  <strong>Why this matters for your project:</strong> This research experience demonstrates my ability to handle complex data, follow strict methodologies, and present technical information clearly - essential skills for building robust, data-driven websites.
                </p>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">Key Achievements</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Microscope className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Scientific Methodology</h3>
                    <p className="text-slate-600">
                      Designed and executed controlled experiments following rigorous scientific protocols and ethical guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Database className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Data Management</h3>
                    <p className="text-slate-600">
                      Collected, organized, and analyzed large datasets while maintaining data integrity and participant privacy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Data Visualization</h3>
                    <p className="text-slate-600">
                      Created compelling charts, graphs, and interactive visualizations to communicate complex research findings.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-8">Research Findings & Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Key Discoveries</h3>
                <ul className="text-left space-y-3 text-slate-700">
                  <li>• Identified specific scent categories that enhance memory retention by up to 23%</li>
                  <li>• Documented optimal exposure timing for maximum cognitive benefit</li>
                  <li>• Established correlations between individual scent preferences and memory performance</li>
                  <li>• Created practical applications for educational environments</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Technical Skills Applied</h3>
                <ul className="text-left space-y-3 text-slate-700">
                  <li>• Statistical analysis and hypothesis testing</li>
                  <li>• Database design and data visualization tools</li>
                  <li>• Research presentation and documentation</li>
                  <li>• Ethical research practices and participant management</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-secondary mb-8">How This Benefits Your Project</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-secondary mb-3">Data-Driven Decisions</h3>
                <p className="text-slate-600">
                  My research background ensures your website will be built using evidence-based design principles and user behavior insights.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-secondary mb-3">Methodical Approach</h3>
                <p className="text-slate-600">
                  Scientific training means systematic project planning, thorough testing, and careful attention to detail in every aspect of development.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-secondary mb-3">Clear Communication</h3>
                <p className="text-slate-600">
                  Experience presenting complex research translates to explaining technical concepts clearly and keeping you informed throughout the process.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link href="/#contact">
                <Button className="bg-primary text-white px-8 py-3 text-lg font-medium hover:bg-blue-700">
                  Start Your Project Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}