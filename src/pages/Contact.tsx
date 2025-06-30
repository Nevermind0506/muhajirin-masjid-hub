import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
			<Navbar />
			<div className="container mx-auto px-4 py-16">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl font-bold text-center mb-12 text-emerald-800">
						Kontak & Lokasi
					</h1>

					<div className="grid lg:grid-cols-2 gap-8">
						<Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="text-emerald-700 flex items-center gap-2">
									<MapPin className="h-5 w-5" />
									Alamat & Lokasi
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<p className="text-gray-700 mb-2">
										<strong>Alamat Lengkap:</strong>
										<br />
										Masjid Al Muhajirin
										<br />
										Perumahan Puri Husada Agung
										<br />
										Jl. Perumahan Puri Husada Agung
										<br />
										Kecamatan Gunung Sindur
										<br />
										Kabupaten Bogor.
									</p>
								</div>

								<div className="bg-emerald-50 p-4 rounded-lg">
									<h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
										<Clock className="h-4 w-4" />
										Jam Operasional
									</h3>
									<ul className="text-sm text-gray-700 space-y-1">
										<li>Senin - Minggu: 04:30 - 21:00</li>
										<li>Kantor DKM: 08:00 - 16:00</li>
										<li>TPQ: Senin - Jumat, 16:00 - 17:30</li>
									</ul>
								</div>

								<div className="space-y-2">
									<h3 className="font-semibold text-emerald-800 flex items-center gap-2">
										<Mail className="h-4 w-4" />
										Kontak DKM
									</h3>
									<p className="text-gray-700">WhatsApp: 0812-3456-7890</p>
									<p className="text-gray-700">
										Email: dkm.almuhajirin@gmail.com
									</p>
								</div>

								<Button className="w-full bg-emerald-600 hover:bg-emerald-700">
									Hubungi Kami via WhatsApp
								</Button>
							</CardContent>
						</Card>

						<Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="text-emerald-700">Peta Lokasi</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
									<div className="text-center text-gray-500">
										<MapPin className="h-12 w-12 mx-auto mb-2" />
										<p>Google Maps akan ditampilkan di sini</p>
										<p className="text-sm">Koordinat: -5.1234, 119.4567</p>
									</div>
								</div>
								<p className="text-sm text-gray-600 mt-4">
									* Masjid berada di dalam kompleks Perumahan Puri Husada Agung,
									mudah diakses dari jalan utama Tamalanrea.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
