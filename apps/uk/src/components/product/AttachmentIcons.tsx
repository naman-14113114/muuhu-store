import React from "react";

const SvgBase = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const IconBaseUnit = ({ className }: { className?: string }) => (
  <SvgBase className={className}>
    {/* Base body */}
    <rect x="25" y="25" width="45" height="50" rx="4" />
    <rect x="25" y="20" width="45" height="5" />
    <rect x="25" y="75" width="45" height="5" />
    
    {/* Side attachment ring */}
    <path d="M70 35c5 0 8 5 8 15s-3 15-8 15" />
    <line x1="75" y1="40" x2="75" y2="60" />
    
    {/* Center detail */}
    <rect x="42" y="35" width="10" height="45" rx="5" />
    <circle cx="47" cy="45" r="1.5" />
    <circle cx="47" cy="52" r="1.5" />
    <circle cx="47" cy="59" r="1.5" />
    <circle cx="47" cy="66" r="1.5" />
    <circle cx="47" cy="73" r="1.5" />
  </SvgBase>
);

export const IconSmoothingBrush = ({ className }: { className?: string }) => (
  <SvgBase className={className}>
    {/* Brush head */}
    <path d="M30 30v40c0 5 2 10 10 10h20c8 0 10-5 10-10V30c0-10-8-15-20-15s-20 5-20 15z" />
    
    {/* Base connector */}
    <rect x="35" y="80" width="30" height="5" />
    <rect x="40" y="85" width="20" height="5" />
    
    {/* Bristle grid */}
    {[35, 45, 55, 65].map(x => (
      <React.Fragment key={x}>
        {[30, 40, 50, 60, 70].map(y => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" />
        ))}
      </React.Fragment>
    ))}
    
    {/* Vertical lines */}
    <line x1="40" y1="25" x2="40" y2="75" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="50" y1="25" x2="50" y2="75" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="60" y1="25" x2="60" y2="75" strokeWidth="1" strokeDasharray="2 2" />
  </SvgBase>
);

export const IconRoundBrush = ({ className }: { className?: string }) => (
  <SvgBase className={className}>
    {/* Cylinder */}
    <rect x="35" y="25" width="30" height="55" />
    
    {/* Top cone */}
    <polygon points="35,25 42,15 58,15 65,25" />
    <line x1="42" y1="15" x2="58" y2="15" />
    
    {/* Base connector */}
    <rect x="33" y="80" width="34" height="4" />
    <rect x="38" y="84" width="24" height="4" />
    
    {/* Bristle rows */}
    {[35, 45, 55, 65, 75].map(y => (
      <React.Fragment key={y}>
        <line x1="32" y1={y} x2="35" y2={y} />
        <line x1="65" y1={y} x2="68" y2={y} />
        <circle cx="40" cy={y} r="1.5" />
        <circle cx="45" cy={y} r="1.5" />
        <circle cx="50" cy={y} r="1.5" />
        <circle cx="55" cy={y} r="1.5" />
        <circle cx="60" cy={y} r="1.5" />
      </React.Fragment>
    ))}
  </SvgBase>
);

export const IconCurlerLeft = ({ className }: { className?: string }) => (
  <SvgBase className={className}>
    {/* Cylinder */}
    <rect x="40" y="25" width="20" height="55" />
    
    {/* Top cone */}
    <polygon points="40,25 45,15 55,15 60,25" />
    <line x1="45" y1="15" x2="55" y2="15" />
    
    {/* Base connector */}
    <rect x="35" y="80" width="30" height="4" />
    <rect x="40" y="84" width="20" height="4" />
    
    {/* Fluting lines */}
    <line x1="45" y1="25" x2="45" y2="80" />
    <line x1="50" y1="25" x2="50" y2="80" />
    <line x1="55" y1="25" x2="55" y2="80" />
    
    {/* Directional arrow Left */}
    <path d="M 30 50 Q 20 40 30 30" strokeWidth="2" />
    <polyline points="28 28 32 30 28 34" strokeWidth="2" />
  </SvgBase>
);

export const IconCurlerRight = ({ className }: { className?: string }) => (
  <SvgBase className={className}>
    {/* Cylinder */}
    <rect x="40" y="25" width="20" height="55" />
    
    {/* Top cone */}
    <polygon points="40,25 45,15 55,15 60,25" />
    <line x1="45" y1="15" x2="55" y2="15" />
    
    {/* Base connector */}
    <rect x="35" y="80" width="30" height="4" />
    <rect x="40" y="84" width="20" height="4" />
    
    {/* Fluting lines */}
    <line x1="45" y1="25" x2="45" y2="80" />
    <line x1="50" y1="25" x2="50" y2="80" />
    <line x1="55" y1="25" x2="55" y2="80" />
    
    {/* Directional arrow Right */}
    <path d="M 70 50 Q 80 40 70 30" strokeWidth="2" />
    <polyline points="72 28 68 30 72 34" strokeWidth="2" />
  </SvgBase>
);

export const IconDiffuser = ({ className }: { className?: string }) => (
  <SvgBase className={className}>
    {/* Cone */}
    <polygon points="35,25 75,50 75,90 35,65" transform="rotate(-90 50 50) translate(0 15)" />
    <line x1="20" y1="25" x2="20" y2="75" />
    
    {/* Prongs */}
    <polyline points="20 30 15 35 20 40" />
    <polyline points="20 45 15 50 20 55" />
    <polyline points="20 60 15 65 20 70" />
    
    {/* Base connector */}
    <rect x="75" y="40" width="5" height="20" />
    
    {/* Internal depth lines */}
    <path d="M 35 30 Q 55 50 70 42" strokeWidth="1" />
    <path d="M 35 70 Q 55 50 70 58" strokeWidth="1" />
  </SvgBase>
);

export const IconConcentrator = ({ className }: { className?: string }) => (
  <SvgBase className={className}>
    {/* Cylinder Body */}
    <rect x="35" y="35" width="30" height="30" />
    
    {/* Front Curve */}
    <path d="M 35 35 C 20 35 20 65 35 65" />
    <path d="M 30 45 C 22 45 22 55 30 55" />
    
    {/* Base connector */}
    <rect x="65" y="40" width="5" height="20" />
  </SvgBase>
);

