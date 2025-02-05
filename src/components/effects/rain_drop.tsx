import { useRef, useEffect, useState } from 'react';

interface RainDrop {
  x: number;
  y: number;
  length: number;
  speed: number;
}

const RainEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrame = useRef<number>();
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const drops = useRef<RainDrop[]>([]);

  const DENSITY = 100;  
  const MIN_SPEED = 10;  
  const MAX_SPEED = 20; 
  const LENGTH_MIN = 10; 
  const LENGTH_MAX = 30; 

  const leftColor = 'rgba(165, 178, 248, 0.7)'; 
  const rightColor = 'rgba(106, 6, 146, 0.7)'; 

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const initializeRain = () => {
      const newDrops: RainDrop[] = [];
      for (let i = 0; i < DENSITY; i++) {
        newDrops.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          length: LENGTH_MIN + Math.random() * (LENGTH_MAX - LENGTH_MIN),
          speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED)
        });
      }
      drops.current = newDrops;
    };
    initializeRain();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawRain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.current.forEach(drop => {
        ctx.strokeStyle = drop.x < canvas.width / 2.5 ? leftColor : rightColor;
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.length * 0.2, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        drop.x += drop.speed * 0.1;

        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });

      animationFrame.current = requestAnimationFrame(drawRain);
    };

    drawRain();

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [canvasSize]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default RainEffect;
