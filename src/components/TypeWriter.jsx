import { useEffect, useState } from "react";

function TypeWriter({ text, speed = 100 }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  // const lines = displayText.split("\n");

  return (
    <p
      className="p-welcomeScreen fs-4 text-wrap"
      style={{ whiteSpace: "pre-line" }}
    >
      {displayText}
    </p>
  );
}

export default TypeWriter;
