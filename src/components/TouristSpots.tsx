import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronRight } from "lucide-react";
import { touristSpots } from "@/data/touristSpots";
import TouristSpotModal from "./TouristSpotModal";
import type { TouristSpot } from "@/data/touristSpots";

const TouristSpots = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<TouristSpot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedSpots = showAll ? touristSpots : touristSpots.slice(0, 6);

  const handleSpotClick = (spot: TouristSpot) => {
    setSelectedSpot(spot);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="tourist-spots" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Tourist Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover breathtaking natural wonders and cultural treasures across Nueva Ecija
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedSpots.map((spot) => (
              <Card
                key={spot.id}
                className="group overflow-hidden cursor-pointer transition-smooth hover:shadow-2xl hover:-translate-y-2"
                onClick={() => handleSpotClick(spot)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold mb-2">{spot.name}</h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {spot.location.address}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {spot.shortdescription}
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-smooth">
                    View Details
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {!showAll && (
            <div className="text-center mt-12">
              <Button
                size="lg"
                onClick={() => setShowAll(true)}
                className="accent-glow px-8"
              >
                View More Tourist Spots
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <TouristSpotModal
        spot={selectedSpot}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default TouristSpots;
