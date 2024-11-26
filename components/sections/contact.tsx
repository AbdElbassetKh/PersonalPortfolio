"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:abdelbassetkhettabi@gmail.com",
    label: "Email",
  },
  {
    icon: Github,
    href: "https://github.com/AbdElbassetKh",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/AbdElbassetKh",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/AbdElbassetKh",
    label: "Twitter",
  },
  {
    icon: MessageCircle,
    href: "https://t.me/AbdElbassetKh",
    label: "Telegram",
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s discuss your next project or collaboration opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <Icon className="w-5 h-5 text-primary mr-3" />
                      <span className="font-medium">{label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input placeholder="Name" />
                    </div>
                    <div className="space-y-2">
                      <Input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <Textarea placeholder="Your message" className="min-h-[150px]" />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
