import "./contactletter.css";

export default function ContactLetter() {
  return (
    <main className="contact-letter">
      <section className="contact-left">
      <header className="letter-title">
        COVER
        <br />
        LETTER
      </header>

        <p className="letter-body">
          Have a project in mind? Fill out the form and let's create something
          great together.
        </p>

        <div className="contact-options">
          <a href="https://github.com/FA-Apag" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.53 9.53 0 0 1 12 6.8c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.79c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/farrah-apag/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5.3 3.5A1.8 1.8 0 1 1 5.3 7a1.8 1.8 0 0 1 0-3.5ZM3.8 8.4h3V20h-3V8.4ZM8.7 8.4h2.9V10h.04c.4-.76 1.39-1.56 2.86-1.56 3.06 0 3.63 2.01 3.63 4.63V20h-3v-6.14c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V20h-3V8.4Z" />
            </svg>
          </a>
          <a href="mailto:fsa.apag@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.5 5.5h17a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Zm0 2v.2l8.5 5.5 8.5-5.5v-.2h-17Zm17 8.1-6.89-4.46L12 12.16l-1.61-1.02L3.5 15.6v.9h17v-.9Z" />
            </svg>
          </a>
        </div>
      </section>

      <section className="contact-right">
        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              type="text"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={3}
            />
          </div>

          <button type="submit">send</button>
        </form>
      </section>
    </main>
  );
}
