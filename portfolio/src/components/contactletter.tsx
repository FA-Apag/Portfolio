import "./contactLetter.css";

export default function ContactLetter() {
  return (
    <main className="contact-letter">
      <section className="contact-left">
        <h1>
          CONTACT
          <br />
          LETTER
        </h1>

        <h2>
          Have a project in mind? Fill out the form and let's create something
          great together.
        </h2>

        <div className="contact-options">
          <label>
            <input type="checkbox" />
            I'd like to discuss a project
          </label>

          <label>
            <input type="checkbox" />
            Freelance Opportunity
          </label>

          <label>
            <input type="checkbox" />
            Full-time Position
          </label>

          <label>
            <input type="checkbox" />
            Just Saying Hello
          </label>
        </div>
      </section>

      <section className="contact-right">
        <form>
          <div className="input-group">
            <label htmlFor="name">First name*</label>
            <input
              id="name"
              type="text"
              placeholder=""
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address*</label>
            <input
              id="email"
              type="email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
            />
          </div>

          <button type="submit">send</button>
        </form>
      </section>
    </main>
  );
}