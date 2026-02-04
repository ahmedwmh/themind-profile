export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '🛡️',
      title: 'Security First',
      description: 'We prioritize security in every project. From secure coding practices to data protection and compliance, your project is built on a solid foundation.'
    },
    {
      icon: '✨',
      title: 'Attention to Detail',
      description: 'Every pixel, line of code, and user flow is crafted with care. We deliver a high level of polish and precision so your product stands out.'
    },
    {
      icon: '📐',
      title: 'Clean Architecture',
      description: 'Scalable, maintainable code and clear structure. We build for the long term so your platform can grow without technical debt.'
    },
    {
      icon: '🤝',
      title: 'Founder-Led Quality',
      description: 'Ahmed, with 14 years of experience and 161+ projects, leads the work. You get direct expertise and accountability.'
    },
    {
      icon: '🌍',
      title: 'Proven Reach',
      description: 'Over 30,000 students trained across the Arab world. We understand diverse markets and deliver solutions that work at scale.'
    },
    {
      icon: '⚡',
      title: 'On-Time Delivery',
      description: 'We commit to clear timelines and communication. No surprises — just reliable delivery and support when you need it.'
    }
  ];

  return (
    <section className="py-[80px] bg-black text-white" id="why-choose-us">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-mind-green/10 text-mind-green font-semibold uppercase text-xs tracking-widest px-4 py-2 rounded-full border border-mind-green/20">
              <span className="w-2 h-2 bg-mind-green rounded-full"></span> Why Choose Us
            </div>
          </div>
          <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-6">
            WHY WORK<br />WITH THE MIND
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine technical excellence with a focus on security, detail, and long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-mind-green transition-all duration-300 group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-mind-green transition-colors">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
