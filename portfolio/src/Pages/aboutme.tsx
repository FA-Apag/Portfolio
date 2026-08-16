import "./aboutme.css";
import "./folderwidth.css";
import camera from "../assets/camera.png"; 
import certificateaward from "../assets/certificateaward.jpg"; 
import ceremonyaward from "../assets/ceremonyaward.jpg"; 
import groupaward from "../assets/groupeaward.jpg"; 
import gradpic from "../assets/gradpic.jpg"; 
import { useState } from "react";

export default function AboutMePage() {
  const photos = [
  gradpic,
  groupaward,
  ceremonyaward,
  certificateaward,
];

const [currentPhoto, setCurrentPhoto] = useState(0);

const nextPhoto = () => {
  setCurrentPhoto((prev) => (prev + 1) % photos.length);
};
  return (
    <div
      className="aboutme folder-width-2"
      style={{
        backgroundColor: "#fefefe",
        border: "2px solid #1c1c1c",
        borderTop: "none",
        borderRadius: "0 0 10px 10px",
        padding: "50px 60px",
        marginTop: "-2px",
      }}
    >
      {/* Left */}
    <div className="aboutme-image" onClick={nextPhoto}>
      <img src={camera} alt="Camera" className="camera" />

      <div className="camera-screen">
        <img
          src={photos[currentPhoto]}
          alt="Memory"
          className="camera-photo"
        />
      </div>
    </div>

      {/* Right */}
      <div className="aboutme-info">

        <section>
          <p className="aboutmetitle">EDUCATION</p>

          <p className="aboutmeInfo">Xavier University – Ateneo de Cagayan</p>
          <p className="aboutmeInfo">Bachelor of Information Technology 2022–2026</p>
        </section>

        <section>
          <p className="aboutmetitle">LANGUAGE</p>

          <p className="aboutmeInfo">Tagalog · Native</p>
          <p className="aboutmeInfo">English · C1 Advanced</p>
        </section>
        
        <section>
          <p className="aboutmetitle">ORIGIN</p>

          <p className="aboutmeInfo">  [ Ethnicity ] Filipino</p>
          <p className="aboutmeInfo"> [ Based In ] Philippines</p>
        </section>
      </div>
    </div>
  );
}