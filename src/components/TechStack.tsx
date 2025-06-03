
import { Code, Database, Globe, Server, Smartphone, Monitor } from "lucide-react";

export const TechStack = () => {
  const technologies = [
    { name: "React", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "HTML/CSS", icon: Globe },
    { name: "Linux", icon: Monitor },
    { name: "Docker", icon: Server },
    { name: "Git", icon: Code },
    { name: "MySQL", icon: Database },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Code },
    { name: "PowerShell", icon: Monitor },
    { name: "Networking", icon: Globe }
  ];

  return (
    <section id="techstack" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Tech Stack</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <tech.icon 
                size={32} 
                className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300 mb-3" 
              />
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
