function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <div className="contact-card">

        {/* Description */}
        <p className="contact-text">
          Seeking opportunities in AR/VR and game development—open to projects, collaborations, and innovative work.
        </p>

        {/* Contact Links */}
        <div className="contact-links">

          <button
            className="contact-item contact-button"
            onClick={() => {
              navigator.clipboard.writeText("vighneshgherkar18@gmail.com");
            }}
          >
            📧 vighneshgherkar18@gmail.com
          </button>

          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vighnesh-gherkar"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            🔗 LinkedIn
          </a>

        </div>

        {/* Resume Actions */}
        <div className="contact-actions">

          <a href="/Resume_Vighnesh_TUI.pdf" className="btn" download>
            Download Resume
          </a>

          <a
            href="/Resume_Vighnesh_TUI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;