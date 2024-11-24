"use client";

import { motion } from "framer-motion";
import { ProjectList } from "./projects/project-list";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full min-h-screen py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence through real-world applications.
          </p>
        </motion.div>

        <ProjectList />
      </div>
    </section>
  );
}