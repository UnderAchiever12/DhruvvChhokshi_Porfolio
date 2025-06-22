import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Projects = () => {
  // Fetch projects from database
  const { data: databaseProjects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  // Original projects that should always be displayed
  const fallbackProjects = [
    {
      id: 'fallback-1',
      title: "EPC Management System",
      description: "A comprehensive role-based system for construction workflows, enabling efficient project management and team collaboration.",
      image_url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Firebase", "AWS EC2"],
      features: ["Role-based Access", "Workflow Management", "Real-time Updates"],
      github_url: null,
      demo_url: null
    },
    {
      id: 'fallback-2',
      title: "Speed Detection System",
      description: "Advanced vehicle speed analysis system using computer vision for traffic monitoring and safety enhancement.",
      image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["Python", "OpenCV", "Computer Vision"],
      features: ["Real-time Detection", "Traffic Analysis", "Safety Monitoring"],
      github_url: null,
      demo_url: null
    },
    {
      id: 'fallback-3',
      title: "CRM Software",
      description: "Complete customer relationship management solution with lead tracking, task management, and analytics dashboard.",
      image_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB"],
      features: ["Lead Management", "Task Tracking", "Analytics Dashboard"],
      github_url: null,
      demo_url: null
    }
  ];

  // Combine fallback projects with database projects
  const allProjects = [...fallbackProjects, ...(databaseProjects || [])];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  if (isLoading) {
    return (
      <section id="projects" className="section-padding bg-card">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat">
            Real-world solutions showcasing my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id || `project-${index}`}
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring" as const, stiffness: 300, damping: 10 }
              }}
            >
              <Card className="overflow-hidden bg-background border-muted hover:shadow-2xl transition-all duration-300 group h-full">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image_url || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-primary/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-cormorant font-sem;bold text-foreground mb-3"
                    whileHover={{ color: "hsl(var(--primary))" }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed font-source">
                    {project.description}
                  </p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {(project.technologies || []).map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium font-montserrat"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "hsl(var(--primary))",
                          color: "hsl(var(--primary-foreground))"
                        }}
                        transition={{ type: "spring" as const, stiffness: 400 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="space-y-1 mb-6">
                    {(project.features || []).map((feature, featureIndex) => (
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
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 2,
                            delay: featureIndex * 0.3
                          }}
                        />
                        <span className="text-foreground/80 font-source">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github_url && (
                      <motion.div 
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm" variant="outline" className="w-full" asChild>
                          <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.demo_url && (
                      <motion.div 
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm" className="w-full" asChild>
                          <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {!project.github_url && !project.demo_url && (
                      <>
                        <motion.div 
                          className="flex-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" variant="outline" className="w-full">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                        <motion.div 
                          className="flex-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="sm" className="w-full">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
