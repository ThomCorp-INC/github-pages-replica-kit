import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BadgeManager as BadgeManagerComponent, BadgeData } from "@/components/BadgeManager";

const BadgeManager = () => {
  const [badges, setBadges] = useState<BadgeData[]>([]);

  // Load badges from localStorage on component mount
  useEffect(() => {
    const savedBadges = localStorage.getItem('portfolio-badges');
    if (savedBadges) {
      try {
        setBadges(JSON.parse(savedBadges));
      } catch (error) {
        console.error('Error loading badges from localStorage:', error);
        // Initialize with default badges if loading fails
        setDefaultBadges();
      }
    } else {
      // Initialize with default badges
      setDefaultBadges();
    }
  }, []);

  const setDefaultBadges = () => {
    const defaultBadges: BadgeData[] = [
      {
        id: "1",
        title: "Networking Basics",
        description: "Deze badge krijg je nadat je de eindtoets van Networking basics hebt afgerond op Cisco Skills for all",
        color: "bg-blue-500"
      },
      {
        id: "2",
        title: "Networking Devices And Initial Configuration",
        description: "Deze badge krijg je nadat je de eindtoets van Networking Devices And Initial Configuration hebt afgerond op Cisco Skills for all",
        color: "bg-blue-500"
      },
      {
        id: "3",
        title: "Network Support and Security",
        description: "Deze badge krijg je nadat je de eindtoets van Network support and security hebt afgerond op Cisco Skills for all",
        color: "bg-blue-500"
      },
      {
        id: "4",
        title: "Introduction to Cybersecurity",
        description: "Deze badge krijg je nadat je de eindtoets van Introduction to Cybersecurity hebt afgerond op Cisco Skills for all",
        color: "bg-green-500"
      }
    ];
    setBadges(defaultBadges);
    localStorage.setItem('portfolio-badges', JSON.stringify(defaultBadges));
  };

  // Save badges to localStorage whenever badges change
  const handleBadgesChange = (updatedBadges: BadgeData[]) => {
    setBadges(updatedBadges);
    localStorage.setItem('portfolio-badges', JSON.stringify(updatedBadges));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <BadgeManagerComponent badges={badges} onBadgesChange={handleBadgesChange} />
      </main>
      <Footer />
    </div>
  );
};

export default BadgeManager;