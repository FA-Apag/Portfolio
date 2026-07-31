import { useState } from "react";
import "./skillchecklist.css";

const skills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Critical Thinking",
  "Time Management",
  "Leadership",
  "Adaptability",
  "Creativity",
  "Emotional Intelligence",
  "Conflict Resolution",
  "Accountability",
  "Professionalism",
];

export default function SkillsChecklist() {
  const [checked, setChecked] = useState(Array(skills.length).fill(false));

  const toggleSkill = (index: number) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  return (
    <div className="checklist-card">
      <div className="header">
        <h1 className="title">CHECKLIST</h1>
        <p className="subtitle">Soft Skills</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <label key={skill} className="skill-item">
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() => toggleSkill(index)}
            />

            <span className={checked[index] ? "checked" : ""}>
              {skill}
            </span>
          </label>
        ))}
      </div>

      <p className="perfect-day-prompt">WRITE DOWN YOUR PERFECT DAY</p>
    </div>
  );
}
