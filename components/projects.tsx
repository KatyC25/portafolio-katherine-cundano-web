"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
	title: string;
	href: string;
	dates: string;
	active: boolean;
	description: string;
	technologies: readonly string[];
	links: readonly { type: string; href: string; icon?: React.ElementType }[];
	image: string;
};

export default function Projects() {
	const [activeFilter, setActiveFilter] = useState("all");

	const enhancedProjects = (DATA.projects as readonly Project[]).map((project) => {
		let category = "web";
		let status: string | undefined = "Completado";

		if (
			project.title.includes("Hackathon") ||
			project.title.includes("Dealsify") ||
			project.title.includes("NicaMarket")
		) {
			category = "hackathons";
		} else if (Array.isArray(project.technologies) && project.technologies.includes("React Native")) {
			category = "mobile";
		} else if (Array.isArray(project.technologies) && project.technologies.includes("PostgreSQL")) {
			category = "fullstack";
		}

		if (project.active || project.title.includes("Dealsify")) {
			status = undefined;
		}

		return { ...project, category, status };
	});

	const filteredProjects =
		activeFilter === "all"
			? enhancedProjects
			: enhancedProjects.filter((p) => p.category === activeFilter);

	const filters = [
		{ id: "all", label: "Todos" },
		{ id: "web", label: "Web" },
		{ id: "fullstack", label: "Full-Stack" },
		{ id: "mobile", label: "Mobile" },
		{ id: "hackathons", label: "Hackathons" },
	];

	return (
		<section
			id="projects"
			className="py-20 bg-slate-50 dark:bg-slate-900/50 px-4"
		>
			<div className="container mx-auto max-w-6xl">
				<motion.h2
					className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					Mi Portafolio
				</motion.h2>

				<div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-2">
					{filters.map((filter) => (
						<button
							key={filter.id}
							type="button"
							onClick={() => setActiveFilter(filter.id)}
							className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
								activeFilter === filter.id
									? "bg-linear-to-r from-rose-500 to-rose-600 text-white shadow-md"
									: "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
							}`}
						>
							{filter.label}
						</button>
					))}
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project, idx) => (
						<motion.div
							key={project.title}
							className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							viewport={{ once: true, amount: 0.2 }}
						>
							<div className="h-48 bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center overflow-hidden relative">
								<div className="absolute inset-0 bg-linear-to-br from-rose-500/20 via-purple-500/20 to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								<p className="text-slate-400 dark:text-slate-500 text-center font-medium">
									Project Preview
								</p>
							</div>

							<div className="p-6 flex flex-col grow">
								<div className="flex items-start justify-between mb-2">
									<h3 className="text-xl font-bold text-slate-800 dark:text-white">
										{project.title}
									</h3>

									<div className="flex gap-2">
										{project.links?.map((link) => (
											<Link
												key={link.type}
												href={link.href}
												target="_blank"
												className="text-slate-400 hover:text-rose-500 transition-colors"
											>
												{link.type === "Source" ? (
													<Github className="w-5 h-5" />
												) : (
													<ExternalLink className="w-5 h-5" />
												)}
											</Link>
										))}
									</div>
								</div>

								{project.status && (
									<span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 w-fit bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
										{project.status}
									</span>
								)}

								<p className="text-slate-600 dark:text-slate-400 mb-4 text-sm grow line-clamp-3">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mt-auto">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
