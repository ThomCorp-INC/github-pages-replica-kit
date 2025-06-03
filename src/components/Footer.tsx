import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "X" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to top button */}
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            aria-label="Terug naar boven"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-gray-600 text-center">
            Copyright © 2025 Thom van der Veen
          </p>
        </div>
      </div>
    </footer>
  );
};
