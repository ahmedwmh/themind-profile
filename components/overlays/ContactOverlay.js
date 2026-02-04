'use client';
import { useEffect, useState } from 'react';

export default function ContactOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = (e) => {
      setIsOpen(e.detail);
    };
    window.addEventListener('toggleContact', handleToggle);
    return () => window.removeEventListener('toggleContact', handleToggle);
  }, []);

  const closeContact = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('overlay-open');
      // Trigger animation by adding class
      requestAnimationFrame(() => {
        const form = document.querySelector('.contact-form-container');
        if (form) {
          form.classList.add('contact-form-active');
        }
      });
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('overlay-open');
      const form = document.querySelector('.contact-form-container');
      if (form) {
        form.classList.remove('contact-form-active');
      }
    }
  }, [isOpen]);

  return (
    <div id="contact-overlay" className={`fixed inset-0 bg-[#0a0a0a] z-[60] text-white overflow-y-auto transition-all duration-700 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'}`}>
      <button onClick={closeContact} className="absolute top-8 right-8 md:top-12 md:right-12 z-50 text-white hover:text-mind-green transition-colors group flex items-center gap-2">
        <span className="text-sm font-bold uppercase tracking-widest hidden md:block">Close</span>
        <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-mind-green transition-colors">✕</div>
      </button>

      <div className="min-h-screen flex flex-col pt-32 px-6 md:px-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="mb-12">
              <h2 className="text-mind-green font-bold uppercase text-xs tracking-widest mb-4">
                <span className="w-2 h-2 bg-mind-green rounded-full inline-block mr-2"></span> Say Hello
              </h2>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">LET&apos;S WORK<br />TOGETHER</h1>
              <p className="text-gray-400 max-w-md text-lg">Have a project in mind? The Mind delivers secure, detail-oriented solutions. Let&apos;s create something amazing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-gray-400 mt-20">
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact Details</h4>
                <a href="https://www.themind-platform.com/" target="_blank" rel="noopener noreferrer" className="mb-1 hover:text-mind-green transition-colors cursor-pointer block">themind-platform.com</a>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Platform</h4>
                <p>The Mind Platform</p>
                <p>Tech education & development</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Connect</h4>
                <div className="flex gap-4">
                  <a href="https://www.themind-platform.com/" target="_blank" rel="noopener noreferrer" className="hover:text-mind-green">Website</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-12 rounded-3xl contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">What's your name?</label>
                  <input type="text" placeholder="John Doe" className="minimal-input" required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">What's your email?</label>
                  <input type="email" placeholder="john@example.com" className="minimal-input" required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">What's on your mind?</label>
                  <input type="text" placeholder="I need a new website..." className="minimal-input" />
                </div>
                <div className="pt-8">
                  <button type="submit" className="w-full bg-mind-green text-black font-bold py-4 rounded-full hover:bg-white transition-colors text-lg flex justify-center items-center gap-2 group">
                    Send Message <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
