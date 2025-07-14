
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formspreeUrl = "https://formspree.io/f/mbjnooor";
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Bericht verzonden!",
          description: "Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op."
        });
        setFormData({ email: "", message: "" });
      } else {
        throw new Error("Er ging iets mis bij het verzenden");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: "Er ging iets mis",
        description: "Het bericht kon niet worden verzonden. Probeer het later opnieuw.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Kom in contact</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Jouw Email-adres
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Jouw Email-adres"
              required
              className="w-full"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Jouw Bericht
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Jouw Bericht"
              rows={6}
              required
              className="w-full"
              disabled={isSubmitting}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Bezig met verzenden..." : "Stuur"}
          </Button>
        </form>
      </div>
    </section>
  );
};
