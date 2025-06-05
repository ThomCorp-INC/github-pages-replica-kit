
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { TechStack } from "@/components/TechStack";
import { Badges } from "@/components/Badges";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <TechStack />
        <Badges />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
