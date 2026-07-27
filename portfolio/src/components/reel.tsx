import "../../style.css";
import "./SlotMachine.css";
import { useEffect, useState } from "react";

const CHARS = " 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Repeat the characters 3 times so the reel has room to spin
const REEL = [...CHARS, ...CHARS, ...CHARS];

type ReelProps = {
  target: string;
  delay: number;
};

export default function Reel({ target, delay }: ReelProps) {
  const index = CHARS.indexOf(target);
  const [translateY, setTranslateY] = useState(0);
  const symbolHeight = 90;
  const offset = (CHARS.length * 2 + index) * symbolHeight;
  
    useEffect(() => {
  const timer = setTimeout(() => {
    requestAnimationFrame(() => {
      setTranslateY(offset);
    });
  }, delay);

  return () => clearTimeout(timer);
}, [offset, delay]);

  return (
    <div className="reel">
      <div
        className="strip"
        style={{
    transform: `translateY(-${translateY}px)`,
    transitionDuration: `${1.5 + delay * 0.2}s`,
}}
      >
        {REEL.map((char, i) => (
          <div key={i} className="symbol">
            {char}
          </div>
        ))}
      </div>
    </div>
  );
}