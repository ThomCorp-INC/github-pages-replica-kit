
import { CVUpload } from "@/components/CVUpload";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CVManager = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar portfolio
          </Button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CV Beheer</h1>
          <p className="text-gray-600">
            Upload hier je CV zodat bezoekers het kunnen downloaden via de "Download CV" knop op je portfolio.
          </p>
        </div>
        
        <CVUpload />
      </div>
    </div>
  );
};

export default CVManager;
