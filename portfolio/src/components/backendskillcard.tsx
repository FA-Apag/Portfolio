import "./skillcard.css";

type Skill = {
  name: string;
  level: number; // out of 5
};

const skills: Skill[] = [
  { name: "Node.js", level: 4 },
  { name: "Python", level: 2 },
  { name: "JWT (JSON Web Tokens)", level: 3 },
  { name: "RBAC (Role-Based Access Control)", level: 3 },
  { name: "MySQL", level: 5 },
  { name: "MongoDB", level: 4 },
];

export default function BackendSkillCard() {
  return (
    <div className="w-[340px] rounded-md border-[3px] border-black bg-[#F6D7DF] shadow-xl overflow-hidden">
      {/* Header */}
      <div className="skillcard-header">
          <h1 className="skillcard-header-title">
          Checked Skills 
        </h1>
        <p className="skillcard-header-subtitle">
          Skill Collection Card
        </p>
      </div>

      {/* Information */}
      <div className="skillcard-info-section">
        <div className="skillcard-info-box">
          <p className="skillcard-info-label">Category</p>
          <p className="skillcard-info-value">Backend</p>
        </div>

        <div className="skillcard-info-box">
          <p className="skillcard-info-label">Owner</p>
          <p className="skillcard-info-value">Farrah Apag</p>
        </div>
      </div>

      {/* Skills */}
      <div className="text-sm">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between border-b border-dashed border-[#8B5A46] px-4 py-2"
          >
            <span className="font-medium uppercase">
              {skill.name}
            </span>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((dot) => (
                <span
                  key={dot}
                  className={`h-3 w-3 rounded-full border border-[#3D2A2A]
                  ${
                    dot <= skill.level
                      ? "bg-[#3D2A2A]"
                      : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="skillcard-footer">
        <span>Issued 2025</span>
        <span>Collection No. 9866</span>
      </div>
    </div>
  );
}
