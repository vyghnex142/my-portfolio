function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-intro">Hello, I’m</p>

          <h1>Vighnesh Gherkar</h1>

          <h2>Game Developer | AR/VR Developer</h2>

          <p className="hero-description">
            I build immersive interactive experiences using Unity, AR, VR, and
            real-time systems. My work combines gameplay design, technical
            implementation, and user-focused development to create engaging
            digital experiences across games and immersive media.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/Proflle/ProfilePhoto.jpg" alt="Vighnesh profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;