
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

const Activities = () => {
  const regularActivities = [
    {
      title: "Sholat Berjamaah",
      time: "5 Waktu Sehari",
      description: "Sholat berjamaah untuk semua waktu sholat wajib"
    },
    {
      title: "Kajian Ba'da Maghrib",
      time: "Setiap Hari",
      description: "Kajian rutin setelah sholat maghrib dengan berbagai tema"
    },
    {
      title: "TPQ Al Muhajirin",
      time: "Senin - Jumat, 16:00-17:30",
      description: "Taman Pendidikan Al-Qur'an untuk anak-anak"
    },
    {
      title: "Kajian Ahad Pagi",
      time: "Minggu, 08:00-09:30",
      description: "Kajian khusus hari Ahad dengan tema tafsir dan hadits"
    }
  ];

  const specialActivities = [
    {
      title: "Santunan Anak Yatim",
      time: "Setiap Bulan",
      description: "Program rutin santunan untuk anak yatim di sekitar masjid"
    },
    {
      title: "Jum'at Berkah",
      time: "Jum'at Terakhir Tiap Bulan",
      description: "Pembagian makanan gratis setelah sholat Jum'at"
    },
    {
      title: "Peringatan Hari Besar Islam",
      time: "Sesuai Kalender Hijriyah",
      description: "Maulid Nabi, Isra Mi'raj, Nuzulul Quran, dan lainnya"
    },
    {
      title: "Buka Puasa Bersama",
      time: "Bulan Ramadhan",
      description: "Acara berbuka puasa bersama jamaah dan masyarakat sekitar"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-emerald-800">
            Kegiatan Masjid
          </h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-emerald-700 flex items-center gap-2">
              <Clock className="h-6 w-6" />
              Kegiatan Rutin
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regularActivities.map((activity, index) => (
                <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-emerald-700">{activity.title}</CardTitle>
                    <p className="text-emerald-600 font-medium">{activity.time}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-emerald-700 flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Kegiatan Khusus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {specialActivities.map((activity, index) => (
                <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-emerald-700">{activity.title}</CardTitle>
                    <p className="text-emerald-600 font-medium">{activity.time}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activities;
