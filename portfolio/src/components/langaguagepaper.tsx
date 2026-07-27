import "./languageSection.css";

export default function LanguageSection() {
  return (
    <section className="language-section">
      <div className="language-card left">
        <h2>English with Ease</h2>
        <p>
          English is the language I use most confidently in both speaking and
          writing. It allows me to communicate ideas clearly, collaborate
          effectively with others, and express myself in academic,
          professional, and everyday situations with confidence.
        </p>
      </div>

      <div className="language-card right">
        <h2>Tagalog sa Puso</h2>
        <p>
          Ang Tagalog ay mahalagang bahagi ng aking pang-araw-araw na buhay at
          pagkakakilanlan. Komportable akong gamitin ito sa pakikipag-usap sa
          pamilya, mga kaibigan, at komunidad, habang patuloy kong
          pinagyayaman ang aking kasanayan sa wika.
        </p>
      </div>
    </section>
  );
}