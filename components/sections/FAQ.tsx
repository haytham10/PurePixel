"use client";

import React from 'react'
import { motion } from "framer-motion"
import { Sparkles, Search, MessagesSquare } from "lucide-react"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
	{
		category: "General",
		icon: Sparkles,
		questions: [
			{
				q: "What makes PurePixel different from other agencies?",
				a: "We combine cutting-edge technology with creative excellence, offering personalized solutions and dedicated support. Our proven track record of successful projects and innovative approach sets us apart."
			},
			{
				q: "What industries do you specialize in?",
				a: "We work across various sectors including e-commerce, SaaS, healthcare, education, and finance. Our diverse experience allows us to bring cross-industry insights to every project."
			},
			{
				q: "Do you work with international clients?",
				a: "Yes! We serve clients globally, with experience working across different time zones. Our communication and project management tools ensure smooth collaboration regardless of location."
			}
		]
	},
	{
		category: "Services & Process",
		icon: Search,
		questions: [
			{
				q: "What services do you offer?",
				a: "We provide comprehensive digital solutions including web design, development, UI/UX design, branding, SEO optimization, and digital marketing. Each service can be tailored to your specific needs."
			},
			{
				q: "How long does a typical project take?",
				a: "Project timelines vary based on scope and complexity: Simple websites: 2-4 weeks, Complex web applications: 6-10 weeks, E-commerce platforms: 12-16 weeks. We'll provide a detailed timeline during consultation."
			},
			{
				q: "What is your development process?",
				a: "Our process includes: 1. Discovery & Planning, 2. Design & Prototyping, 3. Development & Testing, 4. Launch & Training, 5. Ongoing Support & Optimization. We maintain transparent communication throughout."
			}
		]
	},
	{
		category: "Support & Pricing",
		icon: MessagesSquare,
		questions: [
			{
				q: "What are your pricing models?",
				a: "We offer flexible pricing options: Project-based pricing starting from $300, Monthly retainer packages from $30/month, Custom enterprise solutions. Each quote is tailored to your specific requirements."
			},
			{
				q: "Do you offer ongoing support?",
				a: "Yes! We provide various support packages including: 24/7 emergency support, Regular maintenance & updates, Performance monitoring, Security patches, Content updates. Support plans start from $30/month."
			},
			{
				q: "What happens after the project launch?",
				a: "We offer a 30-day support period post-launch, ensuring smooth operation. We also provide training, documentation, and optional ongoing maintenance packages to keep your digital presence optimized."
			}
		]
	}
]

const FAQ = () => {
	const [activeCategory, setActiveCategory] = React.useState("General")

	return (
		<section className="relative py-24 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
			<div className="absolute inset-0 bg-grid-black/[0.02]" />

			<div className="container relative">
				{/* Header */}
				<motion.div 
					className="text-center max-w-2xl mx-auto mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<motion.div 
						className="inline-flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100 shadow-sm mb-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
					>
						<MessagesSquare className="h-4 w-4 text-purple-500" />
						<span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							Got Questions?
						</span>
					</motion.div>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Frequently Asked 
						<span className="block mt-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							Questions
						</span>
					</h2>
					<p className="text-muted-foreground text-lg">
						Find answers to common questions about our services, process, and support
					</p>
				</motion.div>

				{/* Category Tabs */}
				<div className="flex justify-center gap-4 mb-12">
					{faqs.map((category, index) => (
						<motion.button
							key={category.category}
							className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
								activeCategory === category.category
									? "bg-white shadow-md border border-purple-100"
									: "hover:bg-white/50"
							}`}
							onClick={() => setActiveCategory(category.category)}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 + (index * 0.1) }}
						>
							<category.icon className={`h-4 w-4 ${
								activeCategory === category.category
									? "text-purple-500"
									: "text-muted-foreground"
							}`} />
							<span className={activeCategory === category.category
								? "text-foreground"
								: "text-muted-foreground"
							}>
								{category.category}
							</span>
						</motion.button>
					))}
				</div>

				{/* FAQ Accordion */}
				<motion.div
					className="max-w-3xl mx-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				>
					{faqs.map((category) => (
						category.category === activeCategory && (
							<Accordion
								key={category.category}
								type="single"
								collapsible
								className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 shadow-lg divide-y divide-purple-100"
							>
								{category.questions.map((faq, index) => (
									<motion.div
										key={faq.q}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<AccordionItem value={`item-${index}`} className="border-none">
											<AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-purple-50/50 group">
												<span className="text-left font-medium group-hover:text-purple-600 transition-colors">
													{faq.q}
												</span>
											</AccordionTrigger>
											<AccordionContent className="px-6 pb-4">
												<p className="text-muted-foreground">
													{faq.a}
												</p>
											</AccordionContent>
										</AccordionItem>
									</motion.div>
								))}
							</Accordion>
						)
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default FAQ