
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUp } from "lucide-react";

const RecentNews = () => {
  const news = [
    {
      title: "Pelaksanaan Sholat Idul Fitri 1445H",
      date: "20 Desember 2024",
      excerpt: "Sholat Idul Fitri akan dilaksanakan di halaman masjid pada pukul 07:00 WITA. Panitia mengundang seluruh jamaah dan masyarakat sekitar.",
      category: "Pengumuman"
    },
    {
      title: "Program Santunan Anak Yatim Bulan Ini",
      date: "15 Desember 2024",
      excerpt: "Alhamdulillah, program santunan anak yatim bulan Desember berhasil menyalurkan bantuan kepada 25 anak yatim di sekitar masjid.",
      category: "Kegiatan Sosial"
    },
    {
      title: "Kajian Spesial: Hikmah Bulan Muharram",
      date: "10 Desember 2024",
      excerpt: "Ustadz Ahmad Fauzi akan mengisi kajian spesial membahas hikmah dan keutamaan bulan Muharram dalam Islam.",
      category: "Kajian"
    },
    {
      title: "Renovasi Ruang Wudhu Selesai",
      date: "5 Desember 2024",
      excerpt: "Renovasi ruang wudhu telah selesai dilaksanakan. Terima kasih kepada semua pihak yang telah berpartisipasi dalam pembangunan.",
      category: "Fasilitas"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Pengumuman": "bg-red-100 text-red-800",
      "Kegiatan Sosial": "bg-blue-100 text-blue-800",
      "Kajian": "bg-emerald-100 text-emerald-800",
      "Fasilitas": "bg-purple-100 text-purple-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            Berita & Pengumuman
          </h2>
          <p className="text-emerald-600 text-lg max-w-2xl mx-auto">
            Ikuti perkembangan terbaru kegiatan dan pengumuman penting dari masjid
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {news.map((item, index) => (
            <Card 
              key={index} 
              className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-emerald-800 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{item.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white group-hover:scale-105 transition-all"
                >
                  Baca Selengkapnya
                  <ArrowUp className="h-4 w-4 ml-1 rotate-45" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg" 
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3"
          >
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
