import React, { useState } from "react";

export interface FillButtonProps {
  squareSize?: number;
  height?: number;
  width?: number | string;
  squareColor?: string;
  restBg?: string;
  text: string;
  textColor?: string;
  hoverTextColor?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number | string;
  letterSpacing?: string;
  rounded?: number;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
}

export default function FillButton({
  squareSize = 36,
  height = 36,
  width = 160,
  squareColor = "#f25b17",
  restBg = "#f4f4f4",
  text,
  textColor = "#f25b17",
  hoverTextColor = "#ffffff",
  fontSize = 16,
  fontFamily = "'Merriweather', serif",
  fontWeight = 400,
  letterSpacing = "-0.32px",
  rounded = 4,
  icon,
  onClick,
  type = "button",
  className = "",
  style = {},
}: FillButtonProps) {
  const [hovered, setHovered] = useState(false);

  const defaultIcon = (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path
        d="M1 5h10M7 1l4 4-4 4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fill-button-root ${className}`}
      style={{
        position: "relative",
        width,
        height,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        borderRadius: rounded,
        overflow: "hidden",
        border: "none",
        padding: 0,
        outline: "none",
        background: restBg,
        ...style,
      }}
    >
      {/* Animated fill layer: extends from squareSize to 100% on hover, retracts smoothly on unhover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          background: squareColor,
          width: hovered ? "100%" : squareSize,
          borderRadius: rounded,
          transition: "width 380ms cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none",
        }}
      />

      {/* Icon inside square */}
      <span
        style={{
          position: "relative",
          zIndex: 2,
          width: squareSize,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexShrink: 0,
        }}
      >
        {icon ?? defaultIcon}
      </span>

      {/* Button Text */}
      <span
        style={{
          position: "relative",
          zIndex: 2,
          paddingLeft: 10,
          paddingRight: 14,
          color: hovered ? hoverTextColor : textColor,
          fontSize,
          fontFamily,
          fontWeight,
          letterSpacing,
          whiteSpace: "nowrap",
          transition: "color 200ms ease",
        }}
      >
        {text}
      </span>
    </button>
  );
}
