import {
	Github,
	Linkedin,
	Home,
	Book,
	Briefcase,
	GraduationCap,
	Code,
	Smartphone,
	Terminal,
} from "lucide-react";

export const DATA = {
	name: "Katherine Cundano",
	initials: "KC",
	url: "https://github.com/KatyC25",
	location: "Juigalpa, Chontales",
	locationLink: "https://www.google.com/maps/place/Juigalpa",
	description:
		"Desarrolladora Web Frontend egresada de Ingeniería de Sistemas. Especialista en React, Next.js y TypeScript. Creo soluciones escalables y experiencias de usuario excepcionales.",
	summary:
		"Desarrolladora Frontend con sólida experiencia en React y el ecosistema de Next.js. Me apasiona transformar diseños complejos en código limpio y eficiente. He liderado el desarrollo frontend en proyectos como 'Avatar CRM' y startups en Hackathons, enfocándome siempre en la calidad del código, la experiencia de usuario (UX) y el trabajo en equipo ágil.",
	avatarUrl: "/me.png",
	skills: [
		"React",
		"Next.js",
		"TypeScript",
		"Tailwind CSS",
		"Prisma",
		"PostgreSQL",
		"React Native",
		"Node.js",
		"Redux Toolkit",
		"Git",
		"Framer Motion",
	],
	contact: {
		email: "",
		tel: "",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/KatyC25",
				icon: Github,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/katherine-cundano-1b1b62377",
			},
		},
	},
	work: [
		{
			company: "Avatar CRM",
			href: "https://www.avatar-crm.com/",
			badges: [],
			location: "Remoto / Híbrido",
			title: "Desarrolladora Web Frontend",
			logoUrl: "",
			start: "Ene 2024",
			end: "Jun 2025",
			description:
				"Desarrollo de interfaces web (React) y móviles (React Native) con TypeScript. Implementación de Redux Toolkit Query para gestión de estado y consumo de APIs REST. Participación activa en escuadrones ágiles (Scrum).",
		},
	],
	education: [
		{
			school: "Universidad Nacional de Ingeniería (UNI)",
			href: "https://www.uni.edu.ni",
			degree: "Ingeniería de Sistemas",
			logoUrl: "",
			start: "2021",
			end: "2025",
		},
		{
			school: "INATEC",
			href: "https://www.tecnacional.edu.ni",
			degree: "Técnico General en Computación",
			logoUrl: "",
			start: "2019",
			end: "2020",
		},
	],
	projects: [
		{
			title: "Tienda Isela",
			href: "https://github.com/KatyC25/tienda-isela",
			dates: "2025",
			active: true,
			description:
				"Plataforma administrativa y financiera para comercio minorista. Digitalización de inventarios, facturación y análisis de rentabilidad.",
			technologies: [
				"Next.js",
				"TypeScript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/KatyC25/tienda-isela",
					icon: Github,
				},
			],
			image: "",
		},
		{
			title: "Dealsify - Hackathon 2025",
			href: "#",
			dates: "2025",
			active: true,
			description:
				"Plataforma competitiva desarrollada bajo presión en tiempo récord (Repositorio Privado).",
			technologies: ["Next.js", "React", "TailwindCSS"],
			links: [],
			image: "",
		},
		{
			title: "NicaMarket",
			href: "https://github.com/KatyC25/nica_market_frontend",
			dates: "2024",
			active: true,
			description:
				"Plataforma e-commerce centralizada para impulsar la digitalización de emprendedores nicaragüenses.",
			technologies: ["React", "Vite", "Node.js"],
			links: [
				{
					type: "Source",
					href: "https://github.com/KatyC25/nica_market_frontend",
					icon: Github,
				},
			],
			image: "",
		},
		{
			title: "Sistema CRM Avatar",
			href: "#",
			dates: "2024",
			active: true,
			description:
				"Dashboard completo para gestión de clientes con React y TypeScript.",
			technologies: ["React", "TypeScript", "Tailwind CSS"],
			links: [],
			image: "",
		},
	],
} as const;
