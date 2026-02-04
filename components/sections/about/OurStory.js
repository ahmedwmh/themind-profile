export default function OurStory() {
  return (
    <section className="py-[80px] bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">Our Story</h2>
            <div className="w-20 h-1 bg-mind-blue mb-8"></div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">The Beginning</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Mind was founded with a clear mission: to deliver high-quality digital solutions with a strong focus on security and attention to detail. We bridge cutting-edge technology with real business impact across the Arab world and beyond.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Our Track Record</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 161+ projects delivered and over 30,000 students trained across the Arab world, we have built a reputation for reliability and excellence. Every project is an opportunity to raise the bar on quality, security, and user experience.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Today & Tomorrow</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We build web platforms, digital experiences, and tech education programs. We are committed to clean architecture, on-time delivery, and long-term value. The future of digital is being built with precision — and we are here to build it with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
