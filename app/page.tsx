import { HeroSection } from '@/components/sections/hero';
import { ProjectsSection } from '@/components/sections/projects';
import { ExpertiseSection } from '@/components/sections/expertise';
import { ResumeSection } from '@/components/sections/resume/resume-section';
import { GrowthSection } from '@/components/sections/growth';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ProjectsSection />
      <ExpertiseSection />
      <ResumeSection />
      <GrowthSection />
      <ContactSection />
    </main>
  );
}