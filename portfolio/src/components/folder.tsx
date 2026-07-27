import "./Folder.css";

interface FolderProps {
  title: string;
  color?: string;
  textColor?: string;
  left?: string;
  top?: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Folder({
  title,
  color,
  textColor,
  left,
  top,
  active = false,
  onClick,
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
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}