"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";

export default function ExperienceSummary() {
	return (
		<section className="py-20 px-4 bg-white dark:bg-slate-950">
			<div className="container mx-auto max-w-6xl">
				<motion.h2
					className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					Experiencia Laboral
				</motion.h2>

				<motion.div
					className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col gap-4 mx-auto max-w-2xl"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<div className="flex items-center gap-3 mb-2">
						<Briefcase className="w-7 h-7 text-purple-500" />
						<h3 className="text-2xl font-bold text-slate-800 dark:text-white">
							Experiencia
						</h3>
					</div>
					{DATA.work.map((job, idx) => (
						<motion.div
							key={`${job.company}-${job.start}`}
							className="mb-4"
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
							viewport={{ once: true, amount: 0.3 }}
						>
							<p className="font-semibold text-lg text-slate-700 dark:text-slate-200">
								{job.title}
							</p>
							<p className="text-purple-600 font-medium">{job.company}</p>
							<p className="text-xs text-slate-500 mb-1">
								{job.start} - {job.end}
							</p>
							<p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
								{job.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
