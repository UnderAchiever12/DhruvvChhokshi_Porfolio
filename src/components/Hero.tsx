
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-foreground mb-6">
              Hi, I'm{" "}
              <span className="text-primary">Dhruvv Chhokshi</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Full Stack Developer | Content Creator | Curious Coder
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
              With 2 years of experience in web development, I love coding clean, efficient solutions and sharing my journey with others through creative content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="btn-secondary"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-secondary to-muted overflow-hidden border-8 border-card shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                  alt="Dhruvv Chhokshi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-30 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
