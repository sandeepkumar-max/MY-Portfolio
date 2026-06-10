import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Motion values for high-performance sub-pixel rendering without trigger re-renders
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring configuration to create that fluid, trailing delay effect
  const springConfig = { damping: 30, stiffness: 350, mass: 0.6 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile touch devices so we don't render a broken pointer on phones
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setHidden(false);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Added hover listeners for target clickable nodes
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer'
      );
      
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    addHoverListeners();

    // We also observe DOM modifications to attach listeners to newly spawned elements (e.g. filtered projects)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      {/* 1. Core Pointer Dot - Instantly tracks coordinates */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 mix-blend-difference bg-sky-450"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: '#0ea5e9',
          boxShadow: '0 0 10px #0ea5e9, 0 0 20px #0ea5e9',
        }}
        animate={{
          scale: clicked ? 0.6 : hovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* 2. outer Trailing Ring - Smooth spring lag trail */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 border"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: 32,
          height: 32,
          borderColor: hovered ? 'rgba(14, 165, 233, 0.6)' : 'rgba(14, 165, 233, 0.25)',
          backgroundColor: hovered ? 'rgba(14, 165, 233, 0.04)' : 'transparent',
          boxShadow: hovered 
            ? '0 0 15px rgba(14, 165, 233, 0.2), inset 0 0 10px rgba(14, 165, 233, 0.1)' 
            : 'none',
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.6 : 1,
          borderWidth: hovered ? '1.5px' : '1px',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25 }}
      />
    </>
  );
}
