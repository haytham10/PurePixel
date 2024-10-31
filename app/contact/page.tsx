'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle, XCircle } from "lucide-react"; // Added XCircle for error icon
import { User, Mail, MessageCircle, Tag } from "lucide-react"; // Added Tag icon

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' }); // Added subject
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    // Enhanced validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setSubmissionStatus('All fields are required.');
        setIsSubmitting(false);
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
        setSubmissionStatus('Please enter a valid email address.');
        setIsSubmitting(false);
        return;
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmissionStatus('Your message has been sent!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmissionStatus('Failed to send your message.');
    }
  };

  return (
    <div className="relative py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-purple-200 to-pink-200" />
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center justify-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 shadow-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect!
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            We’re Here to Help You
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Have a question or need assistance? Fill out the form below, and we’ll get back to you as soon as possible!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto" // Added max-w-md and mx-auto
        >
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-300">
            <div className="mb-4 flex items-center border border-gray-300 rounded-md">
              <User className="h-5 w-5 text-gray-500 ml-3" />
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name"
                aria-label="Your Name" // Added aria-label
                className="mt-1 block w-full bg-white border-0 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-transform duration-300" 
                required 
              />
            </div>
            <div className="mb-4 flex items-center border border-gray-300 rounded-md">
              <Mail className="h-5 w-5 text-gray-500 ml-3" />
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email"
                aria-label="Your Email" // Added aria-label
                className="mt-1 block w-full bg-white border-0 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-transform duration-300" 
                required 
              />
            </div>
            <div className="mb-4 flex items-center border border-gray-300 rounded-md">
              <Tag className="h-5 w-5 text-gray-500 ml-3" /> {/* Added Tag icon */}
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Subject"
                aria-label="Subject" // Added aria-label
                className="mt-1 block w-full bg-white border-0 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-transform duration-300" 
                required 
              />
            </div>
            <div className="mb-4 flex items-start border border-gray-300 rounded-md">
              <MessageCircle className="h-5 w-5 text-gray-500 ml-3 mt-2" />
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Your Message"
                aria-label="Your Message" // Added aria-label
                className="mt-1 block w-full bg-white border-0 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-transform duration-300" 
                rows={4} 
                required 
              />
            </div>
            <Button 
              type="submit" 
              className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transition-transform duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} 
              disabled={isSubmitting}
            >
              {isSubmitting ? <span className="loader"></span> : 'Send Message'}
            </Button>
            <p className="mt-4 flex items-center gap-2" aria-live="polite">
              {submissionStatus.includes('sent') ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : submissionStatus ? (
                <XCircle className="h-5 w-5 text-red-500" />
              ) : null}
              {submissionStatus}
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;