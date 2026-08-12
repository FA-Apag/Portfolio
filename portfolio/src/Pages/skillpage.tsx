import "./skillpage.css";
import { useState } from "react";

import frontendImg from "../assets/frontend.png";
import designImg from "../assets/design.png";
import backendImg from "../assets/backend.png";
import toolsImg from "../assets/tools.png";
import communicationImg from "../assets/communication.png";
import collaborationImg from "../assets/collaboration.png";
import problemsolvingImg from "../assets/problemsolving.png";
import professionalismImg from "../assets/professionalism.png";
type SkillCategoryProps = {
  image: string;
  title: string;
  skills: string[];
  className?: string;
};

function SkillCategory({
  image,
  title,
  skills,
  className
}: SkillCategoryProps) {
  return (
    <div className="skill-card">
      <img src={image} alt={title} className={`skill-image ${className ?? ""}`} />

      <a>{title}</a>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={skill} className="skill-item">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const [page, setPage] = useState(1);
  return (
    <div className="skills-page"
        style={{
        backgroundColor: "#fefefe",
        width: "calc(30% + 840px)",
        marginLeft: "calc(35% - 420px)",
        border: "2px solid #1c1c1c",
        borderTop: "none",
        marginTop: "-2px",
      }}
    >
      {page === 1 && (
  <>
    <h1 className="skills-title">
      Tools & Technologies
    </h1>

    <div className="skills-grid">

      <SkillCategory
        className="skill-frontend"
        image={frontendImg}
        title="Frontend"
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Bootstrap",
        ]}
      />

      <SkillCategory
        className="skill-design"
        image={designImg}
        title="Design"
        skills={[
          "Figma",
          "Canva",
          "UI Design",
          "UX Design",
          "Adobe Photoshop",
        ]}
      />

      <SkillCategory
        className="skill-backend"
        image={backendImg}
        title="Backend"
        skills={[
          "Node.js",
          "Express.js",
          "MySQL",
          "REST APIs",
        ]}
      />

      <SkillCategory
        className="skill-tools"
        image={toolsImg}
        title="Tools"
        skills={[
          "Git",
          "GitHub",
          "VS Code",
          "Docker",
          "Postman",
          "npm",
          "Chrome DevTools",
          "Vercel",
        ]}
      />

    </div>

    <p
      className="page-number"
      style={{
        fontSize: "24px",
        color: "#1c1c1c",
        cursor: "pointer",
      }}
      onClick={() => setPage(2)}
    >
      →
    </p>
    
  </>
)}
{page === 2 && (
  <>
    <h1 className="skills-title">The Way I Work</h1>

    <div className="skills-grid">
      <SkillCategory
        image={communicationImg}
        title="Communication"
        className="skill-frontend"
        skills={[
          "Verbal Communication",
          "Written Communication",
          "Active Listening",
          "Presentation Skills",
        ]}
      />

      <SkillCategory
        image={collaborationImg}
        title="Collaboration"
        className="skill-design"
        skills={[
          "Teamwork",
          "Leadership",
          "Empathy",
          "Conflict Resolution",
        ]}
      />

      <SkillCategory
        image={problemsolvingImg}
        title="Problem Solving"
        className="skill-backend"
        skills={[
          "Critical Thinking",
          "Analytical Thinking",
          "Creativity",
          "Decision Making",
        ]}
      />

      <SkillCategory
        image={professionalismImg}
        title="Professionalism"
        className="skill-tools"
        skills={[
          "Time Management",
          "Adaptability",
          "Attention to Detail",
          "Continuous Learning",
        ]}
      />
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p
        className="page-number"
        style={{
          fontSize: "24px",
          color: "#1c1c1c",
          cursor: "pointer",
        }}
        onClick={() => setPage(1)}
      >
        ←
      </p>
    </div>
  </>
)}
</div>
  );
}
