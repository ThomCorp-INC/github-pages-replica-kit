
export const Badges = () => {
  const badges = [
    {
      title: "Networking Basics",
      description: "Deze badge krijg je nadat je de eindtoets van Networking basics hebt afgerond op Cisco Skills for all",
      color: "bg-blue-500"
    },
    {
      title: "Networking Devices And Initial Configuration",
      description: "Deze badge krijg je nadat je de eindtoets van Networking Devices And Initial Configuration hebt afgerond op Cisco Skills for all",
      color: "bg-blue-500"
    },
    {
      title: "Network Support and Security",
      description: "Deze badge krijg je nadat je de eindtoets van Network support and security hebt afgerond op Cisco Skills for all",
      color: "bg-blue-500"
    },
    {
      title: "Introduction to Cybersecurity",
      description: "Deze badge krijg je nadat je de eindtoets van Introduction to Cybersecurity hebt afgerond op Cisco Skills for all",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="badges" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Cisco Badges</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className={`w-16 h-16 ${badge.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-700">CISCO</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
