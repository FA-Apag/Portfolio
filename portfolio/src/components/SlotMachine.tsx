import { useEffect, useRef, useState } from "react";
import "./SlotMachine.css";

const TARGET = "FRONTEND DEVELOPER";
const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Repeating character list to support continuous spin and landing offsets
const REEL_STRIP = [
  ...CHARS,
  ...CHARS,
  ...CHARS,
  ...CHARS,
  ...CHARS,
  ...CHARS,
  ...CHARS,
  ...CHARS,
  ...CHARS,
  ...CHARS,
];

function getRandomDigit(): string {
  return DIGITS[Math.floor(Math.random() * DIGITS.length)];
}

const SYMBOL_HEIGHT = 120;

interface SlotMachineProps {
  onRollComplete?: () => void;
  onRevealFolders?: () => void;
  foldersRevealed?: boolean;
}

export default function SlotMachine({
  onRollComplete,
  onRevealFolders,
  foldersRevealed,
}: SlotMachineProps) {
  // Current roll step:
  // 0 = Try 1 (Zeroes)
  // 1 = Try 2 (Random numbers)
  // 2 = Try 3 (FRONTEND DEVELOPER)
  const [rollStep, setRollStep] = useState(0);

  // Number of character reels landed in current roll step (0 to TARGET.length)
  const [landedCount, setLandedCount] = useState(0);

  // Interaction states
  const [isRollFinished, setIsRollFinished] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const [roll2Chars] = useState(() =>
    TARGET.split("").map((c) => (c === " " ? " " : getRandomDigit()))
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    // Sequential reel landing (80ms interval per character)
    if (landedCount < TARGET.length) {
      if (TARGET[landedCount] === " ") {
        setLandedCount((prev) => prev + 1);
      } else {
        timer = setTimeout(() => {
          setLandedCount((prev) => prev + 1);
        }, 80);
      }
    } else {
      // When all reels land on current step
      if (rollStep < 2) {
        timer = setTimeout(() => {
          setLandedCount(0);
          setRollStep((prev) => prev + 1);
        }, 1200);
      } else {
        // Roll step 2 landed on FRONTEND DEVELOPER completely!
        setIsRollFinished(true);
        onRollComplete?.();
      }
    }

    return () => clearTimeout(timer);
  }, [landedCount, rollStep, onRollComplete]);

  // Lock page scrolling before/during slot machine roll
  useEffect(() => {
    if (isRollFinished) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    const preventKeys = (e: KeyboardEvent) => {
      if (
        ["Space", "ArrowDown", "PageDown", "ArrowUp", "PageUp", "Home", "End"].includes(
          e.code
        )
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeys, { capture: true });

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys, { capture: true });
    };
  }, [isRollFinished]);

  useEffect(() => {
    if (!isRollFinished) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    const handleTouch = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", "Space"].includes(e.code) && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRollFinished, hasScrolled]);


  // Track continuous scroll progress (0 to 1) over 360px after roll finishes
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!isRollFinished) {
      setScrollProgress(0);
      return;
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // Multi-stage progress mapping over 180px of scroll
      const progress = Math.min(1, Math.max(0, currentScroll / 180));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isRollFinished]);

  // Lock scroll at the final animation position until the pill is clicked.
  // Use a ref so we don't re-add listeners on every render.
  const endScrollLocked = useRef(false);

  useEffect(() => {
    // Update the lock flag whenever progress or reveal state changes.
    endScrollLocked.current = scrollProgress >= 1 && !foldersRevealed;
  }, [scrollProgress, foldersRevealed]);

  useEffect(() => {
    if (!isRollFinished) return;

    const blockDown = (e: WheelEvent) => {
      if (endScrollLocked.current && e.deltaY > 0) e.preventDefault();
    };
    const blockTouch = (e: TouchEvent) => {
      if (endScrollLocked.current) e.preventDefault();
    };
    const blockKeys = (e: KeyboardEvent) => {
      if (
        endScrollLocked.current &&
        ["ArrowDown", "PageDown", "Space", "End"].includes(e.code)
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", blockDown, { passive: false });
    window.addEventListener("touchmove", blockTouch, { passive: false });
    window.addEventListener("keydown", blockKeys, { capture: true });

    return () => {
      window.removeEventListener("wheel", blockDown);
      window.removeEventListener("touchmove", blockTouch);
      window.removeEventListener("keydown", blockKeys, { capture: true });
    };
  }, [isRollFinished]);

  const handleCtaClick = () => {
    window.scrollTo({ top: 190, behavior: "smooth" });
    onRevealFolders?.();
  };

  const getTargetChar = (colIdx: number, step: number): string => {
    const char = TARGET[colIdx];
    if (char === " ") return " ";

    if (step === 0) return "0";
    if (step === 1) return roll2Chars[colIdx];
    return char;
  };

  // ---------------------------------------------------------------------------
  // Progressive Multi-Stage Scroll Calculations
  // ---------------------------------------------------------------------------

  // Stage 1 (0.0 -> 0.45): FRONTEND DEVELOPER grows bigger & character gaps tighten
  const p1 = Math.min(1, scrollProgress / 0.45);
  const textScale = 1 + scrollProgress * 0.18; // Grows up to 1.18x bigger
  
  // A -2.3% tracking means -0.023em total gap reduction per character.

  // Stage 2 (0.30 -> 0.75): "meet the" red banner slides Left -> Right & text shifts down
  const p2 = Math.min(1, Math.max(0, (scrollProgress - 0.3) / 0.45));
  const bannerTranslateX = (1 - p2) * -120; // in vw
  const bannerOpacity = p2;
  const textTranslateY = p2 * 42; // Shifts down 42px

  // Stage 3 (0.65 -> 1.0): Oval badge pops up
  const p3 = Math.min(1, Math.max(0, (scrollProgress - 0.65) / 0.35));
  const badgeScale = p3;
  const badgeOpacity = p3;
  const badgeRotate = -3 + (1 - p3) * -10;

  return (
    <div className={`hero-slot-wrapper ${scrollProgress > 0.05 ? "has-scrolled" : ""}`}>
      {/* Main Slot Machine Header Container (Stage 1 & 2) */}
      <div
        className="slot-machine"
        style={{
          transform: `translateY(${textTranslateY}px) scale(${textScale})`,
          transformOrigin: "center center",
        }}
      >
        {/* title-group: banner + text stacked in a column, left-aligned so their left edges match */}
        <div className="title-group">
          {/* Sliding "meet the" red banner (Stage 2) — in normal flow, not absolute */}
          <div
            className="meet-the-banner"
            style={{
              transform: `translateX(${bannerTranslateX}vw)`,
              opacity: bannerOpacity,
            }}
          >
            meet the
          </div>

          {/* Slot machine reel row */}
          <div className="slot-container">
            {TARGET.split("").map((char, colIdx) => {
              if (char === " ") {
                return (
                  <div
                    key={colIdx}
                    className="reel-space"
                    style={{
                      width: `clamp(0.6rem, ${2.4 - p1 * 0.8}vw, 2.5rem)`,
                    }}
                  />
                );
              }

              const isLanded = colIdx < landedCount;
              const targetChar = getTargetChar(colIdx, rollStep);
              const charInCharsIndex = CHARS.indexOf(targetChar);

              const symbolIndex =
                (rollStep + 1) * CHARS.length + Math.max(0, charInCharsIndex);
              const translateY = symbolIndex * SYMBOL_HEIGHT;

              // Uniform 8px gap on each side for all characters
              const gapPx = p1 * 4;

              return (
                <div
                  key={colIdx}
                  className="reel-column"
                  style={{
                    marginRight: `-${gapPx}px`,
                    marginLeft: `-${gapPx}px`,
                  }}
                >
                  <div
                    className={`reel-strip ${
                      isLanded ? "reel-strip-landing" : "reel-strip-spinning"
                    }`}
                    style={{
                      transform: isLanded ? `translateY(-${translateY}px)` : undefined,
                    }}
                  >
                    {REEL_STRIP.map((sym, sIdx) => (
                      <div key={sIdx} className="reel-symbol">
                        {sym}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pop-up Oval CTA Button (Stage 3) */}
        <button
          className={`cta-oval-badge ${foldersRevealed ? "badge-active" : ""}`}
          style={{
            transform: `scale(${badgeScale}) rotate(${badgeRotate}deg)`,
            opacity: badgeOpacity,
            pointerEvents: scrollProgress > 0.7 ? "auto" : "none",
          }}
          onClick={handleCtaClick}
          aria-label="Let's build something together"
        >
          Lets build something together!
        </button>
      </div>

      {/* Animated Scroll Prompt Indicator */}
      {isRollFinished && scrollProgress < 0.2 && (
        <button
          className="scroll-cue-button"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 4) }}
          onClick={() => window.scrollTo({ top: 180, behavior: "smooth" })}
          aria-label="Scroll down"
        >
          <span>Scroll down</span>
          <span className="scroll-arrow">↓</span>
        </button>
      )}
    </div>
  );
}







