import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Upload, X, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface BadgeData {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  color: string;
}

interface BadgeManagerProps {
  badges: BadgeData[];
  onBadgesChange: (badges: BadgeData[]) => void;
}

export const BadgeManager = ({ badges, onBadgesChange }: BadgeManagerProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingBadge, setEditingBadge] = useState<BadgeData | null>(null);
  const [newBadge, setNewBadge] = useState({
    title: "",
    description: "",
    imageUrl: "",
    color: "bg-blue-500"
  });
  const { toast } = useToast();

  const colorOptions = [
    { value: "bg-blue-500", label: "Blauw" },
    { value: "bg-green-500", label: "Groen" },
    { value: "bg-purple-500", label: "Paars" },
    { value: "bg-red-500", label: "Rood" },
    { value: "bg-orange-500", label: "Oranje" },
    { value: "bg-yellow-500", label: "Geel" },
    { value: "bg-pink-500", label: "Roze" },
    { value: "bg-indigo-500", label: "Indigo" }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewBadge(prev => ({
          ...prev,
          imageUrl: event.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBadge = () => {
    if (!newBadge.title.trim()) {
      toast({
        title: "Fout",
        description: "Voer een titel in voor de badge.",
        variant: "destructive"
      });
      return;
    }

    const badge: BadgeData = {
      id: Date.now().toString(),
      title: newBadge.title,
      description: newBadge.description,
      imageUrl: newBadge.imageUrl,
      color: newBadge.color
    };

    onBadgesChange([...badges, badge]);
    setNewBadge({
      title: "",
      description: "",
      imageUrl: "",
      color: "bg-blue-500"
    });
    setIsAdding(false);
    
    toast({
      title: "Badge toegevoegd!",
      description: "De nieuwe badge is succesvol toegevoegd."
    });
  };

  const handleEditBadge = (badge: BadgeData) => {
    setEditingBadge(badge);
    setNewBadge({
      title: badge.title,
      description: badge.description,
      imageUrl: badge.imageUrl || "",
      color: badge.color
    });
  };

  const handleUpdateBadge = () => {
    if (!editingBadge || !newBadge.title.trim()) {
      toast({
        title: "Fout",
        description: "Voer een titel in voor de badge.",
        variant: "destructive"
      });
      return;
    }

    const updatedBadge: BadgeData = {
      ...editingBadge,
      title: newBadge.title,
      description: newBadge.description,
      imageUrl: newBadge.imageUrl,
      color: newBadge.color
    };

    const updatedBadges = badges.map(badge => 
      badge.id === editingBadge.id ? updatedBadge : badge
    );

    onBadgesChange(updatedBadges);
    setEditingBadge(null);
    setNewBadge({
      title: "",
      description: "",
      imageUrl: "",
      color: "bg-blue-500"
    });
    
    toast({
      title: "Badge bijgewerkt!",
      description: "De badge is succesvol bijgewerkt."
    });
  };

  const handleCancelEdit = () => {
    setEditingBadge(null);
    setIsAdding(false);
    setNewBadge({
      title: "",
      description: "",
      imageUrl: "",
      color: "bg-blue-500"
    });
  };

  const handleRemoveBadge = (id: string) => {
    onBadgesChange(badges.filter(badge => badge.id !== id));
    toast({
      title: "Badge verwijderd",
      description: "De badge is succesvol verwijderd."
    });
  };

  return (
    <div className="container mx-auto max-w-6xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-foreground">Badge Beheer</h1>
        <Button onClick={() => setIsAdding(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nieuwe Badge
        </Button>
      </div>

      {(isAdding || editingBadge) && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{editingBadge ? "Badge Bewerken" : "Nieuwe Badge Toevoegen"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Titel</label>
              <Input
                value={newBadge.title}
                onChange={(e) => setNewBadge(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Badge titel"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Beschrijving</label>
              <Textarea
                value={newBadge.description}
                onChange={(e) => setNewBadge(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Badge beschrijving"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Badge Afbeelding</label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="badge-image"
                />
                <label
                  htmlFor="badge-image"
                  className="flex items-center gap-2 px-4 py-2 border border-input rounded-md cursor-pointer hover:bg-accent"
                >
                  <Upload className="w-4 h-4" />
                  Afbeelding Uploaden
                </label>
                {newBadge.imageUrl && (
                  <div className="flex items-center gap-2">
                    <img src={newBadge.imageUrl} alt="Preview" className="w-12 h-12 object-cover rounded" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setNewBadge(prev => ({ ...prev, imageUrl: "" }))}
                    >
                      Verwijderen
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Kleur</label>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setNewBadge(prev => ({ ...prev, color: color.value }))}
                    className={`w-8 h-8 rounded-full ${color.value} ${
                      newBadge.color === color.value ? 'ring-2 ring-primary ring-offset-2' : ''
                    }`}
                    title={color.label}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              {editingBadge ? (
                <>
                  <Button onClick={handleUpdateBadge}>Bijwerken</Button>
                  <Button variant="outline" onClick={handleCancelEdit}>Annuleren</Button>
                </>
              ) : (
                <>
                  <Button onClick={handleAddBadge}>Toevoegen</Button>
                  <Button variant="outline" onClick={handleCancelEdit}>Annuleren</Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {badges.map((badge) => (
          <Card key={badge.id} className="relative">
            <div className="absolute top-2 right-2 flex gap-1">
              <Button
                variant="outline"
                size="sm"
                className="p-1 h-auto"
                onClick={() => handleEditBadge(badge)}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="p-1 h-auto"
                onClick={() => handleRemoveBadge(badge.id)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 ${badge.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {badge.imageUrl ? (
                    <img src={badge.imageUrl} alt={badge.title} className="w-12 h-12 object-cover rounded" />
                  ) : (
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-700">BADGE</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{badge.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{badge.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {badges.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nog geen badges toegevoegd. Klik op "Nieuwe Badge" om te beginnen.</p>
        </div>
      )}
    </div>
  );
};