import React, { useEffect, useRef, useState } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  wordDelay?: number;
  delayOffset?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function RevealText({
  text,
  className = "",
  delayOffset = 0.15,
  style = {},
  children,
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = children || text;

  return (
    <span
      ref={containerRef}
      className={`inline-block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{
        transitionDelay: `${delayOffset}s`,
        ...style,
      }}
    >
      {content}
    </span>
  );
}
