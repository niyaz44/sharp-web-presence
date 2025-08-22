import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-primary">APEX Studio</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a creative digital agency passionate about transforming ideas into 
                powerful digital experiences that drive real business results.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team combines strategic thinking with cutting-edge technology to deliver 
                solutions that not only look beautiful but also perform exceptionally. 
                From web development to digital marketing, we're your partners in growth.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every project is an opportunity to push boundaries and exceed expectations. 
                We believe in the power of collaboration and innovation to create digital 
                experiences that leave lasting impressions.
              </p>
            </div>

            <Button variant="cta" size="lg" className="mt-8">
              Learn More About Us
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;