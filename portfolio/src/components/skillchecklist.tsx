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

  const completed = checked.filter(Boolean).length;

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

      <div className="progress-section">
        <p className="progress-title">Progress</p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${(completed / skills.length) * 100}%`,
            }}
          ></div>
        </div>

        <p className="progress-text">
          {completed} / {skills.length} Completed
        </p>
      </div>
    </div>
  );
}