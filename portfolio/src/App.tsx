import { useState, useCallback, useEffect } from "react";

import "../style.css";
import Homepage from "./Pages/homepage";
import AboutMe from "./Pages/aboutme";
import Folder from "./components/folder";
import Skill from "./Pages/skillpage";
import "./components/folder.css";

import "@fontsource/anton";
import "@fontsource/bevan";
import "@fontsource/inria-serif";

const FOLDERS = [
  { id: "about",     title: "About me",  color: "#002F49", textColor: "#FFFFFF", left: "11in" },
  { id: "education", title: "Education", color: "#780001", textColor: "#FFFFFF", left: ".5in" },
  { id: "contacts",  title: "Contacts",  color: "#669BBB", textColor: "#ffffff", left: "7.3in" },
  { id: "skills",    title: "Skills",    color: "#F6EEDC", textColor: "#780001", left: "3in" },
  { id: "projects",  title: "Projects",  color: "#BC0026", textColor: "#FFFFFF", left: "9in" },
];

export default function App() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [foldersRevealed, setFoldersRevealed] = useState(false);
  const [transitioningFolderId, setTransitioningFolderId] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState<"pulling" | "stacking" | null>(null);
  const [displayPageId, setDisplayPageId] = useState<string | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const handleRevealFolders = useCallback(() => {
    setFoldersRevealed(true);
  }, []);

  const handleFolderClick = useCallback((folderId: string) => {
    if (transitioningFolderId) return;
    if (activeFolder === folderId) return;

    // Immediately close/hide the current page content
    setDisplayPageId(null);

    setTransitioningFolderId(folderId);
    setAnimationPhase("pulling");

    // After 500ms (slide-out duration), switch depth order and slide back in
    setTimeout(() => {
      setActiveFolder(folderId);
      setAnimationPhase("stacking");

      // After another 500ms (slide-in duration), complete transition and show the new page
      setTimeout(() => {
        setDisplayPageId(folderId);
        setTransitioningFolderId(null);
        setAnimationPhase(null);
      }, 500);
    }, 500);
  }, [activeFolder, transitioningFolderId]);

  // Move the active folder to the end so it renders last = sits at the bottom of the stack
  const sortedFolders = activeFolder
    ? [
        ...FOLDERS.filter((f) => f.id !== activeFolder),
        FOLDERS.find((f) => f.id === activeFolder)!,
      ]
    : FOLDERS;

  return (
    <div className="bg-background min-h-screen">
      <Homepage
        onRevealFolders={handleRevealFolders}
        foldersRevealed={foldersRevealed}
      />

      <div className={`folder-bar ${foldersRevealed ? "revealed" : ""}`}>
        {sortedFolders.map((folder) => {
          const isTransitioning = transitioningFolderId === folder.id;
          const folderGroupClass = [
            "folder-group",
            folder.id === activeFolder ? "active" : "",
            isTransitioning && animationPhase === "pulling" ? "pull-out" : "",
            isTransitioning && animationPhase === "stacking" ? "slide-in" : "",
          ].filter(Boolean).join(" ");

          return (
            <div key={folder.id} className={folderGroupClass}>
              <Folder
                title={folder.title}
                color={folder.color}
                active={activeFolder === folder.id}
                onClick={() => handleFolderClick(folder.id)}
                textColor={folder.textColor}
                left={folder.left}
              />
              <div className="folder-line" style={{ backgroundColor: folder.color }} />
            </div>
          );
        })}
      </div>

      <main className="relative z-10">
        {displayPageId === "about" && <AboutMe />}
        {displayPageId === "education" && <AboutMe />}
        {displayPageId === "contacts" && <Homepage />}
        {displayPageId === "skills" && <Skill />}
        {displayPageId === "projects" && <Homepage />}
      </main>
    </div>
  );
}
