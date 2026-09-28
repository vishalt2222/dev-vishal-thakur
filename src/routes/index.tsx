import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Contact, Education, Experience, Footer, Journey, ProjectDialog, Projects, Services, Skills } from "@/components/portfolio/Sections";
import type { Project } from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishal Thakur — Software Developer & AI Enthusiast" },
      { name: "description", content: "Portfolio of Vishal Harichandra Thakur, MCA student and full-stack developer working with MERN, AI, machine learning, PDF processing and OCR." },
      { property: "og:title", content: "Vishal Thakur — Software Developer & AI Enthusiast" },
      { property: "og:description", content: "Full-stack, AI and data projects by Vishal Harichandra Thakur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [project, setProject] = useState<Project | null>(null);
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience onOpen={setProject} />
      <Skills />
      <Services />
      <Projects onOpen={setProject} />
      <Journey />
      <Contact />
      <Footer />
      <ProjectDialog project={project} onClose={() => setProject(null)} />
      <Toaster />
    </main>
  );
}
