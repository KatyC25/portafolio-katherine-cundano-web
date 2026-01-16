"use client";

import { Code, Wrench, Database } from "lucide-react";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";

export default function SkillsSummary() {
	return (
		<section className="py-20 px-4 bg-white dark:bg-slate-950">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100">
					Competencias Técnicas
				</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{Array.isArray(DATA.skills) &&
						DATA.skills.map((group, idx) => (
							<motion.div
								key={group.label}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								viewport={{ once: true, amount: 0.3 }}
								className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col gap-4"
							>
								<div className="flex items-center gap-3 mb-2">
									{group.label.includes("Lenguajes") && (
										<Code className="w-6 h-6 text-rose-400" />
									)}
									{group.label.includes("Frameworks") && (
										<Wrench className="w-6 h-6 text-purple-500" />
									)}
									{group.label.includes("Bases de Datos") && (
										<Database className="w-6 h-6 text-blue-500" />
									)}
									{group.label.includes("Herramientas") && (
										<Wrench className="w-6 h-6 text-emerald-500" />
									)}
									{group.label.includes("Habilidades Blandas") && (
										<span className="w-6 h-6 rounded-full bg-linear-to-tr from-rose-400 to-purple-400 flex items-center justify-center text-white font-bold">
											😊
										</span>
									)}
									<h4 className="text-xl font-bold text-slate-800 dark:text-white">
										{group.label}
									</h4>
								</div>
								<div className="flex flex-wrap gap-2">
									{group.details.split(",").map((item) => (
										<span
											key={item.trim()}
											className={`px-3 py-1 rounded-full text-sm font-medium ${
												group.label.includes("Lenguajes")
													? "bg-rose-100 text-rose-600"
													: group.label.includes("Frameworks")
														? "bg-purple-100 text-purple-700"
														: group.label.includes("Bases de Datos")
															? "bg-blue-100 text-blue-700"
															: group.label.includes("Herramientas")
																? "bg-emerald-100 text-emerald-700"
																: "bg-slate-100 text-slate-700"
											}`}
										>
											{item.trim()}
										</span>
									))}
								</div>
							</motion.div>
						))}
				</div>
			</div>
		</section>
	);
}
