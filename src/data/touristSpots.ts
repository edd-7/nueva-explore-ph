import minalungaoImage from "@/assets/minalungao.jpg";
import littleViganImage from "@/assets/little-vigan.jpg";
import dupingaRiverImage from "@/assets/dupinga-river.jpg";

export interface TouristSpot {
  id: number;
  name: string;
  description: string;
  shortdescription: string;
  services: string[];
  activities: string[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  image: string;
}

export const touristSpots: TouristSpot[] = [
  {
    id: 1,
    name: "Minalungao National Park",
    description: "Minalungao National Park is a one-of-a-kind natural marvel popular for its clean green river enclosed with towering limestone cliffs. If you are a fan of swimming, bamboo rafting, and cliff-jumping, then this place is just made for you. The quiet loveliness of the site really makes people feel at home with nature.",
    shortdescription: "Minalungao National Park is famous for its green river and tall limestone rocks. The place is full of natural beauty and fresh air.",
    services: ["Guided Tours", "Life Jacket Rental", "Cottage Rental", "Food Stalls"],
    activities: ["Swimming", "Kayaking", "Bamboo Rafting", "Photography", "Cliff Diving", "Nature Hiking"],
    location: {
      lat: 15.5167,
      lng: 121.0833,
      address: "General Tinio, Nueva Ecija",
    },
    image: minalungaoImage,
  },
  {
    id: 2,
    name: "Little Vigan",
    description: "A charming heritage village that recreates the Spanish colonial atmosphere of Vigan City. Featuring beautifully preserved architecture, cobblestone streets, and traditional Filipino culture. This cultural attraction showcases ancestral houses and provides a glimpse into Philippine colonial history.",
    shortdescription: "A charming heritage village that recreates the Spanish colonial atmosphere of Vigan City. ",
    services: ["Cultural Tours", "Souvenir Shops", "Traditional Restaurants", "Photo Sessions"],
    activities: ["Heritage Tours", "Cultural Shows", "Shopping", "Photography", "Kalesa Rides"],
    location: {
      lat: 15.5789,
      lng: 120.8956,
      address: "Cabanatuan City, Nueva Ecija",
    },
    image: littleViganImage,
  },
  {
    id: 3,
    name: "Dupinga River",
    description: "A pristine river known for its crystal-clear waters and tranquil atmosphere. Perfect for family picnics and river activities. The shallow areas make it ideal for children, while deeper sections offer swimming opportunities for adults. Surrounded by lush vegetation and natural beauty.",
    shortdescription: "Dupinga River is known for its clear water and peaceful scenery.",
    services: ["Cottage Rental", "Swimming Area", "Parking", "Restrooms", "Guided Tours", "Food Stalls"],
    activities: ["Swimming", "Picnicking", "River Tubing", "Photography", "Family Bonding"],
    location: {
      lat: 15.4523,
      lng: 120.9234,
      address: "Gabaldon, Nueva Ecija",
    },
    image: dupingaRiverImage,
  },
  {
    id: 4,
    name: "Casa Batik",
    description: "An art and culture center showcasing traditional batik-making techniques and Filipino artistry. This heritage house serves as a gallery and workshop where visitors can learn about indigenous textile arts. Features exhibitions of local crafts and handmade products.",
    shortdescription:"Casa Batik is a creative place where visitors can see how batik fabrics are made and colored by hand.",
    services: ["Art Gallery", "Workshop Classes", "Gift Shop", "Cultural Events"],
    activities: ["Batik-making Lessons", "Gallery Tours", "Buying Handmade Products", "Cultural Learning", "Photography"],
    location: {
      lat: 15.5234,
      lng: 120.8567,
      address: "Cabanatuan City, Nueva Ecija",
    },
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Tanawan Falls (Laur)",
    description: "A hidden gem waterfall nestled in the mountains of Laur. The multi-tiered cascades create natural pools perfect for swimming. Surrounded by dense forest and accessible through a scenic trek. The area offers a serene environment away from city crowds.",
    shortdescription: "Tanawan Falls is a cool and quiet waterfall surrounded by trees and rocks. The water is clean and fresh.",
    services: ["Entrance Fee Collection", "Basic Facilities", "Parking Area"],
    activities: ["Swimming", "Trekking", "Photography", "Nature Observation", "Camping"],
    location: {
      lat: 15.5845,
      lng: 121.1234,
      address: "Laur, Nueva Ecija",
    },
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Calabasa River",
    description: "A serene river destination known for its calm waters and natural beauty. The river features sandy shores and clear water ideal for swimming and relaxation. Popular among locals for weekend getaways and family outings. Offers peaceful surroundings perfect for unwinding.",
    shortdescription: "Calabasa River us a calm and clean river where people enjoy swimming and fishing. It's perfect for nature lovers.",
    services: ["Picnic Spots", "Food Vendors", "Parking", "Restrooms"],
    activities: ["Swimming", "Picnicking", "Photography", "Kayaking", "Fishing"],
    location: {
      lat: 15.4789,
      lng: 120.9567,
      address: "Bongabon, Nueva Ecija",
    },
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Lake Farm Agri",
    description: "An agri-tourism destination featuring a scenic lake surrounded by farmlands. Offers farm activities, fishing, and agricultural tours. Visitors can experience rural life and learn about sustainable farming practices. The farm-to-table restaurant serves fresh produce grown on-site.",
    shortdescription: "An agri-tourism destination featuring a scenic lake surrounded by farmlands. Offers farm activities, fishing, and agricultural tours.",
    services: ["Farm Tours", "Restaurant", "Boat Rental", "Fishing Equipment Rental", "Guided Educational Tours"],
    activities: ["Fishing", "Boat Riding", "Farm Tours", "Dining", "Nature Walks", "Photography"],
    location: {
      lat: 15.796111,
      lng: 121.177722,
      address: "Pantabangan, Nueva Ecija",
    },
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "St. Nicholas of Tolentine Parish Cathedral (Cabanatuan Cathedral)",
    description: "A picturesque waterfall with crystal-clear waters cascading into natural pools. The falls are surrounded by tropical vegetation creating a refreshing oasis. Popular for swimming and nature photography. The area features multiple pools at different levels suitable for all ages.",
    shortdescription: "The Cabanatuan Cathedral is one of the most important churches in the city. It is known for its faith, beauty, and history",
    services: ["Church Services", "Confession Rooms", "Nearby Souvenir Stores"],
    activities: ["Praying", "Attending Mass", "Sightseeing"],
    location: {
      lat: 15.4956,
      lng: 121.0456,
      address: "Burgos Avenue, Cabanatuan City, Nueva Ecija",
    },
    image: "/placeholder.svg",
  },
  {
    id: 9,
    name: "Farm Villaronte",
    description: "A family-owned farm offering agri-tourism experiences and fresh farm products. Features organic farming practices and educational tours about agriculture. Visitors can participate in harvesting activities and enjoy farm-fresh meals. The farm promotes sustainable living and eco-tourism.",
    shortdescription: "Farm Villaronte is apeaceful farm where visitors can learn about planting and caring for animals.",
    services: ["Farm Tours", "Local Product Store", "Training Area for Students"],
    activities: ["Farming Lessons", "Harvesting", "Animal Feeding", "Nature Walks"],
    location: {
      lat: 15.5345,
      lng: 120.8678,
      address: "Cabanatuan City, Nueva Ecija",
    },
    image: "/placeholder.svg",
  },
  {
    id: 10,
    name: "Camp Paraiso",
    description: "An outdoor adventure camp offering various activities for thrill-seekers and nature lovers. Features camping facilities, adventure courses, and team-building activities. The camp is set in a natural environment with forest trails and open spaces. Perfect for group events, retreats, and outdoor adventures.",
    shortdescription: "", 
    services: ["Camping Facilities", "Adventure Equipment", "Function Halls", "Food Services"],
    activities: ["Camping", "Zip-lining", "Wall Climbing", "Team Building", "Nature Trekking"],
    location: {
      lat: 15.5567,
      lng: 121.0234,
      address: "General Natividad, Nueva Ecija",
    },
    image: "/placeholder.svg",
  },
];
