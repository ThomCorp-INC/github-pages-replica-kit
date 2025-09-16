
import { useState, useEffect } from "react";
import { BadgeData } from "@/components/BadgeManager";

export const Badges = () => {
  const [badges, setBadges] = useState<BadgeData[]>([]);

  useEffect(() => {
    const savedBadges = localStorage.getItem('portfolio-badges');
    if (savedBadges) {
      try {
        setBadges(JSON.parse(savedBadges));
      } catch (error) {
        console.error('Error loading badges:', error);
      }
    }
  }, []);

  return (
    <section id="badges" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Badges & Certificeringen</h2>
        
        {badges.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Geen badges beschikbaar.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {badges.map((badge) => (
              <div key={badge.id} className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 ${badge.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {badge.imageUrl ? (
                    <img src={badge.imageUrl} alt={badge.title} className="w-12 h-12 object-cover rounded" />
                  ) : (
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-700">BADGE</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{badge.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
