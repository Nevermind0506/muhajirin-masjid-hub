import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.9)), url('https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1920&h=1080&fit=crop')`,
				}}
			/>

			{/* Content */}
			<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
				<div className="animate-fade-in">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						مرحباً بكم
					</h1>
					<h2 className="text-2xl md:text-4xl font-semibold mb-4">
						Selamat Datang di Masjid Al Muhajirin
					</h2>
					<p className="text-xl md:text-2xl mb-8 text-emerald-100">
						Perumahan Puri Husada Agung, Gunung Sindur
					</p>

					{/* Quranic Quote */}
					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
						<p className="text-lg md:text-xl font-medium mb-2 text-right">
							وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا
						</p>
						<p className="text-emerald-200 italic">
							"Dan barangsiapa memeliharanya, maka seolah-olah dia telah
							memelihara kehidupan manusia semuanya"
						</p>
						<p className="text-emerald-300 text-sm mt-2">- Al-Ma'idah: 32</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Button
							size="lg"
							className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg font-semibold transition-all hover:scale-105"
						>
							Lihat Jadwal Sholat
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-3 text-lg font-semibold transition-all hover:scale-105"
						>
							Donasi Sekarang
						</Button>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<ArrowDown className="h-6 w-6 text-white/80" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
