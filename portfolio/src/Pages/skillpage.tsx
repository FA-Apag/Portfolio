import { useState } from "react";
import FrontendSkillCard from "../components/frontendskillcard";
import BackendSkillCard from "../components/backendskillcard";
import DesignSkillCard from "@/components/designskillcard";
import TollSkillCard from "@/components/toolskillcard";
import SkillsChecklist from "@/components/skillchecklist";
import LanguageSection from "@/components/langaguagepaper";
import "./skillpage.css";

export default function Skill() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    <FrontendSkillCard />,
    <BackendSkillCard />,
    <DesignSkillCard />,
    <TollSkillCard />,
    <SkillsChecklist />
  ];

  return (
    <div className="skill-page" style={{ minHeight: '100vh' }}>
      <LanguageSection />
      
      {/* DASHBOARD CONTENT */}
      <main className="dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`cursor-pointer ${activeCard === index ? "active-card" : ""}`}
            onClick={() => setActiveCard(index === activeCard ? null : index)}
          >
            {card}
          </div>
        ))}
      </main>
    </div>
  );
}
