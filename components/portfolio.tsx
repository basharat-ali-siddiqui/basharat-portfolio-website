'use client';

import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url: string;
  type: string;
  github?: string;
}

export function Portfolio() {
  const projects: Project[] = [
    {
      title: 'BuyBee',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and payment integration',
      url: 'https://buybeepk.com/',
      type: 'E-Commerce',
      github: '',
    },
    {
      title: 'InternPools',
      description: 'Hiring platform connecting employers with talented candidates for internship and job opportunities',
      url: 'https://internpools.com/',
      type: 'Hiring Platform',
      github: '',
    },
    {
      title: 'Business UI Landing Page',
      description: 'Modern React UI landing page showcasing business services with responsive design and smooth animations',
      url: 'https://pebisnisulungreactui.vercel.app/',
      type: 'Landing Page',
      github: '',
    },
    {
      title: '3rd Party API Frontend',
      description: 'Frontend application demonstrating API integration patterns and data fetching best practices',
      url: 'https://github.com/basharatalee/3rd-party-api-frontend',
      type: 'Frontend',
      github: 'https://github.com/basharatalee/3rd-party-api-frontend',
    },
    {
      title: '3rd Party API Backend',
      description: 'Backend service showcasing API development, database integration, and server-side logic',
      url: 'https://github.com/basharatalee/Third-Party-API-to-DB',
      type: 'Backend',
      github: 'https://github.com/basharatalee/Third-Party-API-to-DB',
    },
  ];

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Featured</span> Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-background/50 border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-pretty">{project.description}</p>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors font-medium"
                >
                  <ExternalLink size={18} />
                  {project.github ? 'Visit' : 'View Project'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
