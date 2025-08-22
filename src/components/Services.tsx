const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks"],
      icon: "🌐"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and reach.",
      features: ["Social Media Marketing", "Content Strategy", "PPC Campaigns", "Analytics & Reporting"],
      icon: "📊"
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity design including logos, guidelines, and visual assets.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Print Materials"],
      icon: "🎨"
    },
    {
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce platforms that drive sales and enhance user experience.",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Mobile Commerce"],
      icon: "🛒"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["Native Development", "Cross-Platform", "UI/UX Design", "App Store Optimization"],
      icon: "📱"
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting to help your business make informed decisions.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Growth Planning"],
      icon: "💡"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions tailored to your business needs, 
            from strategy to execution and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;