
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-emerald-800">
            Tentang Masjid Al Muhajirin
          </h1>
          
          <div className="grid gap-8">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-emerald-700">Sejarah Masjid</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Masjid Al Muhajirin didirikan pada tahun 2010 sebagai pusat ibadah dan kegiatan keagamaan 
                  bagi warga Perumahan Puri Husada Agung. Nama "Al Muhajirin" diambil dari kata Arab yang 
                  berarti "orang-orang yang berhijrah", melambangkan semangat para pendiri masjid yang 
                  berpindah tempat tinggal demi mencari kehidupan yang lebih baik.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Pembangunan masjid ini merupakan hasil gotong royong dan swadaya masyarakat sekitar, 
                  dengan dukungan penuh dari pengembang perumahan dan dermawan yang peduli akan pentingnya 
                  sarana ibadah di lingkungan hunian.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-emerald-700">Visi & Misi</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2 text-emerald-600">Visi</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Menjadi pusat peribadatan dan pembinaan umat yang rahmatan lil alamiin, 
                    serta mewujudkan masyarakat yang berakhlak mulia dan beriman kepada Allah SWT.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-600">Misi</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Menyelenggarakan kegiatan ibadah yang khusyu' dan berjamaah</li>
                    <li>Memberikan pendidikan agama Islam untuk semua kalangan</li>
                    <li>Membangun ukhuwah islamiyah di lingkungan perumahan</li>
                    <li>Melaksanakan kegiatan sosial dan kemasyarakatan</li>
                    <li>Menjadi pusat syiar Islam yang damai dan moderat</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-emerald-700">Fasilitas Masjid</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Ruang sholat utama kapasitas 200 jamaah</li>
                    <li>Ruang sholat wanita terpisah</li>
                    <li>Perpustakaan mini</li>
                    <li>Ruang TPQ dan kajian</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Tempat wudhu yang memadai</li>
                    <li>Area parkir yang luas</li>
                    <li>Sound system berkualitas</li>
                    <li>AC dan ventilasi yang baik</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
