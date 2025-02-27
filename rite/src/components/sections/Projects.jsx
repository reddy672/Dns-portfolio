import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-gray-200 py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Cloud Platform",
                description:
                  "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
                tech: ["React", "Node.js", "AWS", "Docker"],
              },
              {
                title: "AI Analytics Dashboard",
                description:
                  "ML-powered data visualization platform with predictive analytics and interactive reports.",
                tech: ["Python", "TensorFlow", "D3.js", "Flask"],
              },
              {
                title: "E-Commerce Web App",
                description:
                  "Full-stack e-commerce with modern UI, secure payment integration, and customizable inventory.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
              },
              {
                title: "Real-Time Chat App",
                description:
                  "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
                tech: ["Socket.IO", "Express", "React", "Redis"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-800 bg-white/5 backdrop-blur-md
                hover:-translate-y-1 hover:border-pink-400/30 hover:shadow-[0_4px_20px_rgba(236,72,153,0.3)]
                transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm
                      transition hover:bg-pink-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(236,72,153,0.3)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
