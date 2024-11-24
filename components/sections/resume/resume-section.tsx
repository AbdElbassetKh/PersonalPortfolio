"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { Timeline } from "./timeline";
import { SkillsChart } from "./skills-chart";
import { workExperience, education, skills, achievements } from "./resume-data";

export function ResumeSection() {
  const handleDownloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my experience, education, and technical expertise.
          </p>
          <Button onClick={handleDownloadResume} className="mt-4">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </motion.div>

        <Tabs defaultValue="experience" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <Timeline icon={Briefcase} items={workExperience} />
          </TabsContent>

          <TabsContent value="education">
            <Timeline icon={GraduationCap} items={education} />
          </TabsContent>

          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.technical.map((skill) => (
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
              <Card>
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillsChart data={skills.soft} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.title}>
                  <CardHeader>
                    <Award className="w-8 h-8 mb-2 text-primary" />
                    <CardTitle>{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}