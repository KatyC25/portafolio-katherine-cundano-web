"use client";

import { DATA } from "@/data/resume";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
	const certifications = [
		"PCAP: Programming Essentials in Python - Cisco (2026)",
		"JSE: Programming Essentials in JavaScript - Cisco (2026)",
		"Excel Financiero - INATEC (2025)",
		"Excel Avanzado - INATEC (2023)",
		"Desarrollo de Proyectos Tecnológicos - CI Nicaragua (2023)",
		"Programa Red Mente en Acción - Mujeres en STEM (2021)",
	];

	return (
		<section id="education" className="py-20 px-4 bg-white dark:bg-slate-950">
			<div className="container mx-auto max-w-6xl">
				<motion.h2
					className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					Formación y Certificaciones
				</motion.h2>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					{DATA.education.map((edu) => {
						const isCurrent =
							edu.end?.toLowerCase() === "actual" ||
							edu.end?.toLowerCase() === "presente";

						return (
							<motion.div
								key={`${edu.degree}-${edu.school}`}
								className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-rose-200 transition-colors flex gap-4 items-start"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true, amount: 0.2 }}
							>
								<div className="shrink-0">
									<GraduationCap
										className={`w-10 h-10 ${
											isCurrent ? "text-rose-400" : "text-purple-400"
										}`}
									/>
								</div>

								<div>
									<h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">
										{edu.degree}
									</h3>
									<p className="text-rose-500 font-medium mb-2">{edu.school}</p>
									<p className="text-slate-600 dark:text-slate-400">
										<span className="font-medium bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-sm">
											{isCurrent ? "En curso" : "Finalizado"}
										</span>
										<span className="mx-2">•</span>
										{edu.start} - {edu.end}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					className="bg-linear-to-br from-rose-50 dark:from-rose-900/20 to-purple-50 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">
						Certificaciones y Cursos
					</h3>

					<div className="grid md:grid-cols-2 gap-6">
						{certifications.map((cert) => (
							<motion.div
								key={cert}
								className="flex items-start gap-3"
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true, amount: 0.2 }}
							>
								<div className="w-2 h-2 rounded-full bg-rose-500 mt-2.5 shrink-0 shadow-lg shadow-rose-500/50" />
								<p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
									{cert}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
