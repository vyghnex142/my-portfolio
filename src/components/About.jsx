function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-card">
          <p>
            I am a Game Developer and AR/VR Developer with a strong interest in
            building immersive, interactive, and technically refined digital
            experiences. My work primarily focuses on Unity-based development,
            where I combine software engineering principles with creative design
            to develop applications that are both functional and engaging.
          </p>

          <p>
            My background in Electronics and Communication Engineering gave me a
            solid technical foundation in signal processing, embedded systems,
            communication principles, and problem-solving. Later, through my
            Master’s in Media Engineering, I expanded into game development,
            augmented reality, virtual reality, multimedia systems, and
            real-time interactive applications.
          </p>

          <p>
            I enjoy working on projects that bring together gameplay mechanics,
            spatial interaction, networking, multimedia processing, and user
            experience design. I am especially interested in creating systems
            that feel immersive, intuitive, and polished, whether for games,
            AR/VR experiences, or interactive media applications.
          </p>
        </div>

        <div className="about-highlights">
          <div className="about-highlight-card">
            <h3>Core Focus</h3>
            <p>Game Development, AR/VR Applications, Unity Development , Unreal Development</p>
          </div>

          <div className="about-highlight-card">
            <h3>Technical Skills</h3>
            <p>C#, C++, Python, Unity, Unreal, Git, Blender, Photon Networking</p>
          </div>

          <h3>Interests</h3>

          <div className="about-tags">
            <span>Game Development</span>
            <span>Level Design</span>
            <span>AR/VR Interaction</span>
            <span>Gameplay Systems</span>
            <span>Immersive Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;