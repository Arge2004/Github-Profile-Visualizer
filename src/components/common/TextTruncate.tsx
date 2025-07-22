import { useState } from "react";

interface Props {
  text: string | null;
  maxLength?: number;
}

export default function TextTruncate({ text, maxLength = 130 }: Props) {
  const [showFull, setShowFull] = useState(false);
  const isLong = text ? text.length > maxLength : false;
  const displayText = showFull || !isLong ? text : text?.slice(0, maxLength) + "...";

  if (!text) {
    return <p className="text-secondary-font text-body">No description available</p>;
  }
  

  return (
    <p className="text-secondary-font text-body">
      {displayText}
      {isLong && (
        <button
          onClick={() => setShowFull(!showFull)}
          className="text-primary-font ml-2 hover:underline"
        >
          {showFull ? "Ver menos" : "Ver más"}
        </button>
      )}
    </p>
  );
}