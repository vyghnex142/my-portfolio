import { useMemo, useState } from "react";

const initialSkills = [
  { id: 1, name: "Unity", x: 120, y: 70, collected: false },
  { id: 2, name: "AR", x: 500, y: 120, collected: false },
  { id: 3, name: "C#", x: 220, y: 300, collected: false },
  { id: 4, name: "VR", x: 560, y: 320, collected: false },
];

function Interactive() {
  const [position, setPosition] = useState({ x: 40, y: 180 });
  const [skills, setSkills] = useState(initialSkills);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - 21;
    const y = e.clientY - rect.top - 21;

    setPosition({ x, y });

    setSkills((prevSkills) =>
      prevSkills.map((skill) => {
        const dx = x - skill.x;
        const dy = y - skill.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50 && !skill.collected) {
          return { ...skill, collected: true };
        }

        return skill;
      })
    );
  };

  const collectedCount = useMemo(
    () => skills.filter((skill) => skill.collected).length,
    [skills]
  );

  const unlockedSkills = useMemo(
    () => skills.filter((skill) => skill.collected),
    [skills]
  );

  const allCollected = collectedCount === skills.length;

  const handleRestart = () => {
    setSkills(initialSkills.map((skill) => ({ ...skill, collected: false })));
    setPosition({ x: 40, y: 180 });
  };

  return (
    <section id="interactive" className="section">
      <h2>Interactive Section</h2>
      <p className="interactive-text">
        Move through the space and collect skill orbs to unlock my technical profile.
      </p>

      <div className="interactive-topbar">
        <div className="interactive-score-card">
          <span className="score-label">Skills Collected</span>
          <span className="score-value">
            {collectedCount} / {skills.length}
          </span>
        </div>
      </div>

      <div className="interactive-layout">
        <div className="interactive-game-area" onMouseMove={handleMouseMove}>
          <div
            className="interactive-character"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          ></div>

          {skills.map(
            (skill) =>
              !skill.collected && (
                <div
                  key={skill.id}
                  className="interactive-skill"
                  style={{
                    left: `${skill.x}px`,
                    top: `${skill.y}px`,
                  }}
                >
                  {skill.name}
                </div>
              )
          )}

          {allCollected && (
            <div className="interactive-complete-card">
              <h3>Skills Unlocked</h3>
              <p>You collected all core skills successfully.</p>
              <button className="interactive-restart-btn" onClick={handleRestart}>
                Play Again
              </button>
            </div>
          )}
        </div>

        <div className="interactive-unlocked-panel">
          <h3>Unlocked Skills</h3>

          {unlockedSkills.length === 0 ? (
            <p className="interactive-empty-text">
              Start collecting skills to reveal them here.
            </p>
          ) : (
            <div className="interactive-unlocked-tags">
              {unlockedSkills.map((skill) => (
                <span key={skill.id} className="interactive-unlocked-tag">
                  {skill.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Interactive;