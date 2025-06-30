import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	const navLinks = [
		{ name: "Beranda", path: "/" },
		{ name: "Tentang", path: "/about" },
		{ name: "Kegiatan", path: "/activities" },
		{ name: "Galeri", path: "/gallery" },
		{ name: "Kontak", path: "/contact" },
	];

	return (
		<nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-3">
						<div className="w-12 h-12 flex items-center justify-center">
							<img
								src="/lovable-uploads/45273ce9-dc46-449a-a94a-abed3f9f242e.png"
								alt="Logo Masjid Al Muhajirin"
								className="w-full h-full object-contain"
							/>
						</div>
						<div>
							<h1 className="text-xl font-bold text-emerald-800">
								Masjid Al Muhajirin
							</h1>
							<p className="text-xs text-emerald-600">Puri Husada Agung</p>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`font-medium transition-colors ${
									isActive(link.path)
										? "text-emerald-700 border-b-2 border-emerald-700"
										: "text-gray-700 hover:text-emerald-600"
								}`}
							>
								{link.name}
							</Link>
						))}
						<Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
							Donasi
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<Menu className="h-6 w-6 text-emerald-700" />
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden pb-4">
						<div className="flex flex-col space-y-2">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`py-2 px-4 rounded-lg font-medium transition-colors ${
										isActive(link.path)
											? "bg-emerald-100 text-emerald-700"
											: "text-gray-700 hover:bg-emerald-50"
									}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{link.name}
								</Link>
							))}
							<Button className="mt-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
								Donasi
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
