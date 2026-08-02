import React, { useEffect, useRef, useState } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  wordDelay?: number;
  delayOffset?: number;
  style?: React.CSSProperties;
}

export default function RevealText({
  text,
  className = "",
  wordDelay = 0.025,
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

  const words = text ? text.split(" ") : [];

  return (
    <span ref={containerRef} className={`inline-block ${className}`} style={style}>
      {isVisible ? (
        words.map((word, i) => (
          <span
            key={i}
            className="animate-word-reveal mr-[0.25em]"
            style={{ animationDelay: `${delayOffset + i * wordDelay}s` }}
          >
            {word}
          </span>
        ))
      ) : (
        <span className="opacity-0">{text}</span>
      )}
    </span>
  );
}
