
import Hero from "@/components/sections/Hero";
import PrayerTimes from "@/components/sections/PrayerTimes";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import QuickDonation from "@/components/sections/QuickDonation";
import RecentNews from "@/components/sections/RecentNews";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      <Navbar />
      <Hero />
      <PrayerTimes />
      <UpcomingEvents />
      <QuickDonation />
      <RecentNews />
      <Footer />
    </div>
  );
};

export default Index;
