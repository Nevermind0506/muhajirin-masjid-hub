
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      title: "Sholat Id di Masjid",
      category: "Ibadah",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop"
    },
    {
      title: "Kajian Ba'da Maghrib",
      category: "Kajian",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=500&h=300&fit=crop"
    },
    {
      title: "TPQ Anak-anak",
      category: "Pendidikan",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop"
    },
    {
      title: "Santunan Yatim",
      category: "Sosial",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop"
    },
    {
      title: "Buka Puasa Bersama",
      category: "Ramadhan",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop"
    },
    {
      title: "Peringatan Maulid",
      category: "Peringatan",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=500&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-emerald-800">
            Galeri Kegiatan
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
