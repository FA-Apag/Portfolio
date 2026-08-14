import "./contactpage.css";

import personImg from "../assets/contactperson.png";
import gmailIcon from "../assets/Gmail.png";
import linkedinIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/GitHub.png";
import phoneIcon from "../assets/Phone.png";
import resumeIcon from "../assets/Folder.png";

export default function ContactPage() {
  return (
    <div
      className="contact"
      style={{
        backgroundColor: "#FEFEFE",
        width: "calc(30% + 760px)",
        marginLeft: "calc(35% - 380px)",
        borderLeft: "2px solid #1c1c1c",
        borderRight: "2px solid #1c1c1c",
        borderBottom: "2px solid #1c1c1c",
        padding: "0px 10px 10px 10px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div className="contact-content">
        {/* Left Side */}
        <div className="contact-text">
          <h1>
            Interested in
            <br />
            Working Together?
          </h1>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          
          <svg className="plumbob-icon" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,0 100,70 50,200" fill="#66BB6A" />
            <polygon points="0,70 50,0 50,200" fill="#2E7D32" />
            <polygon points="50,0 75,70 50,200" fill="#81C784" />
          </svg>

          <img
            src={personImg}
            alt="Farrah Apag"
            className="contact-person"
          />

          <div
            className="contact-pill email"
          >
            <img src={gmailIcon} alt="" />
            <span>fsa.apag@gmail.com</span>
          </div>

          <a
            href="https://www.linkedin.com/in/farrah-apag-b4b669371"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill linkedin"
          >
            <img src={linkedinIcon} alt="" />
            <span>Farrah Apag</span>
          </a>

          <div
            className="contact-pill phone"
          >
            <img src={phoneIcon} alt="" />
            <span>09369443744</span>
          </div>

          <a
            href="https://github.com/farrahApag"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill github"
          >
            <img src={githubIcon} alt="" />
            <span>farrahApag</span>
          </a>

          <a
            href="/FarrahApag_CV.pdf"
            download="FarrahApag_CV.pdf"
            className="contact-pill resume"
          >
            <img src={resumeIcon} alt="Resume" />
            <span>Download CV</span>
          </a>

          <a
            href="https://github.com/farrahApag"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pill github-2"
          >
            <img src={githubIcon} alt="" />
            <span>FA-Apag</span>
          </a>
        </div>
      </div>
    </div>
  );
}