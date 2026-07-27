import "../../style.css";
import SlotMachine from "../components/SlotMachine";
import "../components/SlotMachine.css";

interface HomepageProps {
  onRollComplete?: () => void;
  onRevealFolders?: () => void;
  foldersRevealed?: boolean;
}

export default function Homepage({
  onRollComplete,
  onRevealFolders,
  foldersRevealed,
}: HomepageProps) {
  return (
    <section className="hero">
      <div className="hero-sticky">
      <SlotMachine
        onRollComplete={onRollComplete}
        onRevealFolders={onRevealFolders}
        foldersRevealed={foldersRevealed}
      />
      </div>
    </section>
  );
}

