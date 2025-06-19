
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-bold text-foreground mb-6"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <motion.span 
                className="text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
              >
                Dhruvv Chhokshi
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium font-montserrat"
              variants={itemVariants}
            >
              Full Stack Developer | Content Creator | Curious Coder
            </motion.h2>
            
            <motion.p 
              className="text-lg text-foreground/80 mb-8 max-w-2xl font-source"
              variants={itemVariants}
            >
              With 2 years of experience in web development, I love coding clean, efficient solutions and sharing my journey with others through creative content.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary"
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="btn-secondary"
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-secondary to-muted overflow-hidden border-8 border-card shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" as const, stiffness: 300 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                  alt="Dhruvv Chhokshi"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"
                variants={floatingVariants}
                animate="animate"
              />
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-30"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
