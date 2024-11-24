"use client";

import { ProjectCard } from "./project-card";
import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Enterprise-grade analytics platform using machine learning for predictive insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    tags: ["Next.js", "Python", "TensorFlow", "AWS"],
    stars: 128,
    demo: "https://demo.example.com",
    github: "https://github.com/example",
    features: [
      "Real-time data processing",
      "Machine learning predictions",
      "Interactive dashboards",
      "Custom report generation"
    ],
    techStack: [
      {
        name: "Next.js",
        description: "Frontend framework for server-side rendering and optimal performance"
      },
      {
        name: "TensorFlow",
        description: "Machine learning library for predictive analytics"
      }
    ],
    challenges: [
      {
        title: "Real-time Data Processing",
        solution: "Implemented WebSocket connections with Redis pub/sub for live updates"
      },
      {
        title: "ML Model Optimization",
        solution: "Used TensorFlow.js for client-side predictions reducing server load"
      }
    ]
  },
  {
    title: "AI-Powered Analytics Platform",
    description: "Enterprise-grade analytics platform using machine learning for predictive insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    tags: ["Next.js", "Python", "TensorFlow", "AWS"],
    stars: 128,
    demo: "https://demo.example.com",
    github: "https://github.com/example",
    features: [
      "Real-time data processing",
      "Machine learning predictions",
      "Interactive dashboards",
      "Custom report generation"
    ],
    techStack: [
      {
        name: "Next.js",
        description: "Frontend framework for server-side rendering and optimal performance"
      },
      {
        name: "TensorFlow",
        description: "Machine learning library for predictive analytics"
      }
    ],
    challenges: [
      {
        title: "Real-time Data Processing",
        solution: "Implemented WebSocket connections with Redis pub/sub for live updates"
      },
      {
        title: "ML Model Optimization",
        solution: "Used TensorFlow.js for client-side predictions reducing server load"
      }
    ]
  },
  {
    title: "AI-Powered Analytics Platform",
    description: "Enterprise-grade analytics platform using machine learning for predictive insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    tags: ["Next.js", "Python", "TensorFlow", "AWS"],
    stars: 128,
    demo: "https://demo.example.com",
    github: "https://github.com/example",
    features: [
      "Real-time data processing",
      "Machine learning predictions",
      "Interactive dashboards",
      "Custom report generation"
    ],
    techStack: [
      {
        name: "Next.js",
        description: "Frontend framework for server-side rendering and optimal performance"
      },
      {
        name: "TensorFlow",
        description: "Machine learning library for predictive analytics"
      }
    ],
    challenges: [
      {
        title: "Real-time Data Processing",
        solution: "Implemented WebSocket connections with Redis pub/sub for live updates"
      },
      {
        title: "ML Model Optimization",
        solution: "Used TensorFlow.js for client-side predictions reducing server load"
      }
    ]
  },
  // Add more projects here
];

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}