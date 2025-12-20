"use client";

import { useEffect, useState } from "react";

const TARGET_TEXT = "INSIGHT BRIDGE";

export default function HeroTypewriter() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      if (index <= TARGET_TEXT.length) {
        setDisplayText(TARGET_TEXT.slice(0, index));
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="hero-typewriter-text">
      {displayText}
      <span className="hero-typewriter-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
