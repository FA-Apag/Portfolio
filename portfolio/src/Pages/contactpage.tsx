import IdentificationCard from "@/components/identificationcard";
import ApplicationLetter from "@/components/applicationletter";
import "../../style.css";

import "./contactpage.css";

export default function AboutMe() {
  return (
    <section className="contact-page">
      <ApplicationLetter name={"farrah sophia a. apag"}></ApplicationLetter>
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