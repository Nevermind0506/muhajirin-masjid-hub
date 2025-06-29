
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Kajian Rutin Ba'da Maghrib",
      date: "Setiap Hari",
      time: "18:30 - 19:20",
      location: "Ruang Utama Masjid",
      description: "Kajian harian dengan tema yang bervariasi",
      highlight: true
    },
    {
      title: "TPQ Al Muhajirin",
      date: "Senin - Jumat",
      time: "16:00 - 17:30",
      location: "Ruang Belajar",
      description: "Taman Pendidikan Al-Qur'an untuk anak-anak"
    },
    {
      title: "Santunan Anak Yatim",
      date: "28 Desember 2024",
      time: "08:00 - 11:00",
      location: "Halaman Masjid",
      description: "Program bulanan santunan untuk anak yatim"
    },
    {
      title: "Kajian Ahad Pagi",
      date: "Setiap Minggu",
      time: "08:00 - 09:30",
      location: "Ruang Utama Masjid",
      description: "Kajian khusus hari Ahad dengan tema tafsir"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            Kegiatan Mendatang
          </h2>
          <p className="text-emerald-600 text-lg max-w-2xl mx-auto">
            Ikuti berbagai kegiatan keagamaan dan sosial yang rutin diselenggarakan di masjid
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className={`shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${
                event.highlight 
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white' 
                  : 'bg-white/80 backdrop-blur-sm'
              }`}
            >
              <CardHeader>
                <CardTitle className={`${event.highlight ? 'text-white' : 'text-emerald-800'}`}>
                  {event.title}
                  {event.highlight && (
                    <span className="ml-2 text-xs bg-yellow-400 text-emerald-800 px-2 py-1 rounded-full">
                      Populer
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className={`flex items-center gap-2 ${event.highlight ? 'text-emerald-100' : 'text-emerald-700'}`}>
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className={`flex items-center gap-2 ${event.highlight ? 'text-emerald-100' : 'text-emerald-700'}`}>
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className={`flex items-center gap-2 ${event.highlight ? 'text-emerald-100' : 'text-emerald-700'}`}>
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className={`${event.highlight ? 'text-emerald-50' : 'text-gray-700'} leading-relaxed`}>
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3"
          >
            Lihat Semua Kegiatan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
