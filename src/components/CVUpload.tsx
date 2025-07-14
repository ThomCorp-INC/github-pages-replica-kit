
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download, FileText, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const CVUpload = () => {
  const [uploadedCV, setUploadedCV] = useState<File | null>(null);
  const [cvUrl, setCvUrl] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf" || file.name.endsWith('.pdf')) {
        setUploadedCV(file);
        const url = URL.createObjectURL(file);
        setCvUrl(url);
        localStorage.setItem('cvFile', JSON.stringify({
          name: file.name,
          url: url
        }));
        toast({
          title: "CV geüpload!",
          description: "Je CV is succesvol geüpload en kan nu gedownload worden."
        });
      } else {
        toast({
          title: "Verkeerd bestandstype",
          description: "Upload alleen PDF bestanden voor je CV.",
          variant: "destructive"
        });
      }
    }
  };

  const handleDownload = () => {
    if (cvUrl && uploadedCV) {
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = uploadedCV.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "CV gedownload!",
        description: "Je CV wordt nu gedownload."
      });
    }
  };

  const handleRemove = () => {
    setUploadedCV(null);
    setCvUrl(null);
    localStorage.removeItem('cvFile');
    toast({
      title: "CV verwijderd",
      description: "Je CV is verwijderd."
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          CV Beheer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!uploadedCV ? (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-sm text-gray-600 mb-4">Upload je CV (PDF)</p>
              <Input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="cv-upload"
              />
              <label htmlFor="cv-upload">
                <Button variant="outline" className="cursor-pointer">
                  Kies bestand
                </Button>
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">
                  {uploadedCV.name}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemove}
                className="text-red-600 hover:text-red-800"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <Button onClick={handleDownload} className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
