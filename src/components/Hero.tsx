import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export const Hero = () => {
  console.log("Hero component rendering");
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const baseUrl = window.location.origin;
    const cvUrl = `${baseUrl}/CV-Thom-van-der-Veen.pdf`;
    
    // Download het bestand direct
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-Thom-van-der-Veen.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "CV gedownload!",
      description: "Je CV wordt nu gedownload."
    });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-400 mb-6 tracking-tight">
          THOM<br />
          VAN<br />
          DER<br />
          VEEN
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-600 mb-8 font-medium">
          Student aan Hogeschool Utrecht
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
            onClick={() => scrollToSection('contact')}
          >
            Contact opnemen
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-all"
            onClick={handleDownloadCV}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </button>
    </section>
  );
};
