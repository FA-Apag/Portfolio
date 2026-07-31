import { useState } from "react";
import "./identificationcard.css";

interface IdentificationCardProps {
  name: string;
  age: string;
  gender: string;
  ethnicity: string;
  role: string;
  basedin: string;
  email: string;
  linkedin: string;
github: string;
    issueddate: string;
    cardno: string;
}


export default function IdentificationCard({
    name,
    age,
    gender,
    ethnicity,
    role,
    basedin,
    email,
    linkedin,
    github,
    issueddate,
    cardno
}: IdentificationCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isSlipped, setIsSlipped] = useState(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    setIsDragging(true);
    setIsSlipped(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      setPosition((prev) => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY,
      }));
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    (e.target as Element).releasePointerCapture(e.pointerId);
    setIsDragging(false);
    setIsSlipped(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`identification-card-wrapper ${isSlipped ? 'slipped' : ''}`}
      style={{
         position: 'absolute',
         top: '0.5rem',
         left: '50%',
         transform: `translate(calc(-15% + ${position.x}px), ${position.y}px) scale(0.65) rotate(2deg)`,
         transformOrigin: 'top center',
         transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
         zIndex: 20,
         cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <main className="identification-card">
        <div className="paperclips">
            <svg width="30" height="70" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.3))' }}>
                <path d="M12 55V14C12 9.58172 15.5817 6 20 6C24.4183 6 28 9.58172 28 14V46C28 52.6274 22.6274 58 16 58C9.37258 58 4 52.6274 4 46V18" stroke="#d4d4d4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 55V14C12 9.58172 15.5817 6 20 6C24.4183 6 28 9.58172 28 14V46C28 52.6274 22.6274 58 16 58C9.37258 58 4 52.6274 4 46V18" stroke="#f4f4f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className="card-top">   
            <div className="image">
                {/* img*/}
            </div>
            
            <div  className="card">
            <header className="titlecard">
                IDENTIFICATION CARD
            </header>
            <div className="information">
                <div className="row1">
                    <div className="column1">
                        <p className="label">[name] {name}</p>
                        <p className="label">[gender] {gender}</p>
                    </div>
                    <div className="column2">
                        <p className="label">[age] {age}</p>
                        <p className="label">[ethnicity] {ethnicity}</p>
                    </div>
                </div>
                {/* line break */}
                <div className="row2">
                    <div className="column1">
                        <p className="label">[role] {role}</p>
                        <p className="label">[based In] {basedin}</p>
                    </div>
                    <div className="column2">
                        <p className="label">[email] {email}</p>
                        <p className="label">[linkedin] {linkedin}</p>
                        <p className="label">[github] {github}</p>
                    </div>
                </div>  
            </div>                
            </div>
        </div>
        <div className="card-bottom">
            <div className="signiture">
                <div className="signiture title">
                    signiture:
                </div>
                <div className="signiture line">
                    Currently accepting new missions!
                </div>
            </div>
            <div className="footer">
                <div className="barcode">
                </div>
                <div className="barcodedetails">
                    <div className="label">
                        <span>[issued date]</span><br/>
                        {issueddate}
                    </div>
                    <div className="label">
                        <span>[card no.]</span><br/>
                        {cardno}
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
