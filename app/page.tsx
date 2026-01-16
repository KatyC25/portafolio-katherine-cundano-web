import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import ExperienceSummary from "@/components/experience-summary";
import SkillsSummary from "@/components/skills-summary";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-x-hidden font-sans">
			<Navbar />
			<Hero />
			<About />
			<ExperienceSummary />
			<Services />
			<Projects />
			<Education />
			<SkillsSummary />
			<Contact />
			<Footer />
		</main>
	);
}
