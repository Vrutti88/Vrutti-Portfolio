import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect hover target attributes
      const target = e.target.closest('[data-cursor], button, a, input, textarea, select');
      if (target) {
        setIsHovering(true);
        const action = target.getAttribute('data-cursor') || (
          target.tagName === 'A' ? 'OPEN' :
          target.tagName === 'BUTTON' ? 'EXECUTE' :
          target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' ? 'TYPE' : ''
        );
        setCursorText(action);
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth trailing animation loop
    let animationFrame;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18
      }));
      animationFrame = requestAnimationFrame(animateTrailing);
    };

    animationFrame = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, [position.x, position.y]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-green shadow-glow-sm pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isHovering ? 0 : 1})`,
        }}
      />

      {/* Outer Ring & Dynamic Label */}
      <div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none flex items-center justify-center transition-all duration-200 ease-out ${
          isHovering
            ? 'w-16 h-16 -ml-8 -mt-8 border-brand-green bg-brand-green/10 shadow-glow-md backdrop-blur-[2px]'
            : 'w-8 h-8 -ml-4 -mt-4 border-brand-green/40 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-brand-green uppercase animate-fadeIn">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
