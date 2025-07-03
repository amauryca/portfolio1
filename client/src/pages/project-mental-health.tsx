import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Users, Globe } from "lucide-react";
import { Link } from "wouter";

export default function ProjectMentalHealth() {
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
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Mental Health Campaign"
                className="w-full max-w-2xl h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Mental Health Awareness Campaign
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
              Digital campaign for a nonprofit organization focused on mental health awareness and support resources for teens.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-accent/10 text-accent">Web Design</Badge>
              <Badge className="bg-accent/10 text-accent">Social Impact</Badge>
              <Badge className="bg-accent/10 text-accent">Campaign Strategy</Badge>
              <Badge className="bg-accent/10 text-accent">User Experience</Badge>
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
                  This meaningful project involved creating a comprehensive digital campaign for a mental health nonprofit, focusing on teen awareness and support. I designed user-friendly interfaces that make mental health resources accessible and approachable.
                </p>
                <p>
                  The campaign emphasized creating a safe, welcoming digital space where teens could find help without stigma, featuring intuitive navigation and thoughtful design choices that prioritize user comfort and privacy.
                </p>
                <p>
                  <strong>Why this matters for your project:</strong> This demonstrates my ability to understand sensitive user needs, create empathetic design solutions, and build websites that genuinely serve their communities - perfect for mission-driven organizations.
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
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Heart className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Empathetic Design</h3>
                    <p className="text-slate-600">
                      Created calming, accessible interfaces that reduce anxiety and encourage engagement with mental health resources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Community Focus</h3>
                    <p className="text-slate-600">
                      Developed features that connect teens with peer support while maintaining privacy and safety standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Wide Reach Impact</h3>
                    <p className="text-slate-600">
                      Designed responsive layouts ensuring the campaign reaches teens across all devices and platforms effectively.
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
                <h3 className="font-bold text-secondary mb-3">User-Centered Design</h3>
                <p className="text-slate-600">
                  I prioritize understanding your audience's needs and emotions to create websites that truly connect with your visitors.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-secondary mb-3">Mission-Driven Approach</h3>
                <p className="text-slate-600">
                  Experience working with nonprofits means I understand how to build websites that effectively communicate your values and goals.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-secondary mb-3">Accessibility Focus</h3>
                <p className="text-slate-600">
                  Your website will be designed to be inclusive and accessible to all users, regardless of their technical abilities or circumstances.
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