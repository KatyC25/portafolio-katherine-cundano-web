"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const navLinks = [
		{ name: "Inicio", href: "#home" },
		{ name: "Sobre mí", href: "#about" },
		{ name: "Servicios", href: "#services" },
		{ name: "Portafolio", href: "#projects" },
		{ name: "Contacto", href: "#contact" },
	];

	return (
		<header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
			<div className="container mx-auto px-4 py-4">
				<nav className="flex justify-between items-center">
					<Link href="#home" className="flex items-center space-x-2 group">
						<div className="w-8 h-8 bg-linear-to-br from-rose-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
							<span className="text-white font-bold text-sm">KC</span>
						</div>
						<h1 className="text-xl font-bold bg-linear-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
							Katherine
						</h1>
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => {
							if (link.href === "#contact") {
								return (
									<button
										type="button"
										key={link.name}
										className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-transparent border-none outline-none cursor-pointer"
										onClick={() => {
											const contactSection = document.getElementById("contact");
											if (contactSection) {
												contactSection.scrollIntoView({ behavior: "smooth" });
											}
										}}
									>
										{link.name}
									</button>
								);
							}
							return (
								<Link
									key={link.name}
									href={link.href}
									className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
								>
									{link.name}
								</Link>
							);
						})}
						<Button
							className="bg-linear-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white shadow-md hover:shadow-lg transition-all"
							onClick={() => {
								const contactSection = document.getElementById("contact");
								if (contactSection) {
									contactSection.scrollIntoView({ behavior: "smooth" });
								}
							}}
						>
							Hablemos
						</Button>
					</div>

					<div className="md:hidden flex items-center gap-4">
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</Button>
					</div>
				</nav>

				{mobileMenuOpen && (
					<div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-800 animate-accordion-down">
						<div className="flex flex-col space-y-4 pt-4">
							{navLinks.map((link) => {
								if (link.href === "#contact") {
									return (
										<button
                                            type="button"
											key={link.name}
											className="text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 font-medium px-2 py-1 text-left"
											onClick={() => {
												setMobileMenuOpen(false);
												const contactSection =
													document.getElementById("contact");
												if (contactSection) {
													contactSection.scrollIntoView({ behavior: "smooth" });
												}
											}}
										>
											{link.name}
										</button>
									);
								}
								return (
									<Link
										key={link.name}
										href={link.href}
										className="text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 font-medium px-2 py-1"
										onClick={() => setMobileMenuOpen(false)}
									>
										{link.name}
									</Link>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
