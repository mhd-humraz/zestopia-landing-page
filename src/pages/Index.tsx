import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EventsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
