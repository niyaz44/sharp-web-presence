const ClientLogos = () => {
  // Sample client logos (in a real project, these would be actual client logos)
  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateX", logo: "IX" },
    { name: "DigitalFlow", logo: "DF" },
    { name: "FutureSync", logo: "FS" },
    { name: "CloudVision", logo: "CV" },
    { name: "DataPrime", logo: "DP" },
    { name: "NeoSoft", logo: "NS" },
    { name: "Quantum", logo: "Q" },
  ];

  return (
    <section className="py-16 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Trusted by leading companies worldwide
        </p>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-muted/20 rounded-lg flex items-center justify-center border border-border/30 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                <span className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Animated line */}
        <div className="mt-16 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;