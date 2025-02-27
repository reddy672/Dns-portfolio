import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 50 },
    { name: "Node.js", percentage: 60 },
    { name: "MongoDB", percentage: 80 },
    { name: "SQL", percentage: 70 },
    { name: "Python", percentage: 60 },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-[#0a0a0a] text-gray-200">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-gray-700 bg-white/5 shadow-lg hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a B.Tech 3rd-year student in Information Technology at Sasi Institute of Technology.  
              Passionate about web development, cloud computing, and machine learning,  
              I'm continuously learning and experimenting with new technologies to build creative and scalable solutions.
            </p>

            {/* Skill Progress Bars with Percentage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-gray-400 text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-400 h-2.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Internships */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-gray-700 bg-white/5 shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>B.Tech in IT</strong> - Sasi Institute of Technology (Ongoing)</li>
                <li><strong>Diploma</strong> - BVC College, Rajahmundry</li>
                <li><strong>SSC</strong> - Govt Boys High School, Rajahmundry</li>
                <li>Relevant Coursework: Web Development, Python, C++ (Currently Learning)</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-gray-700 bg-white/5 shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📌 Internships</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>ExcelR</strong> - Data Science & Machine Learning</li>
                <li><strong>AWS</strong> - Cloud & Machine Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
