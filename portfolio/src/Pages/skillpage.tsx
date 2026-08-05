import "./skillpage.css";

import frontendImg from "../assets/frontend.png";
import designImg from "../assets/design.png";
import backendImg from "../assets/backend.png";
import toolsImg from "../assets/tools.png";

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

      <h3>{title}</h3>

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
  return (
    <div className="skills-page">

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
          ]}
        />

      </div>

      <p className="page-number">PAGE 01 ↩</p>

    </div>
  );
}