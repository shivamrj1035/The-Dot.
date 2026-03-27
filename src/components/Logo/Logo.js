import React from 'react';

const Logo = ({ className = "", width = 180, height = 45, color = "currentColor" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 400 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* THE */}
      <text 
        x="0" 
        y="75" 
        style={{ 
          font: "700 65px 'Inter', sans-serif",
          letterSpacing: "4px"
        }} 
        fill={color}
      >
        THE
      </text>

      {/* D */}
      <text 
        x="150" 
        y="75" 
        style={{ 
          font: "700 65px 'Inter', sans-serif",
          letterSpacing: "4px"
        }} 
        fill={color}
      >
        D
      </text>

      {/* Stylized O (The Dot) */}
      <circle cx="215" cy="55" r="22" stroke={color} strokeWidth="10" fill="none" />
      <circle cx="215" cy="55" r="8" fill={color} />
      
      {/* Bubbles / Dots around O */}
      <circle cx="245" cy="35" r="6" fill={color} />
      <circle cx="255" cy="55" r="10" fill={color} />
      <circle cx="240" cy="75" r="8" fill={color} />
      <circle cx="265" cy="70" r="4" fill={color} />
      <circle cx="195" cy="30" r="5" fill={color} />
      <circle cx="185" cy="50" r="3" fill={color} />

      {/* T */}
      <path 
        d="M280 20 H340 M310 20 V85" 
        stroke={color} 
        strokeWidth="10" 
        strokeLinecap="round" 
      />

      {/* Final Dot */}
      <circle cx="360" cy="75" r="7" fill={color} />

      {/* Decorative dots trailing from T */}
      <circle cx="330" cy="30" r="4" fill={color} />
      <circle cx="345" cy="45" r="5" fill={color} />
      <circle cx="355" cy="25" r="3" fill={color} />
    </svg>
  );
};

export default Logo;
