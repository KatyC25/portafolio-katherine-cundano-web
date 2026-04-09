import { Github } from "lucide-react";

export const DATA = {
	name: "Katherine Cundano",
	initials: "KC",
	url: "https://github.com/KatyC25",
	location: "Managua, Nicaragua",
	locationLink: "https://www.google.com/maps/place/Managua",
	description:
		"Desarrolladora Full Stack Junior egresada de Ingeniería en Sistemas, enfocada en construir aplicaciones web modernas, escalables y eficientes.",
	summary:
		"Desarrolladora Full Stack Junior egresada de Ingeniería en Sistemas, con experiencia en desarrollo de aplicaciones web modernas utilizando React, Next.js y TypeScript, así como en la construcción de APIs y manejo de bases de datos con PostgreSQL y Prisma. He desarrollado soluciones completas que integran frontend y backend, enfocadas en escalabilidad y eficiencia. Destaco por mi aprendizaje autónomo, pensamiento analítico y trabajo en equipos ágiles.",
	avatarUrl: "/me.png",
	skills: [
		{
			label: "Lenguajes",
			details: "TypeScript, JavaScript, Python, SQL, HTML5, CSS3.",
		},
		{
			label: "Frameworks & Libs",
			details:
				"Next.js, React, React Native, Tamagui, shadcn/ui, Prisma, Tailwind CSS.",
		},
		{
			label: "Herramientas",
			details:
				"Git, GitHub, Jira, Postman, VS Code, Trello, Vercel, Cloudflare.",
		},
		{
			label: "Bases de Datos",
			details: "PostgreSQL, SQL Server.",
		},
		{
			label: "Habilidades Blandas",
			details:
				"Trabajo en equipo, Comunicación asertiva, Resolución de problemas, Adaptabilidad.",
		},
	],
	contact: {
		email: "cundanok9@gmail.com",
		tel: "+505 8821 4091",
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
			Portafolio: {
				name: "Portafolio",
				url: "https://portafoliokatherine.netlify.app/",
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
			end: "Jul 2025",
			description:
				"Desarrollo de interfaces web en React y móviles en React Native con TypeScript. Consumo e integración de APIs REST para gestión de datos. Manejo de estado global con Redux Toolkit Query y colaboración en entorno ágil Scrum, participando en definición de requerimientos y pruebas.",
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
			start: "2020",
			end: "2020",
		},
	],
	projects: [
		{
			title: "Kachiing - Plataforma SaaS para comercios",
			href: "https://kachiing.app/",
			dates: "2026",
			active: true,
			description:
				"Desarrollo full stack de plataforma SaaS con POS, inventario y tienda online. Arquitectura con Next.js App Router, APIs internas y PostgreSQL con Prisma/Kysely, autenticación y despliegue serverless en Cloudflare.",
			technologies: [
				"Next.js",
				"React",
				"TypeScript",
				"PostgreSQL",
				"Prisma",
				"Kysely",
				"TailwindCSS",
				"shadcn/ui",
			],
			links: [
				{
					type: "Demo",
					href: "https://kachiing.app/",
				},
				{
					type: "Source",
					href: "https://github.com/KatyC25",
					icon: Github,
				},
			],
			image: "",
		},
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
					type: "Demo",
					href: "https://tienda-isela.vercel.app/login",
				},
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
			href: "https://www.avatar-crm.com/",
			dates: "2024",
			active: true,
			description:
				"CRM moderno para gestión de clientes, ventas y reportes, con automatización y herramientas inteligentes para clínicas y empresas.",
			technologies: ["React", "TypeScript", "Tailwind CSS"],
			links: [
				{
					type: "Demo",
					href: "https://www.avatar-crm.com/",
				},
			],
			image: "",
		},
	],
} as const;
