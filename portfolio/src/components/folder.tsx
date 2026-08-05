import "./Folder.css";

interface FolderProps {
  title: string;
  color?: string;
  textColor?: string;
  left?: string;
  top?: string;
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties; // <-- Added this
}

export default function Folder({
  title,
  color,
  textColor,
  left,
  top,
  active = false,
  onClick,
  style, // <-- Destructure style here
}: FolderProps) {
  return (
    <button
      className={`folder ${active ? "active" : ""}`}
      style={{
        backgroundColor: color,
        color: textColor,
        position: "relative",
        left,
        top,
        ...style, // <-- Spread custom styles here
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
