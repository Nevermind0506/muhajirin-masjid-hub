
import { Link } from "react-router-dom";
import { MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/45273ce9-dc46-449a-a94a-abed3f9f242e.png" 
                  alt="Logo Masjid Al Muhajirin"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Masjid Al Muhajirin</h3>
                <p className="text-emerald-200 text-sm">Puri Husada Agung</p>
              </div>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Pusat ibadah dan kegiatan keagamaan yang mengutamakan ukhuwah islamiyah 
              dan pembinaan umat yang berakhlak mulia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-emerald-200 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/about" className="text-emerald-200 hover:text-white transition-colors">Tentang Masjid</Link></li>
              <li><Link to="/activities" className="text-emerald-200 hover:text-white transition-colors">Kegiatan</Link></li>
              <li><Link to="/gallery" className="text-emerald-200 hover:text-white transition-colors">Galeri</Link></li>
              <li><Link to="/contact" className="text-emerald-200 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-emerald-300" />
                <span className="text-emerald-200 text-sm">
                  Perumahan Puri Husada Agung<br />
                  Kec. Gunung Sindur, Kab. Bogor<br />
                  Jawa Barat
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-300" />
                <span className="text-emerald-200 text-sm">dkm.almuhajirin@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-300" />
                <span className="text-emerald-200 text-sm">Buka 04:30 - 21:00</span>
              </li>
            </ul>
          </div>

          {/* Prayer Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Jadwal Hari Ini</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-emerald-200">Subuh</span>
                <span className="text-white">04:45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-200">Dzuhur</span>
                <span className="text-white">12:15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-200">Ashar</span>
                <span className="text-white">15:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-200">Maghrib</span>
                <span className="text-white">18:20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-200">Isya</span>
                <span className="text-white">19:35</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
          <p className="text-emerald-200">
            © 2024 Masjid Al Muhajirin Puri Husada Agung. Dibuat dengan ❤️ untuk kemakmuran masjid.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
