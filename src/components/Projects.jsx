import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedProject]);

  const projectList = [
    {
      title: "AR Ludo Game",
      description:
        "A cross-platform augmented reality multiplayer Ludo game built for Meta Quest 3 and Android using Unity and Photon networking.",
      longDescription:
        "This project is a cross-platform augmented reality multiplayer Ludo game developed using Unity 3D for Meta Quest 3 and Android devices. Photon networking was integrated to synchronize gameplay state across multiple users, including lobby flow, turn handling, dice roll events, and piece movement. The experience also includes animated dice interactions, responsive multiplayer state updates, ambient background audio, gameplay sound effects, and win-state feedback to create a polished and immersive AR board game experience.",
      image: "/AR_ludo/ARLudo.jpeg",
      tech: ["Unity", "AR", "Photon", "C#", "Meta Quest 3", "Android"],
      videos: [
        {
          src: "/AR_ludo/Game-play.mp4",
          title: "Gameplay Demo",
        },
        {
          src: "/AR_ludo/Win_ani.mp4",
          title: "Win Animation",
        },
      ],
      gallery: [
        {
          image: "/AR_ludo/Lobby.jpeg",
          title: "Lobby View",
          description:
            "Multiplayer lobby used for room flow, session setup, and match initialization before gameplay begins.",
        },
        {
          image: "/AR_ludo/Game.jpeg",
          title: "Gameplay Synchronization",
          description:
            "Core AR gameplay showing synchronized turns, dice events, and piece movement across connected users.",
        },
      ],
    },
    {
      title: "AR Portals",
      description:
        "An augmented reality portal experience that blends physical and virtual space through immersive scene transitions.",
      longDescription:
        "AR Portals explores the concept of connecting real and virtual space through interactive portal-based AR experiences. The project was built in Unity and focuses on spatial placement, visual transition, and user immersion. It demonstrates how portals can be used to create a strong sense of depth and scene continuity while maintaining an intuitive AR interaction flow.",
      image: "/Ar_Portals/DarkMine.png",
      tech: ["Unity", "AR"],
      videos: [],
      gallery: [
        {
          image: "/Ar_Portals/AR Portal.gif",
          title: "Portal Effect",
          description:
            "Animated portal transition that visually connects real-world space with a virtual environment.",
        },
        {
          image: "/Ar_Portals/DarkMine.png",
          title: "Environment View",
          description:
            "A portal scene showing environmental depth, mood, and immersive world-building inside AR space.",
        },
      ],
    },
    {
      title: "Miguel's Adventure",
      description:
        "A Unity platformer prototype focused on player movement, level interaction, and gameplay feedback.",
      longDescription:
        "Miguel's Adventure is a gameplay-focused Unity prototype designed to explore core platformer mechanics, level progression, and user feedback. The project includes movement systems, level interaction, visual readability, and gameplay flow improvements. It was built to strengthen design and implementation skills around game feel, scene interaction, and responsive player control.",
      image: "/Miguels_Adv/Miguelsad.jpeg",
      tech: ["Unity", "C#"],
      videos: [],
      gallery: [
        {
          image: "/Miguels_Adv/Bosslevel.jpeg",
          title: "Boss Level",
          description:
            "A gameplay area designed to test encounter pacing, scene composition, and player challenge progression.",
        },
        {
          image: "/Miguels_Adv/L-2.jpeg",
          title: "Level 2",
          description:
            "A progression section focusing on movement flow, obstacle placement, and gameplay readability.",
        },
        {
          image: "/Miguels_Adv/level1.jpeg",
          title: "Level 1",
          description:
            "An early gameplay section used to establish core mechanics, controls, and environmental interaction.",
        },
        {
          image: "/Miguels_Adv/Level2.jpeg",
          title: "Additional Gameplay Scene",
          description:
            "Another gameplay view showing environment layout and scene-based progression within the prototype.",
        },
      ],
    },
  ];

  return (
    <>
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span>View Details</span>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject &&
        createPortal(
          <div
            className="popup-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="popup-card popup-scroll"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="popup-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <div className="popup-header">
                <h3>{selectedProject.title}</h3>
                <p className="popup-subtext">Interactive project showcase</p>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="popup-image"
              />

              <p>{selectedProject.longDescription}</p>

              <div className="tech-tags popup-tags">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject.videos.length > 0 && (
                <div className="popup-section">
                  <h4>Project Videos</h4>

                  {selectedProject.videos.map((video, index) => (
                    <div key={index} className="popup-gallery-card">
                      <div className="popup-video-wrapper">
                        <video className="popup-video" controls preload="metadata">
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>

                      <div className="popup-gallery-content">
                        <h5>{video.title}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="popup-section">
                <h4>Gallery</h4>

                <div className="popup-gallery">
                  {selectedProject.gallery.map((item, index) => (
                    <div key={index} className="popup-gallery-card">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="popup-gallery-image"
                      />

                      <div className="popup-gallery-content">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Projects;