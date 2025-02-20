
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function EstheticianSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif mb-4">Esthetician Services</h2>
            <p className="text-muted-foreground">
              Our skilled estheticians at Niche Beauty Lounge provide a range of specialized skincare treatments.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
              <img 
                src="/lovable-uploads/99c706fc-1025-4d8e-adee-606c08313fac.png" 
                alt="Esthetician Services" 
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Professional Skincare</h3>
              
              <p className="text-muted-foreground">
                Experience personalized skincare treatments designed to enhance your natural beauty and promote 
                healthy, glowing skin. Our estheticians combine expertise with premium products to deliver 
                exceptional results.
              </p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li>• Customized facial treatments</li>
                <li>• Professional skin analysis</li>
                <li>• Advanced skincare techniques</li>
                <li>• Relaxing spa environment</li>
              </ul>
              
              <div className="flex items-center justify-between mt-6 pt-6 border-t">
                <div>
                  <p className="font-medium">Services from $85</p>
                  <p className="text-sm text-muted-foreground">Various treatment options</p>
                </div>
                
                <Link to="/esthetician" className="no-underline">
                  <Button 
                    variant="outline" 
                    className="transition-colors duration-200 border-primary/20 hover:bg-primary/10 hover:text-primary-foreground active:bg-primary/20"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
