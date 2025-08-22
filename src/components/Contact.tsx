import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "hello@apexstudio.com",
      link: "mailto:hello@apexstudio.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      label: "Location",
      value: "New York, NY 10001",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Let's Work <span className="text-primary">Together</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your digital presence? Let's discuss your project 
                and create something amazing together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border/30">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Project Type</label>
                <select className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300">
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Brand Identity</option>
                  <option>E-commerce</option>
                  <option>Mobile App</option>
                  <option>Consulting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <Button variant="cta" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;