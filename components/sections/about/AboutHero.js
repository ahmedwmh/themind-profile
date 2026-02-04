"use client";

import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-mind-green rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-mind-green rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-mind-green/10 text-mind-green font-semibold uppercase text-xs tracking-widest mb-6 px-4 py-2 rounded-full border border-mind-green/20">
              <span className="w-2 h-2 bg-mind-green rounded-full"></span> About The Mind
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
              THE MIND<br />
              <span className="text-mind-green">PLATFORM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
              Ahmed — technical developer with 14 years of experience, founder of The Mind. We deliver secure, detail-oriented digital solutions and have trained over 30,000 students across the Arab world.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold">
                14+ Years Experience
              </div>
              <div className="bg-mind-green text-black px-6 py-3 rounded-full font-bold">
                161+ Projects
              </div>
              <div className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-bold">
                30,000+ Students Trained
              </div>
            </div>
            <a href="https://www.themind-platform.com/" target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
              <Image src="/logo/light-logo.svg" alt="The Mind" width={180} height={40} className="opacity-90 hover:opacity-100 transition" />
            </a>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="The Mind — Tech & Education"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-mind-green rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
