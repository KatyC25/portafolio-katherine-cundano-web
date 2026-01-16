"use client";

import { Briefcase, GraduationCap, Code, Database, Wrench } from "lucide-react";
import { DATA } from "@/data/resume";

export default function ResumeSummary() {
	return (
		<section className="py-20 px-4 bg-white dark:bg-slate-950">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100">
					Resumen Profesional
				</h2>

				<div className="grid md:grid-cols-2 gap-8">
					<div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col gap-4">
						<div className="flex items-center gap-3 mb-2">
							<Briefcase className="w-7 h-7 text-purple-500" />
							<h3 className="text-2xl font-bold text-slate-800 dark:text-white">
								Experiencia
							</h3>
						</div>
						{DATA.work.map((job) => (
							<div key={`${job.company}-${job.start}`} className="mb-4">
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
							</div>
						))}
					</div>

					<div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col gap-4">
						<div className="flex items-center gap-3 mb-2">
							<GraduationCap className="w-7 h-7 text-rose-400" />
							<h3 className="text-2xl font-bold text-slate-800 dark:text-white">
								Educación
							</h3>
						</div>
						{DATA.education.map((edu) => (
							<div key={`${edu.school}-${edu.start}`} className="mb-4">
								<p className="font-semibold text-lg text-slate-700 dark:text-slate-200">
									{edu.degree}
								</p>
								<p className="text-rose-500 font-medium">{edu.school}</p>
								<p className="text-xs text-slate-500 mb-1">
									{edu.start} - {edu.end}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-8 mt-12">
					<div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col gap-4">
						<div className="flex items-center gap-3 mb-2">
							<Code className="w-6 h-6 text-rose-400" />
							<h4 className="text-xl font-bold text-slate-800 dark:text-white">
								Lenguajes
							</h4>
						</div>
						<div className="flex flex-wrap gap-2">
							<span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium">
								TypeScript
							</span>
							<span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium">
								JavaScript
							</span>
							<span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium">
								HTML
							</span>
							<span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium">
								CSS
							</span>
							<span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-medium">
								SQL
							</span>
						</div>
					</div>
					<div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col gap-4">
						<div className="flex items-center gap-3 mb-2">
							<Wrench className="w-6 h-6 text-purple-500" />
							<h4 className="text-xl font-bold text-slate-800 dark:text-white">
								Frameworks
							</h4>
						</div>
						<div className="flex flex-wrap gap-2">
							<span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
								React
							</span>
							<span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
								React Native
							</span>
							<span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
								Tailwind CSS
							</span>
							<span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
								Bootstrap
							</span>
						</div>
					</div>
					<div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col gap-4">
						<div className="flex items-center gap-3 mb-2">
							<Database className="w-6 h-6 text-blue-500" />
							<h4 className="text-xl font-bold text-slate-800 dark:text-white">
								Bases de Datos
							</h4>
						</div>
						<div className="flex flex-wrap gap-2">
							<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
								PostgreSQL
							</span>
							<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
								Microsoft SQL Server
							</span>
						</div>
					</div>
					<div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col gap-4">
						<div className="flex items-center gap-3 mb-2">
							<Wrench className="w-6 h-6 text-emerald-500" />
							<h4 className="text-xl font-bold text-slate-800 dark:text-white">
								Herramientas
							</h4>
						</div>
						<div className="flex flex-wrap gap-2">
							<span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
								Git
							</span>
							<span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
								Jira
							</span>
							<span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
								Microsoft Teams
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
