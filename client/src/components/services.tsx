import { motion } from "framer-motion";
import { Code, Smartphone, DollarSign, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Custom Websites",
      description: "Business sites, portfolios, personal blogs, and nonprofit platforms built from scratch to match your vision.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "Mobile-Optimized",
      description: "Every website is designed to look perfect and function seamlessly on all devices and screen sizes.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Affordable Pricing",
      description: "Quality web development at student-friendly rates. Great value without compromising on quality.",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Quick Turnaround",
      description: "Fast delivery without sacrificing quality. Most projects completed within 1-2 weeks.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">My Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional web development services tailored to your needs and budget
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
