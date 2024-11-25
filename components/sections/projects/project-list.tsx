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
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with real-time inventory and payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    stars: 89,
    demo: "https://demo.example.com",
    github: "https://github.com/example",
    features: [
      "Real-time inventory tracking",
      "Secure payment processing",
      "Order management system",
      "Analytics dashboard"
    ],
    techStack: [
      {
        name: "Next.js",
        description: "Full-stack framework for the modern web"
      },
      {
        name: "Stripe",
        description: "Payment processing integration"
      }
    ],
    challenges: [
      {
        title: "Inventory Sync",
        solution: "Implemented real-time updates using WebSockets and Redis"
      },
      {
        title: "Payment Security",
        solution: "Integrated Stripe Elements with custom UI components"
      }
    ]
  },
  {
    title: "Social Media Dashboard",
    description: "Comprehensive social media management and analytics platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    tags: ["React", "GraphQL", "Node.js", "MongoDB"],
    stars: 156,
    demo: "https://demo.example.com",
    github: "https://github.com/example",
    features: [
      "Multi-platform integration",
      "Automated posting",
      "Analytics tracking",
      "Content calendar"
    ],
    techStack: [
      {
        name: "React",
        description: "Frontend library for building user interfaces"
      },
      {
        name: "GraphQL",
        description: "API query language for efficient data fetching"
      }
    ],
    challenges: [
      {
        title: "Data Aggregation",
        solution: "Implemented GraphQL federation for multiple data sources"
      },
      {
        title: "Real-time Updates",
        solution: "Used GraphQL subscriptions for live data streaming"
      }
    ]
  }
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
