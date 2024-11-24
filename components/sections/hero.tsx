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
    <section id="home" className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-4xl"
      >
        <Avatar className="w-32 h-32 mx-auto mb-8 ring-2 ring-primary/10 transition-transform hover:scale-105">
          <AvatarImage 
            src="https://github.com/AbdElbassetKh.png" 
            alt="Abd Elbasset Khettabi"
            loading="eager"
          />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <TypewriterEffect words={words} />
          </h1>
          <p className="text-xl text-muted-foreground">
            Senior Full-Stack Developer crafting high-performance web applications
            with modern technologies.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Button
              key={href}
              variant="outline"
              size="lg"
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
