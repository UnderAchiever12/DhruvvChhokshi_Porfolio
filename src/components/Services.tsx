
import { Card } from "@/components/ui/card";
import { Code, Monitor, Server, Briefcase, Github, User } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Custom Website Development",
      description: "Building responsive, modern websites tailored to your specific needs and business goals.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating beautiful, interactive user interfaces using modern frameworks and best practices.",
      features: ["React.js", "Responsive UI", "Modern Design"]
    },
    {
      icon: Server,
      title: "Backend Development & APIs",
      description: "Developing robust server-side applications and RESTful APIs for seamless data management.",
      features: ["Node.js", "Express.js", "Database Design"]
    },
    {
      icon: Github,
      title: "Firebase Integrations",
      description: "Implementing real-time databases, authentication, and cloud functions for scalable applications.",
      features: ["Real-time DB", "Authentication", "Cloud Functions"]
    },
    {
      icon: Briefcase,
      title: "Hosting & Deployment",
      description: "Complete deployment solutions using AWS EC2, Vercel, and Firebase Hosting platforms.",
      features: ["AWS EC2", "Vercel", "Firebase Hosting"]
    },
    {
      icon: User,
      title: "Mentoring & Training",
      description: "Personalized tech training and mentoring for aspiring developers and students.",
      features: ["1-on-1 Sessions", "Project Guidance", "Career Advice"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development solutions to bring your ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="p-6 bg-card border-muted hover:shadow-xl transition-all duration-300 group h-full">
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="flex items-center text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-primary rounded-full mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ 
                          repeat: Infinity,
                          duration: 2,
                          delay: featureIndex * 0.2
                        }}
                      />
                      <span className="text-foreground/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
