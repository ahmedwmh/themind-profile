import Image from 'next/image';
import { trainingImage } from '@/lib/projectsData';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 mb-24">
        <a href="https://www.themind-platform.com/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
          <Image src="/logo/light-logo.svg" alt="The Mind" width={100} height={36} />
        </a>
        <span className="font-bold text-mind-blue text-lg">161+ Projects</span>
        <span className="font-bold text-mind-blue text-lg">30,000+ Students</span>
        <span className="font-bold text-mind-blue text-lg">14 Years Experience</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 text-mind-blue font-bold uppercase text-xs tracking-widest mb-4">
            <span className="w-2 h-2 bg-mind-blue rounded-full"></span> The Mind  Platform
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            A leading platform for tech education and digital training. 30,000+ students trained across the Arab world.
          </p>
          <div className="mt-6 relative aspect-[4/3] rounded-lg overflow-hidden max-w-xs">
            <Image src={trainingImage} alt="The Mind training" fill className="object-cover" sizes="(max-width: 768px) 100vw, 320px" />
          </div>
        </div>
        <div className="md:col-span-9">
          <h2 className="text-3xl lg:text-6xl font-medium leading-relaxed text-reveal-trigger text-black">
            Tech education &amp; digital platforms. We train talent and deliver solutions — 30,000+ students, 161+ projects.
          </h2>
        </div>
      </div>
      </div>
    </section>
  );
}
