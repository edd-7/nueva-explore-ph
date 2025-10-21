import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import delicaciesImage from "@/assets/delicacies.jpg";
import {Utensils, UtensilsCrossed, X, Drumstick, CakeSlice, PiggyBank, Cookie, Croissant} from "lucide-react";
import longganisa from "@/assets/delicacies/longganisa.jpg";
import chicharonBulaklak from "@/assets/delicacies/chicharon-bulaklak.jpg";
import tupig from "@/assets/delicacies/tupig.jpg";
import bukoPie from "@/assets/delicacies/buko-pie.jpg";
import puto from "@/assets/delicacies/puto.jpg";
import lechonKawali from "@/assets/delicacies/lechon-kawali.jpg";
import chicharon from "@/assets/delicacies/chicharon.jpg";
import tupig2 from "@/assets/delicacies/2pig.jpg";
import pie2 from "@/assets/delicacies/pie2.jpg";
import puto2 from "@/assets/delicacies/puto2.jpg";
import lechon2 from "@/assets/delicacies/lechon2.jpg";

const Delicacies = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const delicacies = [
  {
    name: "Longganisang Cabanatuan",
    description: "Famous garlicky sausage with a perfect blend of sweet and savory flavors, a Nueva Ecija signature dish",
    image: longganisa,
    icon: PiggyBank
  },
  {
    name: "Chicharon Bulaklak",
    description: "Crispy deep-fried pork intestines, a popular beer companion and street food favorite",
    image: chicharon,
    image2: chicharonBulaklak,
    icon: PiggyBank
  },
  {
    name: "Tupig",
    description: "Sweet glutinous rice cake wrapped in banana leaves and grilled to perfection",
    image: tupig,
    image2: tupig2,
    icon: Croissant
  },
  {
    name: "Buko Pie",
    description: "Creamy young coconut filling in flaky pastry crust, a perfect dessert treat",
    image: bukoPie,
    image2: pie2,
    icon: CakeSlice
  },
  {
    name: "Puto at Kutsinta",
    description: "Traditional steamed rice cakes in white and brown varieties, often enjoyed with grated coconut",
    image: puto,
    image2: puto2,
    icon: Cookie
  },
  {
    name: "Lechon Kawali",
    description: "Crispy pan-fried pork belly with tender meat inside, served with liver sauce",
    image: lechonKawali,
    image2: lechon2,
    icon: Utensils
  },
];


  return (
    <section id="delicacies" className="py-20 bg-muted/30 relative">
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
          <Card key={item.name} className="card-gradient hover:shadow-xl transition-all duration-300 ease-in-out">
          <CardContent className="p-0">
            {item.image2 ? (
              <div className="grid grid-cols-2 gap-2 p-4">
                {[item.image, item.image2].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${item.name} ${idx + 1}`}
                    className="w-full h-60 object-cover rounded-md cursor-pointer hover:opacity-80 transition"
                    onClick={() => setModalImage(img)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover rounded-md cursor-pointer hover:opacity-80 transition"
                  onClick={() => setModalImage(item.image)}
                />
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                <item.icon className="w-5 h-5 text-accent" />
                {item.name}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </CardContent>
          </Card>
        ))}
      </div>

      </div>

      {/* Modal for full-screen image */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2"
              onClick={() => setModalImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={modalImage}
              alt="Full view"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Delicacies;
