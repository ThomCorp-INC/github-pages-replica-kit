
export const Experience = () => {
  const experiences = [
    {
      company: "Work in progress",
      position: "Work in progress",
      description: "Work in progress"
    },
    {
      company: "Rohaka Management & Support B.V.",
      position: "ICT Stagair",
      description: "Als stagair bij Rohaka werk je aan systeembeheer, van hardware-installatie tot 1e-lijns support. Je beheert netwerken, applicaties en security. Je doet waardevolle praktijkervaring op in een dynamische omgeving met ruimte voor ontwikkeling, eigen inbreng en het uitwerken van schoolopdrachten onder professionele begeleiding."
    },
    {
      company: "Albert Heijn",
      position: "Vakkenvuller",
      description: "Als Vulploegmedewerker bij Albert Heijn help je bij het lossen van de vrachtwagens en vul je de schappen. Ook ben je verantwoordelijk voor het aanvullen van onze schappen en het op orde houden van de winkel. Je leert al snel dat spiegelen niks met een spiegel te maken heeft en je zorgt ervoor dat onze klanten altijd snel vinden waar ze naar op zoek zijn. Dit doe je samen met een gezellig team van collega's."
    },
    {
      company: "Spotta",
      position: "Folderbezorger",
      description: "Als bezorger van Spotta bezorg je wekelijks brievenbusreclame zoals folderpakketten, huis-aan-huiskranten, losse folders en samples."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Ervaring</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h3>
              <h4 className="text-lg text-blue-600 font-medium mb-4">{exp.position}</h4>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
