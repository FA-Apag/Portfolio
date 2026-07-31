import "./applicationletter.css";

export default function ApplicationLetter() {
  return (
    <main className="application-letter">
      <header className="applicationletter-title">
        COVER
        <br />
        LETTER
      </header>

      <section className="applicationletter-body">
        <p className="applicationletter-greeting">Dear Hiring Manager,</p>

        <p>
          Thank you for taking the time to explore my portfolio. This
          collection represents more than a list of projects. It reflects my
          growth as a developer, the challenges I've embraced, and the skills
          I've built through continuous learning and hands-on experience.
        </p>

        <p>
          I enjoy creating web applications that are both functional and
          thoughtful. Whether I'm building responsive interfaces, solving
          technical problems, or refining user experiences, I value writing
          clean, maintainable code and constantly improving my craft. Every
          project included here has contributed to my understanding of modern
          web development and my approach to creating meaningful digital
          experiences.
        </p>

      </section>
    </main>
  );
}
