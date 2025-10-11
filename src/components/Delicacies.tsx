import { Card, CardContent } from "@/components/ui/card";
import delicaciesImage from "@/assets/delicacies.jpg";
import { UtensilsCrossed } from "lucide-react";

const Delicacies = () => {
  const delicacies = [
    {
      name: "Longganisang Cabanatuan",
      description: "Famous garlicky sausage with a perfect blend of sweet and savory flavors, a Nueva Ecija signature dish",
    },
    {
      name: "Chicharon Bulaklak",
      description: "Crispy deep-fried pork intestines, a popular beer companion and street food favorite",
    },
    {
      name: "Tupig",
      description: "Sweet glutinous rice cake wrapped in banana leaves and grilled to perfection",
    },
    {
      name: "Buko Pie",
      description: "Creamy young coconut filling in flaky pastry crust, a perfect dessert treat",
    },
    {
      name: "Puto at Kutsinta",
      description: "Traditional steamed rice cakes in white and brown varieties, often enjoyed with grated coconut",
    },
    {
      name: "Lechon Kawali",
      description: "Crispy pan-fried pork belly with tender meat inside, served with liver sauce",
    },
  ];

  return (
    <section id="delicacies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Local Delicacies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Savor the authentic flavors of Nueva Ecija through our traditional dishes and treats
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={delicaciesImage}
              alt="Traditional Nueva Ecija delicacies"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/10 p-3 rounded-full">
                <UtensilsCrossed className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold">Taste of Nueva Ecija</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nueva Ecija's culinary heritage reflects the province's agricultural abundance and cultural diversity. 
              From savory meat dishes to sweet rice cakes, every delicacy tells a story of tradition passed down 
              through generations. These authentic flavors are an essential part of the Nueva Ecija experience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {delicacies.map((item) => (
            <Card key={item.name} className="card-gradient hover:shadow-xl transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{item.name}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delicacies;
