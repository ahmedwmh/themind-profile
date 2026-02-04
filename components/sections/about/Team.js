export default function Team() {
  const team = [
    {
      name: "Ahmed",
      role: "Founder & Technical Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "14 years of technical experience, 161+ projects delivered. Founder of The Mind. Trained 30,000+ students across the Arab world.",
      link: "https://www.themind-platform.com/"
    }
  ];

  return (
    <section className="py-[80px] bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-mind-blue/10 text-mind-blue font-semibold uppercase text-xs tracking-widest px-4 py-2 rounded-full border border-mind-blue/20">
              <span className="w-2 h-2 bg-mind-blue rounded-full"></span> Our Team
            </div>
          </div>
          <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-6 text-black">
            MEET THE<br />FOUNDER
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Founder-led quality and accountability at The Mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <a 
              key={index} 
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">{member.name}</h3>
              <p className="text-mind-blue font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
