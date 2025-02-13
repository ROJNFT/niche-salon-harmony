
import { MapPin } from "lucide-react";

interface LocationCardProps {
  name: string;
  address: string;
  features: string[];
  image: string;
}

export function LocationCard({ name, address, features, image }: LocationCardProps) {
  return (
    <div className="location-card animate-fade-up">
      <div className="relative h-64 w-full overflow-hidden rounded-lg mb-4">
        <img src={image} alt={name} className="object-contain w-full h-full" />
      </div>
      <h3 className="text-2xl font-serif mb-2">{name}</h3>
      <div className="flex items-center text-muted-foreground mb-4">
        <MapPin className="w-4 h-4 mr-2" />
        <span className="text-sm">{address}</span>
      </div>
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-primary mr-2" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
