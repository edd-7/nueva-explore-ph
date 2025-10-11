import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TouristSpot } from "@/data/touristSpots";
import { MapPin, Activity, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TouristSpotModalProps {
  spot: TouristSpot | null;
  isOpen: boolean;
  onClose: () => void;
}

const TouristSpotModal = ({ spot, isOpen, onClose }: TouristSpotModalProps) => {
  if (!spot) return null;

  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${spot.location.lat},${spot.location.lng}&zoom=15`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">{spot.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <img
              src={spot.image}
              alt={spot.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3">About</h3>
            <p className="text-muted-foreground leading-relaxed">{spot.description}</p>
          </div>

          {/* Activities */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-secondary" />
              <h3 className="text-xl font-semibold">Activities</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {spot.activities.map((activity) => (
                <Badge key={activity} variant="secondary" className="px-3 py-1">
                  {activity}
                </Badge>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-semibold">Services Offered</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {spot.services.map((service) => (
                <Badge key={service} variant="outline" className="px-3 py-1">
                  {service}
                </Badge>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <p className="text-muted-foreground mb-4">{spot.location.address}</p>
            
            {/* Google Maps Embed */}
            <div className="w-full h-80 rounded-lg overflow-hidden border-2 border-border">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${spot.name}`}
              ></iframe>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TouristSpotModal;
