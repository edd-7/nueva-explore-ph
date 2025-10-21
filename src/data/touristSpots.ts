import minalungaoImage from "@/assets/minalungao.jpg";
import littleViganImage from "@/assets/little-vigan1.jpg";
import dupingaRiverImage from "@/assets/dupinga-river.jpg";
import casaBatik from "@/assets/casa-batik.jpg";
import tanawanFall from "@/assets/tanawan-falls.jpg";
import calabasaRiver from "@/assets/calabasa-river.jpg";
import lakeFarm from "@/assets/lake-farm.jpg";
import farmVillaronte from "@/assets/farm-villaronte.jpg"
import campParaiso from "@/assets/camp-paraiso.jpg";

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
    description: " In Little Vigan, you can see Spanish-era houses and different food stalls that promotes different foods from Nueva Ecija. You can also visit the Gapan Plaza and the Gapan Night Market that has a very attractive lights and design every Christmas season",
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
    description: "Dupinga River entices you with its pure water and cozy picnic spots. Visiting these places at the same time means experiencing culture and tranquility in one go. Dupinga River Little Vigan and Dupinga River are two impressive places of Nueva Ecija that display not only the past but also the beauty of nature!",
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
    description: "Casa Batik is a center of the artistic talents and is a perfect example of the local people’s creative abilities as they make their own handcrafted products. Guests can get familiarized with the entire basic fabric manufacturing process — from fabric dyeing to pattern making. What’s more, this is a very good way to promote Filipino talent and the usage of eco-friendly fashion, thus becoming a nice place for students and art lovers alike to visit.",
    shortdescription:"Casa Batik is a creative place where visitors can see how batik fabrics are made and colored by hand.",
    services: ["Art Gallery", "Workshop Classes", "Gift Shop", "Cultural Events"],
    activities: ["Batik-making Lessons", "Gallery Tours", "Buying Handmade Products", "Cultural Learning", "Photography"],
    location: {
      lat: 15.5234,
      lng: 120.8567,
      address: "Cabanatuan City, Nueva Ecija",
    },
    image: casaBatik,
  },
  {
    id: 5,
    name: "Tanawan Falls (Laur)",
    description: "Tanawan Falls is a hidden jewel of the forest that is located in Laur. The cold and loud fall makes it a place that is suitable for leaving the business of the city behind. With tall trees and the sound of nature all around, the waterfall provides a very peaceful for resting and nature photography. Tanawan Falls is a lovely sight that brings visitors its calm water and untouched nature. The very name of the falls gives out a tropical-like atmosphere, which is a lovely retreat for visitors loving forest and a little bit of adventure. One can also go swimming, photographing, and taking the beauty of the nature around there.",
    shortdescription: "Tanawan Falls is a cool and quiet waterfall surrounded by trees and rocks. The water is clean and fresh.",
    services: ["Entrance Fee Collection", "Basic Facilities", "Parking Area"],
    activities: ["Swimming", "Trekking", "Photography", "Nature Observation", "Camping"],
    location: {
      lat: 15.5845,
      lng: 121.1234,
      address: "Laur, Nueva Ecija",
    },
    image: tanawanFall,
  },
  {
    id: 6,
    name: "Calabasa River",
    description: "Calabasa River is a heaven for people who love rivers and would like to visit at a quiet time when the river is at its most serene and the water is clean and inviting. Both the local residents and foreign guests are allowed to release their stress harmlessly, having fun using canoes or simply enjoy the beautiful and peaceful nature around them. It’s a river that makes everyone think back to that little joy of life through bonding with nature.",
    shortdescription: "Calabasa River us a calm and clean river where people enjoy swimming and fishing. It's perfect for nature lovers.",
    services: ["Picnic Spots", "Food Vendors", "Parking", "Restrooms"],
    activities: ["Swimming", "Picnicking", "Photography", "Kayaking", "Fishing"],
    location: {
      lat: 15.4789,
      lng: 120.9567,
      address: "Bongabon, Nueva Ecija",
    },
    image: calabasaRiver,
  },
  {
    id: 7,
    name: "Lake Farm de La Marre Agri-Tourism Park",
    description: " Lake Farm is a sustainable farm that offers a combination of relaxation, education, and nature. The farm features a beautiful landscape, garden, and ample space that are perfect for family outings. It also promotes sustainable farming and provides hands-on experience for the rural lifestyle in a fun and educational way. ",
    shortdescription: "An agri-tourism destination featuring a scenic lake surrounded by farmlands. Offers farm activities, fishing, and agricultural tours.",
    services: ["Farm Tours", "Restaurant", "Boat Rental", "Fishing Equipment Rental", "Guided Educational Tours"],
    activities: ["Fishing", "Boat Riding", "Farm Tours", "Dining", "Nature Walks", "Photography"],
    location: {
      lat: 15.796111,
      lng: 121.177722,
      address: "Pantabangan, Nueva Ecija",
    },
    image: lakeFarm,
  },
  {
    id: 9,
    name: "Farm Villaronte",
    description: "Farm Villaronte is a farm that has an emphasis on community support, agriculture, and the production of organic food. Visitors can walk through the green lands, have a chat with farmers, and breathe the fresh air of the countryside. Nature and people’s determination to work hard for the community are the sources of its vitality represented in this farm.",
    shortdescription: "Farm Villaronte is apeaceful farm where visitors can learn about planting and caring for animals.",
    services: ["Farm Tours", "Local Product Store", "Training Area for Students"],
    activities: ["Farming Lessons", "Harvesting", "Animal Feeding", "Nature Walks"],
    location: {
      lat: 15.5345,
      lng: 120.8678,
      address: "Cabanatuan City, Nueva Ecija",
    },
    image: farmVillaronte,
  },
  {
    id: 10,
    name: "Camp Paraiso",
    description: "Camp Paraiso is indeed a “paradise” for nature fans and camping enthusiasts as its name suggests. With the cold spring pool, mountain scenery, and green surrounding, it’s a great spot for family bonding, thrill-seeking, and soul-searching. Visitors can enjoy letting off steam by swimming or hiking or simply spending their time in the lap of Mother Nature. ",
    shortdescription: "An outdoor adventure camp offering various activities for thrill-seekers and nature lovers. Features camping facilities, adventure courses, and team-building activities. The camp is set in a natural environment with forest trails and open spaces. Perfect for group events, retreats, and outdoor adventures.", 
    services: ["Camping Facilities", "Adventure Equipment", "Function Halls", "Food Services"],
    activities: ["Camping", "Zip-lining", "Wall Climbing", "Team Building", "Nature Trekking"],
    location: {
      lat: 15.5567,
      lng: 121.0234,
      address: "General Natividad, Nueva Ecija",
    },
    image: campParaiso,
  },
];
