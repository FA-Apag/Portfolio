import { useState } from "react";
import IdentificationCard from "@/components/identificationcard";
import ApplicationLetter from "@/components/applicationletter";
import "../../style.css";

import "./aboutme.css";
import EducationPaper from "@/components/educationpaper";

export default function AboutMe() {
  const [frontPaper, setFrontPaper] = useState<"application" | "education">("application");

  return (
    <section className="about-page">
      <div className={`paper-stack ${frontPaper}-in-front`}>
        <button
          type="button"
          className="application-paper-trigger"
          onClick={() => setFrontPaper("application")}
          aria-label="Bring application letter to the front"
        >
          <ApplicationLetter />
        </button>
        <button
          type="button"
          className="education-paper-trigger"
          onClick={() => setFrontPaper("education")}
          aria-label="Bring education paper to the front"
        >
          <EducationPaper />
        </button>
      </div>
      <IdentificationCard  
        name={"farrah sophia a. apag"} 
        age={"22"} 
        gender={"female"} 
        ethnicity={"filipino"} 
        role={"fontend developer"} 
        basedin={"philippines"} 
        email={"fsa.apag@gmail.com"} 
        linkedin={"farrah apag"} 
        github={""} 
        issueddate={"2024-06-01"} 
        cardno={"01."}>    
      </IdentificationCard>
    </section>
  );
}
