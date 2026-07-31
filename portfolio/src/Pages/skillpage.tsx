import { useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import FrontendSkillCard from "../components/frontendskillcard";
import BackendSkillCard from "../components/backendskillcard";
import DesignSkillCard from "@/components/designskillcard";
import TollSkillCard from "@/components/toolskillcard";
import SkillsChecklist from "@/components/skillchecklist";
import LanguageSection from "@/components/langaguagepaper";
import "./skillpage.css";

export default function Skill() {
  const [cards, setCards] = useState([
    { id: 'checklist', component: <SkillsChecklist /> },
    { id: 'tools', component: <TollSkillCard /> },
    { id: 'design', component: <DesignSkillCard /> },
    { id: 'backend', component: <BackendSkillCard /> },
    { id: 'frontend', component: <FrontendSkillCard /> }
  ]);

  const sendToBack = (id: string) => {
    setCards(prev => {
      const index = prev.findIndex(c => c.id === id);
      if (index === -1) return prev;
      const card = prev[index];
      const newCards = [...prev];
      newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, id: string) => {
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
      sendToBack(id);
    }
  };

  // Define fixed transforms for cards from front (0) to back (4) to match the layout image
  const transforms = [
    { x: 0, y: 80, rotate: 0 },       // frontmost
    { x: 140, y: 30, rotate: 0 },      // 2nd from front (right)
    { x: -120, y: -10, rotate: 0 },   // 3rd from front (left)
    { x: 110, y: -60, rotate: 0 },     // 4th from front (top right)
    { x: -180, y: -70, rotate: 0 }   // backmost (top left)
  ];

  return (
    <div className="skill-page">
      <LanguageSection />
      
      <main className="dashboard" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
        {cards.map((card, index) => {
          const isTop = index === cards.length - 1;
          const reverseIndex = cards.length - 1 - index;
          
          // Fallback just in case there are more than 5 cards
          const transform = transforms[reverseIndex] || { x: 0, y: 0, rotate: 0 };
          
          return (
            <motion.div
              key={card.id}
              className="cursor-pointer"
              style={{
                gridArea: "1 / 1",
                zIndex: index,
                cursor: isTop ? "grab" : "auto"
              }}
              initial={false}
              animate={{
                x: transform.x,
                y: transform.y,
                rotate: transform.rotate,
                scale: 1, // keeping scale at 1 like the image
                opacity: 1,
              }}
              drag={isTop ? true : false}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, info) => handleDragEnd(e, info, card.id)}
              whileDrag={{ cursor: "grabbing", scale: 1.05, zIndex: 99 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              {card.component}
            </motion.div>
          );
        })}
      </main>
    </div>
  );
}
