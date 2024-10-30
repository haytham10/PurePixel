"use client";

import React, { useState } from 'react'
import { motion } from "framer-motion"
import { fadeIn, stagger, scaleIn } from '@/lib/animations';
import { Button } from '../ui/button';
import { Check, Sparkles, Globe, Cpu, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just starting out",
    price: "300",
    features: [
      { text: "Single-page or Basic Multi-section Layout", highlight: true },
      { text: "Essential Design Elements", highlight: false },
      { text: "Mobile Responsive Design", highlight: true },
      { text: "Basic SEO Setup", highlight: false },
      { text: "Contact Form Integration", highlight: false },
      { text: "2 Rounds of Revisions", highlight: false },
    ],
    maintenancePrice: "30",
    maintenanceFeatures: [
      { text: "Security Updates", highlight: true },
      { text: "Performance Monitoring", highlight: false },
      { text: "Minor Text/Image Edits", highlight: true },
      { text: "Monthly Backup", highlight: false },
    ],
    icon: Globe,
    gradient: "from-blue-500/20 to-cyan-500/20",
    buttonGradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "500",
    features: [
      { text: "Up to 5-page Website", highlight: true },
      { text: "Custom Design Elements", highlight: true },
      { text: "Advanced SEO Setup", highlight: true },
      { text: "Google Analytics Integration", highlight: false },
      { text: "Contact Forms", highlight: false },
      { text: "Social Media Integration", highlight: true },
      { text: "3 Rounds of Revisions", highlight: false },
    ],
    maintenancePrice: "50",
    maintenanceFeatures: [
      { text: "Regular Updates", highlight: true },
      { text: "Performance Optimization", highlight: true },
      { text: "Content Adjustments", highlight: false },
      { text: "Priority Support", highlight: true },
      { text: "Weekly Backups", highlight: false },
    ],
    icon: Cpu,
    gradient: "from-purple-500/20 to-pink-500/20",
    buttonGradient: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For established businesses needing premium solutions",
    price: "800",
    features: [
      { text: "Up to 10-page Website", highlight: true },
      { text: "Premium Design & Animations", highlight: true },
      { text: "E-commerce Integration", highlight: true },
      { text: "Advanced Functionality", highlight: true },
      { text: "Full SEO Optimization", highlight: true },
      { text: "Marketing Integrations", highlight: true },
      { text: "Unlimited Revisions", highlight: false },
      { text: "Priority Support", highlight: true },
    ],
    maintenancePrice: "80",
    maintenanceFeatures: [
      { text: "Comprehensive Maintenance", highlight: true },
      { text: "Advanced Updates", highlight: true },
      { text: "Monthly Performance Reports", highlight: true },
      { text: "Dedicated Support", highlight: true },
      { text: "Daily Backups", highlight: true },
      { text: "CDN Integration", highlight: false },
    ],
    icon: Shield,
    gradient: "from-amber-500/20 to-orange-500/20",
    buttonGradient: "from-amber-500 to-orange-500",
    popular: false,
  }
]

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

  return (
    <section className="w-full relative overflow-hidden" id="pricing">
      <div className="container py-24">
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="absolute inset-0 w-screen bg-gradient-to-b from-purple-50/50 to-white/50 -z-10" />
        <div className="absolute w-screen h-full">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 rounded-full bg-white/80 px-3 py-1.5 shadow-lg backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Choose Your Perfect Plan
            </span>
          </motion.div>

          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </motion.div>

        {/* Main Plans */}
        <motion.div
          className="grid gap-8 lg:grid-cols-3 mb-16 items-start"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeIn}
              className={cn(
                "relative rounded-2xl border bg-white/80 backdrop-blur-sm p-8 transition-all duration-500",
                hoveredPlan === plan.name ? "scale-105 shadow-2xl border-purple-500/50 -translate-y-2" : "hover:border-purple-500/50",
                plan.popular && "lg:scale-110 lg:-translate-y-8 border-purple-500 shadow-xl shadow-purple-500/20 z-10",
                !plan.popular && "lg:scale-95"
              )}
              style={{
                minHeight: plan.popular ? '900px' : '850px'
              }}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-5 left-0 right-0 mx-auto w-fit px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="relative inline-flex items-center">
                    <span className="animate-ping absolute -left-1 -right-1 h-full w-full rounded-full bg-purple-400 opacity-20"></span>
                    Most Popular
                  </span>
                </motion.div>
              )}

              <div className={`p-3 rounded-xl bg-gradient-to-br ${plan.gradient} w-fit`}>
                <plan.icon className="w-6 h-6" />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1.5">{plan.description}</p>
              </div>

              <div className="mt-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/project</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <motion.li 
                    key={feature.text}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className={cn(
                      "mt-1 w-5 h-5 rounded-full flex items-center justify-center transition-colors",
                      feature.highlight ? "bg-purple-100 group-hover:bg-purple-200" : "bg-green-100 group-hover:bg-green-200"
                    )}>
                      <Check className={cn(
                        "w-3 h-3",
                        feature.highlight ? "text-purple-500" : "text-green-500"
                      )} />
                    </div>
                    <span className={cn(
                      "text-muted-foreground group-hover:text-foreground transition-colors",
                      feature.highlight && "text-foreground font-medium"
                    )}>
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                className="mt-8 pt-8 border-t"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <div>
                    <h4 className="font-semibold">Monthly Maintenance</h4>
                    <p className="text-sm text-muted-foreground">Keep your site running smoothly</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold">${plan.maintenancePrice}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-3 bg-white/50 p-4 rounded-lg">
                  {plan.maintenanceFeatures.map((feature) => (
                    <motion.li 
                      key={feature.text}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <Check className={cn(
                        "w-4 h-4",
                        feature.highlight ? "text-purple-500" : "text-green-500"
                      )} />
                      <span className={cn(
                        "text-sm text-muted-foreground",
                        feature.highlight && "text-foreground font-medium"
                      )}>
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <Button 
                className={cn(
                  "mt-8 w-full bg-gradient-to-r text-white transition-transform duration-300",
                  `${plan.buttonGradient}`,
                  hoveredPlan === plan.name && "scale-105"
                )}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing