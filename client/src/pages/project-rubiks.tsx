import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Brain, BarChart } from "lucide-react";
import { Link } from "wouter";

export default function ProjectRubiks() {
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
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Rubik's Cube Analysis"
                className="w-full max-w-2xl h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Rubik's Cube Analysis Project
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
              Mathematical analysis of solving algorithms and pattern recognition, showcasing analytical thinking and problem-solving expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-primary/10 text-primary">Python</Badge>
              <Badge className="bg-primary/10 text-primary">Data Analysis</Badge>
              <Badge className="bg-primary/10 text-primary">Algorithms</Badge>
              <Badge className="bg-primary/10 text-primary">Mathematics</Badge>
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
                  This comprehensive analysis project explores the mathematical foundations behind Rubik's Cube solving algorithms. Through systematic research and data collection, I investigated various solving methods and their efficiency patterns.
                </p>
                <p>
                  The project demonstrates my ability to break down complex problems into manageable components, apply mathematical reasoning, and present findings in a clear, actionable format.
                </p>
                <p>
                  <strong>Why this matters for your project:</strong> This showcases my analytical thinking process, attention to detail, and ability to tackle complex challenges systematically - skills directly applicable to web development problem-solving.
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
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Algorithm Implementation</h3>
                    <p className="text-slate-600">
                      Coded multiple solving algorithms in Python, optimizing for different scenarios and measuring performance metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Pattern Recognition</h3>
                    <p className="text-slate-600">
                      Identified and analyzed recurring patterns in cube states, developing insights into optimal solving strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <BarChart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Data Visualization</h3>
                    <p className="text-slate-600">
                      Created comprehensive charts and graphs to illustrate algorithm efficiency and solution pathways.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-secondary mb-8">How This Benefits Your Project</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-secondary mb-3">Problem-Solving Skills</h3>
                <p className="text-slate-600">
                  My systematic approach to breaking down complex problems translates directly to debugging and optimizing web applications.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-secondary mb-3">Attention to Detail</h3>
                <p className="text-slate-600">
                  The precision required in mathematical analysis ensures your website will be built with meticulous care and accuracy.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-secondary mb-3">Analytical Thinking</h3>
                <p className="text-slate-600">
                  My ability to analyze patterns and optimize solutions means your website will be efficient and well-structured.
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