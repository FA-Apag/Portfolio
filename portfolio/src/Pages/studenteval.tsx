import "./projectpage.css";
type StudentEvalPageProps = {
  page: 1 | 2;
};

export default function StudentEvalPage({ page }: StudentEvalPageProps) {
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
      <div className={`project-tab project-tab-${page}`}>
        <span className={`project-tab-title project-tab-title-${page}`}>
          Academic Student Evaluation System
        </span>
      </div>

      {/* ================= PAGE 1 ================= */}

      {page === 1 && (
        <div className={`project-content project-content-${page}`}>
          <div className={`project-header project-header-${page}`}>
            <h1 className={`project-title project-title-${page}`}>
              Academic Student Evaluation System
            </h1>

            <p className={`project-subtitle project-subtitle-${page}`}>
              School of Law · Xavier University – Ateneo de Cagayan
              <span> | 2024–2025</span>
            </p>
          </div>

          <div className={`project-description project-description-${page}`}>
            <p>
              A full-stack web application developed to streamline the
              academic evaluation process before student enrollment.
            </p>

            <p>
              The system enables faculty to review records, track failed
              subjects, monitor disciplinary cases, and validate subject
              prerequisites.
            </p>

            <p>
              It centralizes academic workflows, improves accuracy,
              and helps identify at-risk students.
            </p>
          </div>

          <div className={`project-footer project-footer-${page}`}>
            <div className={`project-role project-role-${page}`}>
              <span className={`label label-${page}`}>ROLE</span>

              <h3 className={`project-role-title project-role-title-${page}`}>
                Team Leader & Full Stack Developer
              </h3>
            </div>

            <div className={`next-project next-project-${page}`}>
              <span className={`next-arrow next-arrow-${page}`}>➔</span>
              <p className={`next-text next-text-${page}`}>
                key contributions
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= PAGE 2 ================= */}

      {page === 2 && (
        <div className={`project-content project-content-${page}`}>
          <div className={`project-header project-header-${page}`}>
            <h1 className={`project-title project-title-${page}`}>
              Key Contributions
            </h1>
          </div>

          <div className={`contributions-list contributions-list-${page}`}>
            {[
              "Academic Student Evaluation System",
              "Built interactive forms and CRUD functionality using JavaScript.",
              "Integrated frontend components with MongoDB-powered APIs.",
              "Implemented secure authentication and role-based access control.",
              "Led a team of four developers throughout the project.",
            ].map((item, index) => (
              <div
                key={index}
                className={`contribution-item contribution-item-${page}`}
              >
                <span className="contribution-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="contribution-text">{item}</p>
              </div>
            ))}
          </div>

          <div className={`project-footer project-footer-${page}`}>
            <div className={`previous-project previous-project-${page}`}>
              <span className="previous-arrow">⬅</span>
              <p className="previous-text">about project</p>
            </div>

            <div className={`tech-stack tech-stack-${page}`}>
              Python / CSS / MongoDB / JavaScript / HTML
            </div>
          </div>
        </div>
      )}
    </div>
  );
}