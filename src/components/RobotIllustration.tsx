
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

interface RobotIllustrationProps {
  width?: number;
  height?: number;
}

const RobotIllustration: React.FC<RobotIllustrationProps> = ({ 
  width = 260,
  height = 280
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  
  // Define theme-specific colors
  const getThemeColors = () => {
    switch(theme) {
      case 'dark':
        return {
          head: "#1E293B",
          face: "#0F172A",
          eyes: "#34D399",
          body: "#1E293B",
          antenna: "#94A3B8",
          antennaBall: "#34D399",
          accent: "#34D399",
          button1: "#EF4444",
          button2: "#EAB308",
          button3: "#34D399",
          neck: "#475569"
        };
      case 'autumn':
        return {
          head: "#78350F",
          face: "#451A03",
          eyes: "#F97316",
          body: "#78350F",
          antenna: "#D6D3D1",
          antennaBall: "#F97316",
          accent: "#F97316",
          button1: "#DC2626",
          button2: "#CA8A04",
          button3: "#16A34A",
          neck: "#92400E"
        };
      case 'gaming':
        return {
          head: "#18181B",
          face: "#09090B",
          eyes: "#10B981",
          body: "#18181B",
          antenna: "#71717A",
          antennaBall: "#10B981",
          accent: "#10B981",
          button1: "#EF4444",
          button2: "#3B82F6",
          button3: "#10B981",
          neck: "#27272A"
        };
      case 'light':
      default:
        return {
          head: "#2C3E50",
          face: "#1E293B",
          eyes: "#34D399",
          body: "#2C3E50",
          antenna: "#94A3B8",
          antennaBall: "#34D399",
          accent: "#34D399",
          button1: "#EF4444",
          button2: "#EAB308",
          button3: "#34D399",
          neck: "#475569"
        };
    }
  };
  
  const colors = getThemeColors();
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate normalized position (-1 to 1)
        const normalizedX = (event.clientX - centerX) / (window.innerWidth / 2);
        const normalizedY = (event.clientY - centerY) / (window.innerHeight / 2);
        
        // Limit eye movement
        const maxMovement = 5;
        const eyeX = Math.min(Math.max(normalizedX * maxMovement, -maxMovement), maxMovement);
        const eyeY = Math.min(Math.max(normalizedY * maxMovement, -maxMovement), maxMovement);
        
        setEyePosition({ x: eyeX, y: eyeY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation variants
  const robotHeadVariants = {
    idle: {
      y: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  const antennaVariants = {
    idle: {
      rotate: [-1, 1, -1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    idle: {
      opacity: [0.6, 0.8, 0.6],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="relative" style={{ width, height }}>
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 70%)` }}
        variants={glowVariants}
        animate="idle"
      />

      <div className="relative w-full h-full">
        {/* Robot Body */}
        <motion.svg
          width={width}
          height={height}
          viewBox="0 0 260 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={robotHeadVariants}
          animate="idle"
        >
          {/* Robot head */}
          <rect
            x="60"
            y="70"
            width="140"
            height="120"
            rx="25"
            fill={colors.head}
            stroke={colors.accent}
            strokeWidth="3"
            className="drop-shadow-lg"
          />
          
          {/* Robot face plate */}
          <rect
            x="75"
            y="100"
            width="110"
            height="70"
            rx="15"
            fill={colors.face}
            stroke={colors.accent}
            strokeWidth="2"
          />

          {/* Left Eye Socket */}
          <circle cx="105" cy="135" r="17" fill="#111827" />
          
          {/* Right Eye Socket */}
          <circle cx="155" cy="135" r="17" fill="#111827" />
          
          {/* Left Eye (follows mouse) */}
          <motion.circle 
            cx={105 + eyePosition.x} 
            cy={135 + eyePosition.y} 
            r="8" 
            fill={colors.eyes} 
            className="drop-shadow-glow"
          />
          
          {/* Right Eye (follows mouse) */}
          <motion.circle 
            cx={155 + eyePosition.x} 
            cy={135 + eyePosition.y} 
            r="8" 
            fill={colors.eyes}
            className="drop-shadow-glow" 
          />
          
          {/* Robot antenna */}
          <motion.g
            variants={antennaVariants}
            animate="idle"
            style={{ originX: "130px", originY: "70px" }}
          >
            <rect x="128" y="50" width="4" height="20" fill={colors.antenna} />
            <circle cx="130" cy="42" r="8" fill={colors.antennaBall} stroke={colors.face} strokeWidth="1" />
          </motion.g>
          
          {/* Robot neck */}
          <rect x="115" y="190" width="30" height="20" fill={colors.neck} />
          
          {/* Robot body (partial) */}
          <rect x="90" y="210" width="80" height="60" rx="10" fill={colors.body} stroke={colors.accent} strokeWidth="2" />
          
          {/* Robot buttons/lights */}
          <circle cx="115" cy="230" r="5" fill={colors.button1} />
          <circle cx="130" cy="230" r="5" fill={colors.button2} />
          <circle cx="145" cy="230" r="5" fill={colors.button3} />
        </motion.svg>
      </div>
    </div>
  );
};

export default RobotIllustration;
