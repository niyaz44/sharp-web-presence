import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      "Web Development",
      "Digital Marketing", 
      "Brand Identity",
      "E-commerce",
      "Mobile Apps",
      "Consulting"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Portfolio",
      "Blog",
      "Contact"
    ],
    Resources: [
      "Case Studies",
      "Documentation",
      "Support",
      "Privacy Policy",
      "Terms of Service",
      "FAQ"
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "GitHub", icon: "👨‍💻", url: "#" },
  ];

  return (
    <footer className="border-t border-border/30 bg-card/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="text-xl font-bold text-primary">
                APEX<span className="text-foreground">Studio</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Creating digital solutions that drive impact and help businesses 
              thrive in the modern world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} APEX Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;