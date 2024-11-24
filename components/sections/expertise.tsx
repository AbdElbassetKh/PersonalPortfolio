"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Server, Workflow } from "lucide-react";

const skills = {
  frontend: [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Three.js/WebGL", level: 75 },
  ],
  backend: [
    { name: "Laravel", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "GraphQL", level: 75 },
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 80 },
    { name: "CI/CD", level: 85 },
    { name: "AWS", level: 80 },
  ],
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set across the modern web development stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <Code2 className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <Server className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <Workflow className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>DevOps & Cloud</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.devops.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}