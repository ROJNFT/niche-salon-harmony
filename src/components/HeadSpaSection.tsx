
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeadSpaSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif mb-4">Head Spa Experience</h2>
            <p className="text-muted-foreground">
              Exclusive to our Niche Beauty Spa location, our head spa treatments offer a unique blend of relaxation and hair therapy.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
              <img 
                src="/lovable-uploads/b92d305d-bae7-4f5c-9ca0-426b2d26a14c.png" 
                alt="Head Spa Treatment" 
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Head Spa Treatment</h3>
              
              <p className="text-muted-foreground">
                Our therapeutic scalp treatments are designed to cleanse, nourish, and rejuvenate both your scalp and hair. 
                Perfect for all hair types, including those with extensions, our specialized treatments promote healthy hair 
                growth and provide deep relaxation.
              </p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li>• Therapeutic scalp cleansing and treatment</li>
                <li>• Deep conditioning and nourishment</li>
                <li>• Available for extension clients</li>
                <li>• Customized to your specific needs</li>
              </ul>
              
              <div className="flex items-center justify-between mt-6 pt-6 border-t">
                <div>
                  <p className="font-medium">Starting at $175</p>
                  <p className="text-sm text-muted-foreground">60-minute session</p>
                </div>
                
                <Link to="/scalp-spa" className="no-underline">
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
