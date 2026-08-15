import { useState } from "react";
import "./projectpage.css";
type InternshipPageProps = {
  page: 1 | 2;
};

export default function InternshipPage({ page: initialPage = 1 }: InternshipPageProps) {
  const [page, setPage] = useState<1 | 2>(initialPage);
  return (
    <div
      className={`project-page project-page-${page}`}
      style={{
        backgroundColor: "#fefefe",
        width: "calc(30% + 840px)",
        marginLeft: "calc(35% - 420px)",
        border: "2px solid #1c1c1c",
        borderTop: "none",
        marginTop: "-2px",
      }}
    >


      {/* ================= PAGE 1 ================= */}

      {page === 1 && (
        <div className={`project-content project-content-${page}`}>
          <div className={`project-header project-header-${page}`}>
            <h1 className={`project-title project-title-${page}`}>
              Internship
            </h1>

            <p className={`project-subtitle project-subtitle-${page}`}>
              MeldCX Philippine Inc.
              <span> | 2026</span>
            </p>
          </div>

          <div className={`project-description project-description-${page}`}>
            <p>
              A web application developed during a four-month internship from August to November, focused on delivering responsive and reusable interfaces based on UI/UX designs created in Figma.
            </p>

            <p>
              I contributed to frontend development and backend integration, implementing application features and authentication and security mechanisms including JWT, OTP verification, and Keycloak. I also participated in testing, debugging, and troubleshooting while working within a Docker-based development environment.
            </p>

            <p>
             The project was developed collaboratively using Scrum and Agile practices, where I participated in requirements discussions, technical problem-solving, and feature development with the development team.
            </p>
          </div>

          <div className={`project-footer project-footer-${page}`}>
            <div className={`project-role project-role-${page}`}>
              <span className={`label label-${page}`}>ROLE</span>

              <h3 className={`project-role-title project-role-title-${page}`}>
                Full Stack Developer
              </h3>
            </div>

    <div className="page-navigation">
      <div className={`next-project next-project-${page}`}>
        <span className="next-arrow" onClick={() => setPage(2)}>→</span>
        <p className={`next-text next-text-${page}`}>Next page</p>
      </div>
    </div>
          </div>
        </div>
      )}

      {/* ================= PAGE 2 ================= */}

      {page === 2 && (
                <div className={`project-content project-content-3`}>
          <div className={`project-header project-header-3`}>
            <h1 className={`project-title project-title-3`}>
              Key Contributions
            </h1>
          </div>

          <div className={`contributions-list contributions-list-3`}>
            {[
              "Developed and maintained frontend components and application pages based on UI/UX designs created in Figma, focusing on responsive and reusable interfaces.",
              "Implemented frontend functionality and collaborated with developers to integrate application features and backend services.",
              "Contributed to backend authentication and security features, including JWT-based authentication, OTP verification, and Keycloak integration.",
              "Performed application testing, debugging, and troubleshooting to identify and resolve functional issues.",
              "Participated in Scrum meetings and Agile development processes, collaborating with team members to discuss progress, requirements, and technical issues.",
            ].map((item, index) => (
              <div
                key={index}
                className={`contribution-item contribution-item-3`}
              >
                <span className="contribution-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="contribution-text">{item}</p>
              </div>
            ))}
          </div>

          <div className={`project-footer project-footer-3`}>

            <div className={`tech-stack tech-stack-3`}>
              CSS / React / TypeScript/JavaScript / Figma / Keycloak / JWT / OTP / Docker / Git/GitHub / Tailwind /Storybook

            </div>

            <div className="page-navigation">
              <div className={`next-project next-project-${page}`}>
                <span className="prev-arrow" onClick={() => setPage(1)}>←</span>
                <p className={`next-text next-text-${page}`}>Previous page</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
