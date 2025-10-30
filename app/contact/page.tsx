"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, MessageCircle, Send, Copy, Check } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    title: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const { name, email, subject, title, message } = formData;
    const body = `Title: ${title}\n\nMessage:\n${message}\n\n---\nFrom: ${name} (${email})`;
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Copy message to clipboard
    const textToCopy = `Subject: ${subject}\n\nTitle: ${title}\n\nMessage: ${message}\n\nFrom: ${name}\nEmail: ${email}`;
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Open email client
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 gradient-cyan text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <Send className="w-5 h-5" />
                Send Message
                {copied && (
                  <span className="flex items-center gap-1 text-sm ml-2">
                    <Check className="w-4 h-4" />
                    Copied!
                  </span>
                )}
              </button>
            </form>

            <p className="mt-4 text-xs text-foreground/50 text-center">
              On submit, your default email client will open and the message will be copied to your clipboard.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-cyan-500/50 transition-colors"
                >
                  <Mail className="w-6 h-6 text-gradient" />
                  <div>
                    <div className="text-sm text-foreground/70">Email</div>
                    <div className="font-semibold">{personalInfo.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-cyan-500/50 transition-colors"
                >
                  <Phone className="w-6 h-6 text-gradient" />
                  <div>
                    <div className="text-sm text-foreground/70">Phone</div>
                    <div className="font-semibold">{personalInfo.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <MapPin className="w-6 h-6 text-gradient" />
                  <div>
                    <div className="text-sm text-foreground/70">Location</div>
                    <div className="font-semibold">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Social Media</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
                  { icon: Instagram, href: personalInfo.socials.instagram, label: "Instagram" },
                  { icon: Facebook, href: personalInfo.socials.facebook, label: "Facebook" },
                  { icon: MessageCircle, href: personalInfo.socials.discord, label: "Discord" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 p-4 glass rounded-xl hover:border-cyan-500/50 transition-colors"
                  >
                    <social.icon className="w-6 h-6 text-gradient" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-3">Languages</h3>
              <div className="space-y-2 text-sm">
                <div>🇩🇿 Arabic - Native (C2)</div>
                <div>🇬🇧 English - Upper Intermediate (B2)</div>
                <div>🇫🇷 French - Intermediate (B1)</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Privacy Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 glass rounded-2xl p-6 text-center"
        >
          <p className="text-sm text-foreground/60">
            <strong>Privacy Note:</strong> This contact form uses your default email client to send messages.
            Your information is not stored on any server. For direct contact, use the email address above.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
