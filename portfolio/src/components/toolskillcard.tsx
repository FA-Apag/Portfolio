import "./skills.css";

type Skill = {
  name: string;
  level: number; // out of 5
};

const skills: Skill[] = [
  { name: "Docker", level: 2 },
  { name: "GitHub", level: 3 },
  { name: "VS Code", level: 5 },
  { name: "Postman", level: 3 },
  { name: "", level: 0 },
  { name: "", level: 0 },  
];

export default function ToolSkillCard() {
  return (
    <div className="w-[340px] rounded-md border-[3px] border-black bg-[#F6D7DF] shadow-xl overflow-hidden">
      {/* Header */}
      <div className="header">
        <h1 className="header-title">
          Checked Skills 
        </h1>
        <p className="header-subtitle">
          Skill Collection Card
        </p>
      </div>

      {/* Information */}
      <div className="info-section">
        <div className="info-box">
          <p className="info-label">Category</p>
          <p className="info-value">Design</p>
        </div>

        <div className="p-2">
          <p className="info-label">Owner</p>
          <p className="info-value">Farrah Apag</p>
        </div>
      </div>

      {/* Skills */}
      <div className="text-sm">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between border-b border-dashed border-[#B98999] px-4 py-2"
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
      <div className="footer">
        <span>Issued 2025</span>
        <span>Collection No. 9869</span>
      </div>
    </div>
  );
}