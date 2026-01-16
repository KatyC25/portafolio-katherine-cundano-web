import { Github } from "lucide-react";

export const DATA = {
	name: "Katherine Cundano",
	initials: "KC",
	url: "https://github.com/KatyC25",
	location: "Juigalpa, Chontales",
	locationLink: "https://www.google.com/maps/place/Juigalpa",
	description:
		"Me especializo en la creación de soluciones escalables, abarcando sistemas de gestión financiera y aplicaciones web modernas de alto impacto.",
	summary:
		"Desarrolladora Frontend con experiencia en la construcción de aplicaciones web modernas y escalables utilizando React y Next.js. Especializada en convertir requerimientos y diseños complejos en interfaces eficientes, accesibles y orientadas a la experiencia de usuario. He participado y liderado el desarrollo frontend en proyectos académicos, startups y hackathons, trabajando bajo metodologías ágiles y priorizando la calidad del código.",
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
			details: "Git, GitHub, Jira, Postman, VS Code, Redux Toolkit, Trello.",
		},
		{
			label: "Bases de Datos",
			details: "PostgreSQL, Microsoft SQL Server.",
		},
		{
			label: "Habilidades Blandas",
			details:
				"Trabajo en equipo, Comunicación asertiva, Resolución de problemas, Adaptabilidad.",
		},
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
