"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, MessageSquare, Trophy, Users } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Conference Speaker",
    description: "Regular speaker at major tech conferences including React Summit and Next.js Conf.",
    tags: ["Public Speaking", "Knowledge Sharing"],
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Technical Writer",
    description: "Published author with 50+ technical articles on modern web development.",
    tags: ["Technical Writing", "Documentation"],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Leader",
    description: "Founded and lead a tech community with 5000+ active members.",
    tags: ["Leadership", "Community Building"],
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Mentor",
    description: "Mentored 100+ developers, helping them advance their careers in tech.",
    tags: ["Mentorship", "Career Growth"],
  },
];

export function GrowthSection() {
  return (
    <section id="growth" className="w-full min-h-screen py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional Growth</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and community contributions driving industry innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle>{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}