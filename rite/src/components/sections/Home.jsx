import { RevealOnScroll } from "../RevealOnScroll";
import { Navbar } from "../Navbar"; 

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-gray-200 overflow-hidden"
    >
      {/* Floating Glassmorphism Navbar */}
      <Navbar className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-white/10 backdrop-blur-lg py-3 px-6 flex justify-between items-center shadow-lg z-50 rounded-2xl border border-gray-800" />

      {/* Aesthetic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a2e] to-[#0a0a0a] opacity-50 pointer-events-none"></div>

      <RevealOnScroll>
        <div className="text-center z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Hi, I'm Durga Naga Sai
          </h1>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            A passionate student exploring the world of full-stack development.  
            I love experimenting with new technologies, building creative projects,  
            and continuously improving my skills to craft **beautiful and functional web experiences**.
          </p>

          {/* Modern Buttons with Premium Colors */}
          <div className="flex justify-center space-x-6 mt-8">
            {/* View Projects - Vibrant Neon */}
            <a
              href="#projects"
              className="relative py-4 px-12 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full transition-all duration-300
              before:absolute before:inset-0 before:rounded-full before:scale-105 before:bg-purple-400 before:opacity-0 before:transition-opacity before:duration-300 
              hover:before:opacity-50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]"
            >
              View Projects
            </a>

            {/* Contact Me - Soft Elegant Glow */}
            <a
              href="#contact"
              className="relative py-4 px-12 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-400 rounded-full transition-all duration-300
              before:absolute before:inset-0 before:rounded-full before:scale-105 before:bg-pink-400 before:opacity-0 before:transition-opacity before:duration-300 
              hover:before:opacity-50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
