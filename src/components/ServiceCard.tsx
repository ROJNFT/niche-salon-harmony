
interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  location: string;
}

export function ServiceCard({ title, description, price, image, location }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="relative h-40 w-full overflow-hidden rounded-lg mb-4">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-serif">{title}</h3>
          <span className="text-sm font-medium">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary">
          {location}
        </div>
      </div>
    </div>
  );
}
