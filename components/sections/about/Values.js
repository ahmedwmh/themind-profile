export default function Values() {
  const values = [
    {
      icon: "🛡️",
      title: "Security First",
      description: "We prioritize security in every project. From secure coding to data protection, your project is built on a solid foundation."
    },
    {
      icon: "✨",
      title: "Attention to Detail",
      description: "Every pixel and line of code is crafted with care. We deliver a high level of polish and precision."
    },
    {
      icon: "🤝",
      title: "Founder-Led Quality",
      description: "Ahmed leads the work with 14 years of experience. You get direct expertise and accountability."
    },
    {
      icon: "⚡",
      title: "On-Time Delivery",
      description: "We commit to clear timelines and communication. Reliable delivery and support when you need it."
    },
    {
      icon: "🎯",
      title: "Results Driven",
      description: "We deliver measurable business impact. Clean code and design that scales with your ambitions."
    },
    {
      icon: "🌍",
      title: "Proven Reach",
      description: "30,000+ students trained across the Arab world. We understand diverse markets and deliver at scale."
    }
  ];

  return (
    <section className="py-[80px] bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-mind-green/10 text-mind-green font-semibold uppercase text-xs tracking-widest px-4 py-2 rounded-full border border-mind-green/20">
              <span className="w-2 h-2 bg-mind-green rounded-full"></span> Our Values
            </div>
          </div>
          <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-6">
            WHAT WE<br />STAND FOR
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-mind-green transition-all duration-300 group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-mind-green transition-colors">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
