"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar({ dark = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const toggleContact = () => {
    window.dispatchEvent(new CustomEvent("toggleContact", { detail: true }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? `backdrop-blur-sm ${dark ? 'bg-black/80 text-white' : 'bg-white/80 text-black'}` 
            : `${dark ? 'bg-transparent text-white' : 'bg-transparent text-black'}`
        }`}
        id="navbar"
      >
        <div className="container mx-auto px-6 py-5 md:px-12 max-w-7xl flex justify-between items-center">
          <a
            href="/"
            onClick={(e) => { if (pathname === "/") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } }}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer h-10"
          >
            <Image src={dark ? "/logo/dark-logo.svg" : "/logo/light-logo.svg"} alt="The Mind" width={140} height={32} className="h-8 w-auto" priority />
          </a>
          <div className="flex items-center gap-6">
            <a
              href="/about"
              className={`nav-link hidden md:block text-sm font-medium transition-colors relative ${
                isActive("/about") 
                  ? `${dark ? 'text-white' : 'text-black'} font-bold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 ${dark ? 'after:bg-mind-green' : 'after:bg-mind-blue'}` 
                  : `${dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`
              }`}
            >
              About
            </a>
            <a
              href="/services"
              className={`nav-link hidden md:block text-sm font-medium transition-colors relative ${
                isActive("/services") 
                  ? `${dark ? 'text-white' : 'text-black'} font-bold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 ${dark ? 'after:bg-mind-green' : 'after:bg-mind-blue'}` 
                  : `${dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`
              }`}
            >
              Services
            </a>
            <a
              href="/work"
              className={`nav-link hidden md:block text-sm font-medium transition-colors relative ${
                isActive("/work") 
                  ? `${dark ? 'text-white' : 'text-black'} font-bold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 ${dark ? 'after:bg-mind-green' : 'after:bg-mind-blue'}` 
                  : `${dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`
              }`}
            >
              Our Best Clients
            </a>
            <a
              href="/blog"
              className={`nav-link hidden md:block text-sm font-medium transition-colors relative ${
                isActive("/blog") 
                  ? `${dark ? 'text-white' : 'text-black'} font-bold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 ${dark ? 'after:bg-mind-green' : 'after:bg-mind-blue'}` 
                  : `${dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`
              }`}
            >
              Blog
            </a>
            <a
              href="/careers"
              className={`nav-link hidden md:block text-sm font-medium transition-colors relative ${
                isActive("/careers") 
                  ? `${dark ? 'text-white' : 'text-black'} font-bold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 ${dark ? 'after:bg-mind-green' : 'after:bg-mind-blue'}` 
                  : `${dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`
              }`}
            >
              Careers
            </a>
            <button
              onClick={toggleContact}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border border-transparent md:block hidden ${dark ? 'bg-mind-green text-black hover:bg-black hover:text-mind-green hover:border-mind-green' : 'bg-mind-blue text-white hover:bg-black hover:text-mind-blue hover:border-mind-blue'}`}
            >
              Contact
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden text-2xl p-2 rounded transition-colors`}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 w-full backdrop-blur-md z-40 transition-all duration-300 lg:hidden ${
          dark ? 'bg-black/95 text-white' : 'bg-white/95 text-black'
        } ${
          mobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col px-6 py-6 gap-4">
            <a
              href="/about"
              onClick={closeMobileMenu}
              className={`text-lg font-medium transition-colors py-2 ${
                dark ? 'border-b border-white/20' : 'border-b border-gray-200'
              } ${
                isActive("/about")
                  ? `${dark ? 'text-white' : 'text-black'} font-bold`
                  : `${dark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`
              }`}
            >
              About
            </a>
            <a
              href="/services"
              onClick={closeMobileMenu}
              className={`text-lg font-medium transition-colors py-2 ${
                dark ? 'border-b border-white/20' : 'border-b border-gray-200'
              } ${
                isActive("/services")
                  ? `${dark ? 'text-white' : 'text-black'} font-bold`
                  : `${dark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`
              }`}
            >
              Services
            </a>
            <a
              href="/work"
              onClick={closeMobileMenu}
              className={`text-lg font-medium transition-colors py-2 ${
                dark ? 'border-b border-white/20' : 'border-b border-gray-200'
              } ${
                isActive("/work")
                  ? `${dark ? 'text-white' : 'text-black'} font-bold`
                  : `${dark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`
              }`}
            >
              Our Best Clients
            </a>
            <a
              href="/blog"
              onClick={closeMobileMenu}
              className={`text-lg font-medium transition-colors py-2 ${
                dark ? 'border-b border-white/20' : 'border-b border-gray-200'
              } ${
                isActive("/blog")
                  ? `${dark ? 'text-white' : 'text-black'} font-bold`
                  : `${dark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`
              }`}
            >
              Blog
            </a>
            <a
              href="/careers"
              onClick={closeMobileMenu}
              className={`text-lg font-medium transition-colors py-2 ${
                dark ? 'border-b border-white/20' : 'border-b border-gray-200'
              } ${
                isActive("/careers")
                  ? `${dark ? 'text-white' : 'text-black'} font-bold`
                  : `${dark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`
              }`}
            >
              Careers
            </a>
            <button
              onClick={() => {
                toggleContact();
                closeMobileMenu();
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border border-transparent mt-2 ${dark ? 'bg-mind-green text-black hover:bg-black hover:text-mind-green hover:border-mind-green' : 'bg-mind-blue text-white hover:bg-black hover:text-mind-blue hover:border-mind-blue'}`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
