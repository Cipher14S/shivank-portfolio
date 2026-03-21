import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">

        <div className="skills-header">
          <div className="skills-accent"></div>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Languages</h3>
            <p>C++, Python, JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express, REST APIs</p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, HTML, CSS</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, Linux</p>
          </div>

          <div className="skill-card">
            <h3>Problem Solving</h3>
            <p>DSA, Competitive Programming</p>
          </div>

        </div>

      </div>
    </section>
  );
}