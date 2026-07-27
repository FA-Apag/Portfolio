type Skill = {
  name: string;
  level: number; // out of 5
};

const skills: Skill[] = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 5 },
  { name: "TypeScript", level: 4 },
  { name: "JavaScript", level: 5 },
  { name: "Next.js", level: 4 },
  { name: "React", level: 4 },
  { name: "Tailwind CSS", level: 4 },
  { name: "Bootstrap", level: 4 },
];

export default function FrontendSkillCard() {
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
          <p className="info-value">Frontend</p>
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
        <span>Collection No. 9867</span>
      </div>
    </div>
  );
}