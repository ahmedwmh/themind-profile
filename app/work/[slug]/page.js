'use client';

import { useParams } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import CTA from '@/components/sections/CTA';
import { getProjectBySlug } from '@/lib/projectsData';

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;
  const project = getProjectBySlug(slug);

  const results = [
    { metric: 'Security', label: 'First Approach' },
    { metric: 'Detail', label: 'Oriented' },
    { metric: '161+', label: 'Projects Delivered' },
    { metric: '14+', label: 'Years Experience' }
  ];
  const tech = project.services || [];

  return (
    <MainLayout>
      
      {/* Hero */}
      <section className="min-h-screen pt-32 pb-20 flex items-end relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 pb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-mind-green text-black px-4 py-2 rounded-full text-xs font-bold uppercase">
              {project.category}
            </span>
            <span className="text-gray-400">{project.year}</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl">
            {project.description}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-mind-green text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Visit Website
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="py-[80px] bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">Client</h3>
              <p className="text-xl font-semibold text-black">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">Year</h3>
              <p className="text-xl font-semibold text-black">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">Services</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-black">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-[80px] bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">The Story</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
            {project.desc}
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="py-[80px] bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-20 text-center">Why The Mind</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-mind-green mb-4">
                  {result.metric}
                </div>
                <div className="text-lg text-gray-400">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images */}
      {project.images && project.images.length > 0 && (
        <section className="py-[80px] bg-white">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech / Services */}
      <section className="py-[80px] bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">Services Delivered</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tech.map((t, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 px-6 py-3 rounded-full text-lg font-bold text-black hover:border-mind-blue transition-colors"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] bg-mind-green">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <p className="text-2xl md:text-3xl font-bold mb-8 text-black leading-relaxed">
            Built with security and attention to detail by The Mind.
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Visit {project.title}
          </a>
        </div>
      </section>

      <CTA />
    </MainLayout>
  );
}
