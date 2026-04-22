import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Interactive from "./components/Interactive";
import Contact from "./components/Contact";

function App() {
  const [unlockedSkills, setUnlockedSkills] = useState([]);
  const [pulse, setPulse] = useState(false);

useEffect(() => {
  const sectionSkills = {
    hero: ["Game Dev", "Unity"],
    about: ["Problem Solving", "Interactive Systems"],
    projects: ["AR", "VR", "C#", "Photon"],
    education: ["Signal Processing", "Embedded Systems", "Python"],
    contact: ["Git", "Collaboration"],
  };

  const unlockedSections = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;

        if (
          entry.isIntersecting &&
          sectionId &&
          !unlockedSections.has(sectionId)
        ) {
          unlockedSections.add(sectionId);

          const skills = sectionSkills[sectionId] || [];

          setUnlockedSkills((prev) => {
            const updated = [...prev];
            let added = false;

            skills.forEach((skill) => {
              if (!updated.includes(skill)) {
                updated.push(skill);
                added = true;
        
              }
            });

            if (added) {
              setPulse(true);
              setTimeout(() => setPulse(false), 300);
            }

            return updated;
          });
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -15% 0px",
    }
  );

  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);


  return (
    <div className="app">
      <div className="animated-bg"></div>
      <div className="mouse-glow"></div>
      <div
        className={`skill-hud ${pulse ? "hud-pulse" : ""}`}
        style={{
          position: "fixed",
          top: "110px",
          right: "20px",
          left: "auto",
          width: "220px",
          maxWidth: "220px",
          zIndex: 900,
        }}
      >
        <div className="skill-hud-tags">
          {unlockedSkills.map((skill, index) => (
            <span key={index} className="skill-hud-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Interactive />
      <Contact />
    </div>
  );
}

export default App;