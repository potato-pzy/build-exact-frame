import React, { useEffect, useRef, useState } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  wordDelay?: number; // delay between words (seconds)
  delayOffset?: number; // base delay before starting (seconds)
  style?: React.CSSProperties;
}

export default function RevealText({
  text,
  className = "",
  wordDelay = 0.012,
  delayOffset = 0,
  style = {},
}: RevealTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split by whitespace and preserve it
  const words = text.split(/(\s+)/);

  let wordIndex = 0;

  return (
    <span ref={containerRef} className={className} style={{ display: "inline", ...style }}>
      {words.map((word, idx) => {
        if (/^\s+$/.test(word)) {
          return word;
        }

        const currentWordIndex = wordIndex++;
        const rawDelay = delayOffset + currentWordIndex * wordDelay;
        const delay = Math.min(rawDelay, 0.3); // Cap delay at 300ms to keep animations snappy

        return (
          <span
            key={idx}
            className={isVisible ? "animate-word-reveal" : "inline-block opacity-0"}
            style={{
              animationDelay: isVisible ? `${delay}s` : "0s",
              animationFillMode: "forwards",
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}

