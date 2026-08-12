import { useState } from "react";
import Folder from "./folder";
import "./WhoAmIFolder.css"
import ContactPage from "@/Pages/contactpage";

export default function ContactFolder({ onClose }: { onClose: () => void }) {
  const [introHovered, setIntroHovered] = useState(false);
  const [introPinned] = useState(false);

  const [activePage, setActivePage] = useState<string | null>(null);

  const showIntro = introHovered && activePage !== 'intro';


  if (activePage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[4px] animate-in fade-in duration-300" onClick={onClose}>
        
        <div 
          className="relative w-full max-w-[1400px] h-[90vh] overflow-y-auto bg-transparent flex justify-center animate-in zoom-in-95 duration-300 rounded-xl scrollbar-hide"
          onClick={e => e.stopPropagation()}
        >
          
          <button 
            onClick={() => setActivePage(null)}
            className="fixed top-8 right-8 z-[60] p-3 bg-[#1c1c1c] hover:bg-[#30221E] rounded-xl transition-all cursor-pointer shadow-lg text-white group"
            title="Back to folders"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>

          <div className="page-expanded w-full pt-16 pb-16 px-4 flex justify-center">
            <div className="relative">

              {/* Folder Tab */}

              {activePage === "contactme" && (

                <Folder
                  title="Contact Me"
                  color="#fefefe"
                  textColor="#1c1c1c"
                  left="20%"
                  style={{
                    borderTop: "2px solid #1c1c1c",
                    borderLeft: "2px solid #1c1c1c",
                    borderRight: "2px solid #1c1c1c",
                    borderBottom: "none",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                />
              )}

              {/* Page */}
              {activePage === "contactme" && <ContactPage />}

            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[2px] animate-in fade-in duration-300" onClick={onClose}>
      <div 
        className="relative w-full max-w-5xl h-[700px] mx-8 translate-y-8 animate-in slide-in-from-bottom-8 duration-500" 
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full h-full pt-16 flex flex-col">
          
          <div className="folder-group static-folder">
            <Folder title="" color="#1c1c1c" textColor="#fff" left="0" />
            <div className="folder-line" style={{ backgroundColor: "#1c1c1c" }} />
          </div>
          
          <div className="folder-group"
              onMouseEnter={() => setIntroHovered(true)}
              onMouseLeave={() => {
                if (!introPinned) setIntroHovered(false);
              }}
          >
            <div
              style={{ position: "relative", zIndex: 10, display: "inline-block", cursor: "pointer" }}
              onClick={() => {
                setActivePage('contactme');
                setIntroHovered(false);
              }}
            >
                <Folder 
                  title="Contact Me" 
                  color="#fefefe" 
                  textColor="#1c1c1c" 
                  left="170%" 
                  style={{
                    borderTop: "2px solid #1c1c1c",
                    borderLeft: "2px solid #1c1c1c",
                    borderRight: "2px solid #1c1c1c",
                    borderBottom: "none",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                />
              </div>
            
              {/* Folder Line positioned behind it */}
            
            <div className="folder-line-wrapper">
            <div className="folder-line" 
              style={{ backgroundColor: "#fefefe", 
                      width: "calc(30% + 760px)", 
                      marginLeft: "calc(35% - 380px)", 
                      borderRadius: "10px 10px 0 0",
                      border: "2px solid #1c1c1c",
                      position: "relative", // Ensures z-index works
                      zIndex: 1,            // Lower than the folder
                      marginTop: "-2px",    
                  }} />
            </div>
            {showIntro && (
              <div className="page-preview">
                <ContactPage />
              </div>
            )}
          </div>
          
          

        <div className="folder-group active">
          <div
              className="folder-line"
              style={{
                backgroundColor: "#1c1c1c",
                position: "relative",
                top: "65px", 
                width: "calc(30% + 880px)",
                marginLeft: "calc(35% - 440px)",
                height: "200px",
                borderRadius: "20px 20px 0 0",
                zIndex: 20, // <-- Higher than your folder tabs (which were around zIndex: 10)
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
