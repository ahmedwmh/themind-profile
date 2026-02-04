'use client';

import Link from 'next/link';
import { projectsList } from '@/lib/projectsData';

export default function Work() {
  const openProject = (id) => {
    window.dispatchEvent(new CustomEvent('openProject', { detail: id }));
  };

  return (
    <section className="py-24 bg-white" id="cases">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-black">Our Best Clients</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Selected projects showcasing The Mind&apos;s expertise in web platforms and digital experiences
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projectsList.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => openProject(project.id)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4 text-white text-sm font-bold bg-mind-blue/90 px-3 py-1 rounded-full">
                  {project.year}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-medium text-mind-blue uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link href="/work">
            <button className="border-2 border-mind-blue text-mind-blue px-8 py-3 rounded-full text-sm font-medium hover:bg-mind-blue hover:text-white transition-all duration-300">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
