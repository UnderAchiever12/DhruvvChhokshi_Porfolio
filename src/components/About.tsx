
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", 
    "Express.js", "MongoDB", "Firebase", "AWS EC2"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-lg text-foreground/80 leading-relaxed font-source"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I'm a dedicated full-stack developer with a passion for creating clean, efficient, and user-friendly web applications. My journey in tech began during my B.Tech in ICT at DA-IICT, where I discovered my love for problem-solving through code.
            </motion.p>
            <motion.p 
              className="text-lg text-foreground/80 leading-relaxed font-source"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Over the past 2 years, I've gained valuable experience working with modern technologies and frameworks, from building responsive frontends with React to developing robust backends with Node.js and managing data with MongoDB and Firebase.
            </motion.p>
            <motion.p 
              className="text-lg text-foreground/80 leading-relaxed font-source"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              When I'm not coding, I enjoy creating content to share my learnings with the developer community and mentoring aspiring developers on their coding journey.
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariants}>
              <Card className="p-6 bg-background border-muted hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-cormorant font-semibold text-foreground mb-4">
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="font-medium text-primary font-montserrat">B.Tech in ICT</p>
                  <p className="text-muted-foreground font-source">DA-IICT • Graduated 2024</p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="p-6 bg-background border-muted hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-cormorant font-semibold text-foreground mb-4">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-primary font-montserrat">Technical Expert</p>
                    <p className="text-sm text-muted-foreground font-source">Grras IT Solutions • Mentoring in Full Stack Dev</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary font-montserrat">Software Intern</p>
                    <p className="text-sm text-muted-foreground font-source">Infixzon Pvt. Ltd. • Node.js + Firebase + AWS EC2</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary font-montserrat">Freelancer</p>
                    <p className="text-sm text-muted-foreground font-source">Ongoing web development projects</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="p-6 bg-background border-muted hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-cormorant font-semibold text-foreground mb-4">
                  Skills
                </h3>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills.map((skill, index) => (
                    <motion.span 
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium cursor-pointer font-montserrat"
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "hsl(var(--primary))",
                        color: "hsl(var(--primary-foreground))"
                      }}
                      whileTap={{ scale: 0.95 }}
                      custom={index}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
