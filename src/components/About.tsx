
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", 
    "Express.js", "MongoDB", "Firebase", "AWS EC2"
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a dedicated full-stack developer with a passion for creating clean, efficient, and user-friendly web applications. My journey in tech began during my B.Tech in ICT at DA-IICT, where I discovered my love for problem-solving through code.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Over the past 2 years, I've gained valuable experience working with modern technologies and frameworks, from building responsive frontends with React to developing robust backends with Node.js and managing data with MongoDB and Firebase.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, I enjoy creating content to share my learnings with the developer community and mentoring aspiring developers on their coding journey.
            </p>
          </div>

          <div className="space-y-8 animate-slide-in">
            <Card className="p-6 bg-background border-muted">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-medium text-primary">B.Tech in ICT</p>
                <p className="text-muted-foreground">DA-IICT • Graduated 2024</p>
              </div>
            </Card>

            <Card className="p-6 bg-background border-muted">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-primary">Technical Expert</p>
                  <p className="text-sm text-muted-foreground">Grras IT Solutions • Mentoring in Full Stack Dev</p>
                </div>
                <div>
                  <p className="font-medium text-primary">Software Intern</p>
                  <p className="text-sm text-muted-foreground">Infixzon Pvt. Ltd. • Node.js + Firebase + AWS EC2</p>
                </div>
                <div>
                  <p className="font-medium text-primary">Freelancer</p>
                  <p className="text-sm text-muted-foreground">Ongoing web development projects</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background border-muted">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
