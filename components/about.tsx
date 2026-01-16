"use client";

import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";

export default function About() {
	const skills = [
		{ name: "React & TypeScript", level: 90, color: "bg-rose-500" },
		{ name: "Frontend Development", level: 85, color: "bg-purple-500" },
		{ name: "UI/UX Implementation", level: 80, color: "bg-blue-500" },
		{ name: "Mobile Development", level: 75, color: "bg-emerald-500" },
	];

	return (
		<section
			id="about"
			className="py-24 px-4 bg-white dark:bg-slate-950 overflow-hidden"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="relative order-1"
					>
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Sobre <span className="text-rose-600">mí</span>
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed">
								{DATA.summary}
							</p>
						</div>
						<div className="flex flex-wrap items-center gap-4 pt-4">
							<a
								href="/Katherine_Del_Carmen_Cundano_Morales_CV.pdf"
								download
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="rounded-full bg-linear-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white border-0">
									<Download className="w-4 h-4 mr-2" />
									Descargar CV
								</Button>
							</a>
							<div className="flex items-center text-muted-foreground">
								<MapPin className="w-4 h-4 mr-1 text-rose-500" />
								{DATA.location}
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="space-y-8 order-2"
					>
						<div className="space-y-6">
							{skills.map((skill) => (
								<div key={skill.name} className="space-y-2">
									<div className="flex justify-between items-center">
										<span className="font-semibold text-sm md:text-base">
											{skill.name}
										</span>
										<span className="text-muted-foreground text-sm">
											{skill.level}%
										</span>
									</div>
									<div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
										<motion.div
											initial={{ width: 0 }}
											whileInView={{ width: `${skill.level}%` }}
											transition={{ duration: 1 }}
											className={`h-full rounded-full ${skill.color}`}
										/>
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
