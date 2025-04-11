import { MapPin, Phone } from "lucide-react";

interface LocationCardProps {
  name: string;
  address: string;
  features: string[];
  image: string;
  phone: string;
}

export function LocationCard({ name, address, features, image, phone }: LocationCardProps) {
  // Function to create a Google Maps URL from an address
  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  return (
    <div className="location-card animate-fade-up">
      <div className="relative w-full rounded-lg mb-4 overflow-hidden bg-background shadow-md">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-auto object-contain"
          style={{ 
            maxHeight: '450px',
            imageRendering: 'crisp-edges'
          }}
          loading="eager"
        />
      </div>
      <h3 className="text-2xl font-serif mb-2">{name}</h3>
      <div className="flex items-center text-muted-foreground mb-2">
        <MapPin className="w-4 h-4 mr-2" />
        <a 
          href={getGoogleMapsUrl(address)} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm hover:text-primary-foreground hover:underline transition-colors"
        >
          {address}
        </a>
      </div>
      <div className="flex items-center text-muted-foreground mb-4">
        <Phone className="w-4 h-4 mr-2" />
        <a href={`tel:${phone}`} className="text-sm hover:text-primary-foreground transition-colors">
          {phone}
        </a>
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
