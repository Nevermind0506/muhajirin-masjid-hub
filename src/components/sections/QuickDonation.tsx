
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuickDonation = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Infaq & Sedekah
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Berpartisipasilah dalam kemakmuran masjid dan kegiatan sosial dengan berinfaq. 
            Setiap kebaikan yang Anda berikan akan menjadi investasi akhirat.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle>Operasional Masjid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-100">
                  Listrik, air, kebersihan, dan perawatan fasilitas masjid
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle>Kegiatan Sosial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-100">
                  Santunan yatim, jum'at berkah, dan program kemasyarakatan
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle>Pengembangan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-100">
                  Renovasi, penambahan fasilitas, dan peningkatan kualitas masjid
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Cara Berdonasi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-emerald-800 font-bold">QRIS</span>
                </div>
                <p className="text-emerald-100">Scan QRIS di atas untuk donasi via e-wallet</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transfer Bank</h4>
                <div className="text-left space-y-2 text-emerald-100">
                  <p><strong>Bank Syariah Indonesia (BSI)</strong></p>
                  <p>No. Rek: 1234567890</p>
                  <p>a.n: DKM Masjid Al Muhajirin</p>
                  <p className="text-sm">*Konfirmasi via WA: 0812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg font-semibold"
          >
            Konfirmasi Donasi
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickDonation;
