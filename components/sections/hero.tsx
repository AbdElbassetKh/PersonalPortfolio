"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";

const socialLinks = [
  {
    href: "mailto:abdelbassetkhettabi@gmail.com",
    icon: Mail,
    label: "Contact",
  },
  {
    href: "https://github.com/AbdElbassetKh",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/AbdElbassetKh",
    icon: Linkedin,
    label: "LinkedIn",
  },
] as const;

const words = [
  { text: "Building", className: "" },
  { text: "exceptional", className: "" },
  { text: "digital", className: "" },
  { text: "experiences.", className: "text-blue-500 dark:text-blue-400" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-4xl mx-auto"
      >
        <Avatar className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 ring-2 ring-primary/10 transition-transform hover:scale-105">
          <AvatarImage 
            src="https://github.com/AbdElbassetKh.png" 
            alt="Abd Elbasset Khettabi"
            loading="eager"
          />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <TypewriterEffect words={words} />
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Senior Full-Stack Developer crafting high-performance web applications
            with modern technologies.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Button
              key={href}
              variant="outline"
              size="lg"
              className="min-w-[140px]"
              asChild
            >
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Link>
            </Button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
