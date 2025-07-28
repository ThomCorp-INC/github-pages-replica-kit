
export const Education = () => {
  const educationItems = [
    {
      institution: "Hogeschool Utrecht",
      program: "Cloud & Cyber Security",
      period: "September 2025 - Heden",
      description: "Het beroep van Cyber Security & Cloud Engineer is een belangrijke pijler voor de toekomst. Met de toenemende afhankelijkheid van IT en de groeiende dreiging van digitale bedreigingen, groeit de vraag naar specialisten in dit vakgebied op HBO-niveau. CITA-bedrijven bieden daarom directe werkgelegenheid en de mogelijkheid om je kennis te verdiepen en uit te breiden via de duale HBO-opleiding Cyber Security & Cloud van Hogeschool Utrecht. Dit is een unieke kans om je HBO-diploma te behalen terwijl je deel uitmaakt van een geweldig team."
    },
    {
      institution: "ROC van Flevoland",
      program: "Expert IT systems and devices",
      period: "augustus 2023 - Juli 2025",
      description: "Als expert IT systems & devices zorg jij ervoor dat je collega's gebruik kunnen maken van internet, e-mail, telefoon en het interne netwerk. Je houdt je vooral bezig met het onderhoud, het beheer en de beveiliging van kleine tot middelgrote netwerken. Daarvoor gebruik je allerlei protocollen, besturingssystemen en andere software. Jij bewaakt het netwerk (dus ook intranet en internet) bijvoorbeeld tegen virussen en aanvallen van hackers. Dat doe je zelfstandig of in een team. Ook blijf je op de hoogte van nieuwe producten op netwerkgebied. Je praat veel met collega's over hoe je het netwerk veilig en werkend kunt houden. Als er een probleem is, los jij het op. Je probeert dan te voorkomen dat het nog eens gebeurt."
    },
    {
      institution: "Helen Parkhurst",
      program: "Student van een HAVO/MAVO techniek opleiding",
      period: "Augustus 2019 - juni 2023",
      description: "Helen Parkhurst is een officiële Technasium school. Naast de reguliere havo- en vwo-klassen heeft Helen Parkhurst technasiumklassen voor havo- en vwo- leerlingen. Het technasiumonderwijs is bestemd voor havo- en vwo- leerlingen met interesse voor de toepassing van exacte en creatieve vakken in de praktijk."
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Opleiding</h2>
        
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-8 py-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.institution}</h3>
                  <h4 className="text-lg text-blue-600 font-medium">{item.program}</h4>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">{item.period}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
