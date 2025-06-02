
export const Skills = () => {
  const skillCategories = [
    {
      title: "Technische Vaardigheden",
      skills: [
        "Werkt met Linux / command line",
        "Bekend met virtualisatie (VMs, containers)",
        "Werkt met PowerShell en automatisering",
        "Flexibel in nieuwe situaties",
        "Werkt netjes en gestructureerd"
      ]
    },
    {
      title: "Persoonlijke Eigenschappen",
      skills: [
        "Probleemoplossend",
        "Oplossingsgericht",
        "Leergierig",
        "Creatief",
        "Communicatief"
      ]
    },
    {
      title: "Talen",
      skills: [
        "Vloeiend Nederlands (schriftelijk en mondeling)",
        "Goede beheersing van Engels",
        "Gemiddeld in Packet tracer"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Vaardigheden</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
