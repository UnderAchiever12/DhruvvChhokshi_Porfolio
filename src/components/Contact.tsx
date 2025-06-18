
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_db313ay', // Your service ID
        'template_mzsgt2y', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Dhruvv A C',
        },
        'hIwpwo0JsM56C2jrl' // Your public key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error Sending Message",
        description: "Sorry, there was an issue sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6 bg-card border-muted">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-primary">Email</p>
                  <a 
                    href="mailto:dhruvchokshi25@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    dhruvchokshi25@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-primary">Phone</p>
                  <a 
                    href="tel:+919624258033" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-9624258033
                  </a>
                </div>
                <div>
                  <p className="font-medium text-primary">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/dhruvv-a-c-a26874281" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/dhruvv-a-c-a26874281
                  </a>
                </div>
                <div>
                  <p className="font-medium text-primary">GitHub</p>
                  <a 
                    href="https://github.com/UnderAchiever12" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/UnderAchiever12
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-muted">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                Response Time
              </h3>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to reach out via phone for immediate assistance.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card border-muted animate-slide-in">
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
