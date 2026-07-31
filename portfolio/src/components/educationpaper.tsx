import "./educationpaper.css";

export default function EducationPaper() {
  return (
    <article className="education-paper">
      <div className="paper-header">
        <div>
          <a className="educationtitle">Education</a>
        </div>

        <span className="year">2022–2026</span>
      </div>

      <div className="paper-body">
        {/* LEFT COLUMN */}
        <section className="left-column">

          <p>
            My journey in Information Technology began at Xavier University –
            Ateneo de Cagayan, where I pursued a Bachelor of Science in
            Information Technology from 2022 to 2026. Throughout my studies, I
            developed a strong passion for web development and discovered how
            thoughtful design and clean code work together to create meaningful
            digital experiences.
          </p>

          <p className="secondparagraph">
            Through academic projects, collaborative coursework, and continuous
            self-learning, I strengthened my problem-solving abilities,
            communication skills, and technical foundation. Every semester
            challenged me to think critically and build software that is both
            functional and user-centered.
          </p>

          <p className="subtitle">
            Bachelor of Science in Information Technology
          </p>
        </section>

        {/* RIGHT COLUMN */}
        <aside className="right-column">

          <div className="subject-group">
            <h4>Programming</h4>
            <ul>
              <li>Object-Oriented Programming</li>
              <li>Data Structures & Algorithms</li>
              <li>Application Development</li>
            </ul>
          </div>

          <div className="subject-group">
            <h4>Web Development</h4>
            <ul>
              <li>HTML, CSS & JavaScript</li>
              <li>Responsive Web Design</li>
              <li>Frontend Frameworks</li>
            </ul>
          </div>

          <div className="subject-group">
            <h4>Database Systems</h4>
            <ul>
              <li>SQL</li>
              <li>Database Design</li>
              <li>Database Management</li>
            </ul>
          </div>

        </aside>
      </div>
    </article>
  );
}