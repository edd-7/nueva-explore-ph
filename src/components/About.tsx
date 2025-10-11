import { Leaf, Mountain, Utensils } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Mountain,
      title: "Natural Wonders",
      description: "Explore stunning limestone formations, crystal-clear rivers, and majestic waterfalls",
    },
    {
      icon: Leaf,
      title: "Rice Granary",
      description: "Known as the Rice Bowl of the Philippines with vast golden rice fields",
    },
    {
      icon: Utensils,
      title: "Culinary Heritage",
      description: "Savor authentic Nueva Ecija delicacies and traditional Filipino cuisine",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Welcome to Nueva Ecija
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nueva Ecija is a landlocked province in Central Luzon, Philippines, blessed with abundant natural beauty, 
            rich agricultural heritage, and warm Filipino hospitality. From the iconic Minalungao National Park 
            to charming heritage sites, Nueva Ecija offers unforgettable experiences for every traveler.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-gradient p-8 rounded-2xl shadow-lg hover:shadow-xl transition-smooth text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
