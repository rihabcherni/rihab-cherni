import React, { useEffect, useState } from 'react';

const BackgroundAnimation = ({ isDark }) => {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const totalParticles = 40;
    const newParticles = Array.from({ length: totalParticles }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2, 
      speedX: (Math.random() - 0.5) * 0.1, 
      speedY: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(newParticles);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev =>
        prev.map(p => {
          let newX = p.x + p.speedX;
          let newY = p.y + p.speedY;
          if (newX > 100) newX = 0;
          if (newX < 0) newX = 100;
          if (newY > 100) newY = 0;
          if (newY < 0) newY = 100;
          return { ...p, x: newX, y: newY };
        })
      );
    }, 30); 
    return () => clearInterval(interval);
  }, []);

  const particleColor = isDark ? 'rgba(59,130,246,0.2)' : 'rgba(147,197,253,0.5)';

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: particleColor,
            opacity: p.opacity,
            transition: 'left 0.03s linear, top 0.03s linear'
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;