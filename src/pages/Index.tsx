import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TouristSpots from "@/components/TouristSpots";
import Delicacies from "@/components/Delicacies";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TouristSpots />
        <Delicacies />
        <Visit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
