
import React from 'react';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    // In a real app, this would send the form data to a server
    toast({
      title: "Message sent",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };
  
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle -z-10 opacity-70" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-1/4 right-[10%] w-64 h-64 rounded-full bg-art-accent/5 blur-[120px] -z-10" />
      <div className="absolute top-1/3 left-[10%] w-80 h-80 rounded-full bg-art-accent/5 blur-[100px] -z-10" />
      
      <div className="layout-container">
        <div className="max-w-lg mx-auto text-center mb-16">
          <span className="font-mono text-art-accent text-sm tracking-wider">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mt-2 mb-4">
            Let's Collaborate
          </h2>
          <div className="w-16 h-[1px] bg-art-black/20 mx-auto mb-4" />
          <p className="text-art-dark-gray/80 text-pretty">
            Whether you're interested in purchasing artwork, commissioning a piece, or discussing a collaboration, I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md shadow-sm rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-art-dark-gray mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-art-light-gray/80 focus:border-art-accent focus:ring-1 focus:ring-art-accent bg-white/50 backdrop-blur-sm transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-art-dark-gray mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-art-light-gray/80 focus:border-art-accent focus:ring-1 focus:ring-art-accent bg-white/50 backdrop-blur-sm transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-art-dark-gray mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-art-light-gray/80 focus:border-art-accent focus:ring-1 focus:ring-art-accent bg-white/50 backdrop-blur-sm transition-all duration-300"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-art-dark-gray mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-art-light-gray/80 focus:border-art-accent focus:ring-1 focus:ring-art-accent bg-white/50 backdrop-blur-sm transition-all duration-300 resize-none"
                  placeholder="Tell me more about your inquiry..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-art-dark-gray text-white hover:bg-art-black transition-colors duration-500 font-medium inline-block"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left">
            <div>
              <h3 className="font-serif text-xl font-medium mb-2">Email</h3>
              <p className="text-art-dark-gray/80">artist@example.com</p>
            </div>
            
            <div className="hidden md:block w-[1px] h-16 bg-art-black/10"></div>
            
            <div>
              <h3 className="font-serif text-xl font-medium mb-2">Studio</h3>
              <p className="text-art-dark-gray/80">By appointment only</p>
            </div>
            
            <div className="hidden md:block w-[1px] h-16 bg-art-black/10"></div>
            
            <div>
              <h3 className="font-serif text-xl font-medium mb-2">Social</h3>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                <a href="#" className="text-art-dark-gray/70 hover:text-art-black transition-colors duration-300">
                  Instagram
                </a>
                <a href="#" className="text-art-dark-gray/70 hover:text-art-black transition-colors duration-300">
                  Behance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
