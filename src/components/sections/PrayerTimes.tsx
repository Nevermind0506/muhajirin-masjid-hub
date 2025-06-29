
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

const PrayerTimes = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPrayer, setNextPrayer] = useState("");

  const prayerTimes = [
    { name: "Subuh", time: "04:45", icon: "🌅" },
    { name: "Dzuhur", time: "12:15", icon: "☀️" },
    { name: "Ashar", time: "15:30", icon: "🌤️" },
    { name: "Maghrib", time: "18:20", icon: "🌅" },
    { name: "Isya", time: "19:35", icon: "🌙" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Simple logic to determine next prayer
    if (currentHour < 4 || (currentHour === 4 && currentMinute < 45)) {
      setNextPrayer("Subuh");
    } else if (currentHour < 12 || (currentHour === 12 && currentMinute < 15)) {
      setNextPrayer("Dzuhur");
    } else if (currentHour < 15 || (currentHour === 15 && currentMinute < 30)) {
      setNextPrayer("Ashar");
    } else if (currentHour < 18 || (currentHour === 18 && currentMinute < 20)) {
      setNextPrayer("Maghrib");
    } else if (currentHour < 19 || (currentHour === 19 && currentMinute < 35)) {
      setNextPrayer("Isya");
    } else {
      setNextPrayer("Subuh");
    }
  }, [currentTime]);

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            Jadwal Sholat Hari Ini
          </h2>
          <p className="text-emerald-600 text-lg">
            {currentTime.toLocaleDateString('id-ID', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className="text-2xl font-bold text-emerald-700 mt-2">
            {currentTime.toLocaleTimeString('id-ID')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white mb-6">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Sholat Selanjutnya</h3>
              <p className="text-3xl font-bold">{nextPrayer}</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {prayerTimes.map((prayer, index) => (
              <Card 
                key={index} 
                className={`shadow-lg border-0 transition-all hover:shadow-xl hover:scale-105 ${
                  prayer.name === nextPrayer 
                    ? 'bg-emerald-100 border-2 border-emerald-500' 
                    : 'bg-white/80 backdrop-blur-sm'
                }`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-center">
                    <div className="text-2xl mb-2">{prayer.icon}</div>
                    <div className="text-emerald-800 text-lg">{prayer.name}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-emerald-700">
                      <Clock className="h-4 w-4" />
                      <span className="font-bold text-lg">{prayer.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;
