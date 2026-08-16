import "./introduction.css";
import "./folderwidth.css";
import profileImg from "../assets/introductionpicture.png"; // adjust the path
import arrow from "../assets/arrowname.png"; // adjust the path
export default function IntroductionPage() {
  return (

    <div
      className="introduction folder-width-1"
      style={{
        backgroundColor: "#fefefe",
        borderTop: "none",
        padding: "20px 60px 0px 60px",
        position: "relative",
        borderLeft: "2px solid #1c1c1c",
        borderRight: "2px solid #1c1c1c",
        borderBottom: "2px solid #1c1c1c",

        zIndex: 1,
        marginTop: "-2px",
        boxSizing: "border-box",
      }}
    >
      
      <div className="introduction-content">
        {/* Left Column */}
        <div className="intro-text">
          <p
            style={{
              color: "#30221E",
              fontSize: "70px",
              fontFamily: "Poppins",
              fontWeight: 800,
              marginTop: "-20px",
              marginBottom: "28px",
            }}
          >
            hello!
          </p>
          
          <div className="intro-paragraphs">
          <p>
            I'm Farrah Apag, a frontend developer and UI designer passionate
            about creating clean, intuitive, and engaging digital experiences.
          </p>

          <p>
            I enjoy transforming ideas into responsive websites that combine thoughtful design with maintainable code.
          </p>

          <p>
            Whether I'm designing interfaces, writing code, or learning new
            technologies, I believe great products come from curiosity,
            creativity, and attention to detail.
          </p>
          </div>
        </div>

        {/* Right Column */}
       <div className="intro-image">
        <img src={profileImg} alt="Farrah Apag" />

  <span className="note name ">farrah<br/>apag</span>

  <span className="note role">
    frontend<br/>developer
  </span>

  <span className="note age">
    22 years<br/>old
  </span>

  <span className="note graduate">
    Bachelor of<br/> Information Technology <br/>graduate
  </span>

  {/* Arrows */}

  <img src={arrow} className="arrow arrow-name"/>
  <img src={arrow} className="arrow arrow-role"/>
  <img src={arrow} className="arrow arrow-age"/>
  <img src={arrow} className="arrow arrow-grad"/>
</div>
      </div>
    </div>

  );
}