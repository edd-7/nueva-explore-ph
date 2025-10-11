import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const Visit = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Nueva Ecija, Central Luzon, Philippines",
    },
    {
      icon: Phone,
      title: "Contact",
      details: "+63 44 463 1234",
    },
    {
      icon: Mail,
      title: "Email",
      details: "tourism@nuevaecija.gov.ph",
    },
    {
      icon: Calendar,
      title: "Best Time",
      details: "November to May (Dry Season)",
    },
  ];

  return (
    <section id="visit" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Plan Your Visit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get all the information you need to make your Nueva Ecija adventure unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.title} className="text-center hover:shadow-lg transition-smooth">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm">{info.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="card-gradient max-w-3xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Getting Here</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">By Bus:</h4>
                <p>Regular bus services from Manila to Cabanatuan City (3-4 hours). Buses depart from Cubao, Pasay, and other terminals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">By Private Vehicle:</h4>
                <p>Take NLEX (North Luzon Expressway), exit at Sta. Rita, then follow the road to Nueva Ecija via Gapan.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Local Transportation:</h4>
                <p>Jeepneys, tricycles, and habal-habal (motorcycle taxis) are readily available for getting around the province.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" className="accent-glow">
                Download Travel Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Visit;
