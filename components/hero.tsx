"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
	Github,
	Linkedin,
	Code,
	Smartphone,
	Star,
	ArrowDown,
} from "lucide-react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative py-20 px-4 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
		>
			<div className="absolute top-20 right-10 w-64 h-64 bg-rose-200 dark:bg-rose-900/20 rounded-full opacity-60 blur-3xl"></div>
			<div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full opacity-60 blur-3xl"></div>

			<div className="container mx-auto max-w-6xl relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="space-y-8"
					>
						<div className="space-y-4">
							<p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
								Hola, soy Katherine Cundano
							</p>
							<h1 className="text-5xl lg:text-7xl font-bold text-slate-800 dark:text-slate-100 leading-tight">
								Desarrolladora
								<br />
								<span className="bg-linear-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
									Frontend
								</span>
							</h1>
							<p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-lg">
								{DATA.description}
							</p>
						</div>

						<div className="flex items-center space-x-2">
							<div className="flex space-x-1">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>
							<span className="text-slate-600 dark:text-slate-400 font-medium text-sm">
								+1 año de experiencia
							</span>
						</div>

						<div className="flex flex-wrap gap-4">
							<Button
								className="bg-linear-to-r from-rose-500 to-purple-500 dark:from-purple-700 dark:to-rose-700 hover:from-rose-600 hover:to-purple-600 dark:hover:from-purple-800 dark:hover:to-rose-800 text-white dark:text-slate-100 px-8 py-6 text-lg rounded-xl shadow-lg shadow-rose-500/20 transition-all hover:scale-105"
								onClick={() => {
									const contactSection = document.getElementById("contact");
									if (contactSection) {
										contactSection.scrollIntoView({ behavior: "smooth" });
									}
								}}
							>
								Contactar
							</Button>
							<Link href="#projects">
								<Button
									variant="outline"
									className="border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-6 text-lg bg-transparent rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
								>
									Ver Portafolio <ArrowDown className="ml-2 w-4 h-4" />
								</Button>
							</Link>
						</div>

						<div className="flex space-x-4 pt-4">
							<Link href={DATA.contact.social.GitHub.url} target="_blank">
								<Button
									variant="outline"
									size="lg"
									className="gap-2 rounded-full border-slate-300 dark:border-slate-700 hover:border-rose-500 hover:text-rose-500 dark:text-slate-300 transition-colors"
								>
									<Github className="w-5 h-5" /> GitHub
								</Button>
							</Link>
							<Link href={DATA.contact.social.LinkedIn.url} target="_blank">
								<Button
									variant="outline"
									size="lg"
									className="gap-2 rounded-full border-slate-300 dark:border-slate-700 hover:border-blue-600 hover:text-blue-600 dark:text-slate-300 transition-colors"
								>
									<Linkedin className="w-5 h-5" /> LinkedIn
								</Button>
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="relative flex justify-center items-center w-full"
					>
						<div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center mx-auto">
							<div className="absolute inset-0 bg-linear-to-br from-rose-500 via-purple-500 to-blue-500 rounded-full animate-pulse opacity-20 blur-2xl"></div>

							<div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center z-10">
								<img
									src="/fotoPerfil.jpeg"
									alt="Katherine"
									className="w-full h-full object-cover object-center"
								/>
							</div>

							<div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce z-20">
								<Code className="w-8 h-8 text-rose-500" />
							</div>
							<div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce [animation-delay:1.5s] z-20">
								<Smartphone className="w-8 h-8 text-purple-500" />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
