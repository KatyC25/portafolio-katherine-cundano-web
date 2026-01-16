"use client";

import { Code, Database, Wrench, Users } from "lucide-react";
import { JSX } from "react";

export default function Services() {
	const colorMap = {
		rose: "from-rose-500 to-rose-600",
		purple: "from-purple-500 to-purple-600",
		blue: "from-blue-500 to-blue-600",
		emerald: "from-emerald-500 to-emerald-600",
	};

	type ServiceColor = keyof typeof colorMap;

	const services: {
		icon: JSX.Element;
		title: string;
		description: string;
		color: ServiceColor;
	}[] = [
		{
			icon: <Code className="w-8 h-8" />,
			title: "Desarrollo Web Frontend",
			description:
				"Interfaces web modernas y responsivas construidas con React, Next.js y TypeScript.",
			color: "rose",
		},
		{
			icon: <Database className="w-8 h-8" />,
			title: "Integración de APIs",
			description:
				"Conexión eficiente con servicios backend y consumo de APIs REST con Redux Toolkit.",
			color: "purple",
		},
		{
			icon: <Wrench className="w-8 h-8" />,
			title: "Aplicaciones Móviles",
			description:
				"Desarrollo de apps nativas para iOS y Android utilizando React Native.",
			color: "blue",
		},
		{
			icon: <Users className="w-8 h-8" />,
			title: "Metodología Ágil",
			description:
				"Experiencia trabajando en equipos colaborativos bajo metodología Scrum.",
			color: "emerald",
		},
	];

	return (
		<section id="services" className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-4xl font-bold mb-12 text-center text-slate-800 dark:text-slate-100">
					Mis Servicios
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service) => (
						<div
							key={service.title}
							className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-rose-500/50"
						>
							<div
								className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[service.color]} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
							>
								{service.icon}
							</div>

							<h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
								{service.title}
							</h3>
							<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
