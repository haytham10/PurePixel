"use client";

import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
	<section className="container py-24">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked <span className="text-purple-500">Questions</span>
          </h2>
          <Accordion type="single" collapsible className="mx-auto max-w-2xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer a comprehensive range of digital services including web design, development, branding, and SEO
                optimization.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
              <AccordionContent>
                Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks from
                start to finish.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer ongoing support?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer various support packages to ensure your digital presence continues to perform optimally after
                launch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What is your pricing structure?</AccordionTrigger>
              <AccordionContent>
                We offer flexible pricing packages starting from €749. Each project is unique, and we provide custom quotes
                based on specific requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
    </section>
  )
}

export default FAQ