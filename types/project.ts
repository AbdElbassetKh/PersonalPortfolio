export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  stars: number;
  demo: string;
  github: string;
  features: string[];
  techStack: {
    name: string;
    description: string;
  }[];
  challenges: {
    title: string;
    solution: string;
  }[];
}