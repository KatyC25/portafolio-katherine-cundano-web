"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
	const [state, handleSubmit] = useForm("xykkzaog");

	return (
		<section
			id="contact"
			className="py-24 px-4 bg-linear-to-br from-rose-500 via-purple-600 to-blue-600 dark:from-slate-900 dark:via-purple-900 dark:to-slate-950 relative overflow-hidden"
		>
			<div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] pointer-events-none" />

			<div className="container mx-auto max-w-4xl text-center relative z-10">
				<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
					¿Tienes un proyecto en mente?
				</h2>
				<p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
					Estoy siempre abierta a nuevas oportunidades y colaboraciones.
					¡Escríbeme y construyamos algo increíble juntos!
				</p>

				<div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl">
					{state.succeeded ? (
						<div className="flex flex-col items-center justify-center py-10 space-y-4 animate-in fade-in zoom-in duration-500">
							<CheckCircle className="w-20 h-20 text-green-500" />
							<h3 className="text-3xl font-bold text-slate-800 dark:text-white">
								¡Mensaje Recibido!
							</h3>
							<p className="text-slate-600 dark:text-slate-400 text-lg">
								Gracias por escribirme. Revisa tu correo, te responderé pronto.
							</p>
							<Button
								onClick={() => window.location.reload()}
								variant="outline"
								className="mt-6"
							>
								Enviar otro mensaje
							</Button>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-6 text-left">
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<label htmlFor="name" className="text-sm font-medium">
										Nombre
									</label>
									<Input
										id="name"
										name="name"
										placeholder="Tu nombre"
										className="bg-slate-50 border-slate-200"
										required
									/>
									<ValidationError
										prefix="Name"
										field="name"
										errors={state.errors}
									/>
								</div>
								<div className="space-y-2">
									<label htmlFor="email" className="text-sm font-medium">
										Email
									</label>
									<Input
										id="email"
										type="email"
										name="email"
										placeholder="tu@email.com"
										className="bg-slate-50 border-slate-200"
										required
									/>
									<ValidationError
										prefix="Email"
										field="email"
										errors={state.errors}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label htmlFor="message" className="text-sm font-medium">
									Mensaje
								</label>
								<Textarea
									id="message"
									name="message"
									placeholder="Cuéntame sobre tu proyecto..."
									className="min-h-[150px] bg-slate-50 border-slate-200 resize-none"
									required
								/>
								<ValidationError
									prefix="Message"
									field="message"
									errors={state.errors}
								/>
							</div>

							<Button
								type="submit"
								disabled={state.submitting}
								className="w-full bg-linear-to-r from-rose-500 to-purple-600 dark:from-purple-700 dark:to-rose-700 hover:from-rose-600 hover:to-purple-700 dark:hover:from-purple-800 dark:hover:to-rose-800 text-white dark:text-slate-100 font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-rose-500/25 transition-all"
							>
								{state.submitting ? "Enviando..." : "Enviar Mensaje"}{" "}
								<Send className="w-5 h-5 ml-2" />
							</Button>
						</form>
					)}

					<div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-center gap-6">
						<Link href={DATA.contact.social.GitHub.url} target="_blank">
							<Button
								variant="ghost"
								size="icon"
								className="hover:bg-rose-50 hover:text-rose-600"
							>
								<Github className="w-6 h-6" />
							</Button>
						</Link>
						<Link href={DATA.contact.social.LinkedIn.url} target="_blank">
							<Button
								variant="ghost"
								size="icon"
								className="hover:bg-purple-50 hover:text-purple-600"
							>
								<Linkedin className="w-6 h-6" />
							</Button>
						</Link>
						<a href={`mailto:${DATA.contact.email}`}>
							<Button
								variant="ghost"
								size="icon"
								className="hover:bg-blue-50 hover:text-blue-600"
							>
								<Mail className="w-6 h-6" />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
