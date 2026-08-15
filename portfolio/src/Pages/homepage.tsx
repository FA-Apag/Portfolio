import { useEffect, useState } from "react";
import "../../style.css";
import WhoAmIFolder from "../components/WhoAmIFolder";
import ProjectFolder from "../components/ProjectFolder";
import ContactFolder from "@/components/ContactMeFolder";

interface HomepageProps {
  onRollComplete?: () => void;
  onRevealFolders?: () => void;
  foldersRevealed?: boolean;
}

const FolderIcon = ({ text, style, onClick }: { text: string; style: React.CSSProperties, onClick?: () => void }) => (
  <div className="absolute flex flex-col items-center hover:-translate-y-1 transition-transform cursor-pointer" style={style} onClick={onClick}>
    <svg width="64" height="64" viewBox="0 0 24 24" fill="#282828" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.17 6L11.17 8H20C21.1 8 22 8.9 22 10V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H7.17C7.7 4 8.21 4.21 8.59 4.59L9.17 6ZM4 8V18H20V10H10.83L8.83 8H4Z" fill="currentColor"/>
      <path d="M10.83 8H20V18H4V8H8.83L10.83 8Z" fill="currentColor"/>
    </svg>
    <span className="mt-2 text-sm text-[#282828] font-medium font-serif tracking-tight">{text}</span>
  </div>
);

export default function Homepage({
  onRevealFolders,
  foldersRevealed,
}: HomepageProps) {

  const [isWhoAmIOpen, setIsWhoAmIOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  useEffect(() => {
    if (onRevealFolders && !foldersRevealed) {
      const timer = setTimeout(() => {
        onRevealFolders();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [onRevealFolders, foldersRevealed]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full bg-transparent relative overflow-hidden">
      
      {/* Scattered Folders */}
      <FolderIcon text="contact_me" style={{ top: "25%", left: "25%" }} onClick={() => { setIsContactOpen(true);}}/>
      <FolderIcon text="recent_project" style={{ top: "20%", right: "10%" }} onClick={() => { setIsProjectOpen(true);}}/>
      <FolderIcon text="who_am_i?" style={{ bottom: "20%", left: "15%" }} onClick={() => setIsWhoAmIOpen(true)} />

      <div className="z-10 text-center flex flex-col items-center justify-center relative">
        
        {/* Animated Mouse Cursor */}
        <div className="absolute z-40 pointer-events-none animate-bounce" style={{ bottom: "10%", right: "2%", filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.2))" }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="white" stroke="#2b211e" strokeWidth="1.5" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.21V20.8C5.5 21.46 6.3 21.79 6.77 21.32L11.5 16.5H18.5C19.05 16.5 19.5 16.05 19.5 15.5V14.5C19.5 14.23 19.39 13.98 19.21 13.79L6.91 1.49C6.44 1.02 5.5 1.35 5.5 2.01V3.21Z"/>
          </svg>
        </div>

        <h1 
          className="text-[#3b2d28] font-bold tracking-tighter m-0" 
          style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", lineHeight: 1.1, fontFamily: "'Poppins', sans-serif" }}
        >
          Fullstack Developer
        </h1>
        <p 
          className="text-[#4a3b32] font-normal m-0 mt-1" 
          style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)", fontFamily: "'Poppins', sans-serif" }}
        >
          Frontend at heart, full-stack by practice
        </p>
      </div>

      {isWhoAmIOpen && (
        <WhoAmIFolder
          onClose={() => setIsWhoAmIOpen(false)}
        />
      )}

      {isProjectOpen && (
        <ProjectFolder
          onClose={() => setIsProjectOpen(false)}
        />
      )}

      {isContactOpen && (
        <ContactFolder
          onClose={() => setIsContactOpen(false)}
        />
      )}
    </section>
  );
}

