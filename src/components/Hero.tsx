import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Main Heading */}
        <div className="space-y-6 mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-foreground">Digital Solutions</span>
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              that Drive Impact
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in crafting unique digital experiences 
            that help businesses grow and stand out in their industries.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            Connect With Us
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
            What is APEX?
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-16 w-6 h-6 bg-primary-glow rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary rounded-full animate-pulse opacity-50" style={{ animationDelay: '2.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;