import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

// Import all sequence images explicitly using Vite's glob function
const imagesMap = import.meta.glob('../sequence/*.webp', { eager: true, as: 'url' });
const imagesKeys = Object.keys(imagesMap).sort();

export default function ScrollyCanvas({ isDark }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    // If no images exist in the folder, return early
    if (imagesKeys.length === 0) return;

    const loadedImages = [];
    let loadedCount = 0;

    imagesKeys.forEach((key, index) => {
      const img = new Image();
      img.src = typeof imagesMap[key] === 'string' ? imagesMap[key] : imagesMap[key].default;
      img.onload = () => {
        loadedCount++;
        loadedImages[index] = img;
        if (loadedCount === imagesKeys.length) {
          setImages([...loadedImages]);
        }
      };
    });
  }, []);

  const renderCanvas = (frameIndex) => {
    if (!canvasRef.current || images.length === 0 || !images[frameIndex]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = images[frameIndex];

    const { clientWidth, clientHeight } = canvas.parentElement;
    if (canvas.width !== clientWidth || canvas.height !== clientHeight) {
      canvas.width = clientWidth;
      canvas.height = clientHeight;
    }

    // Object-fit: cover equivalent logic on canvas
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw background if desired, let's keep it black to blend in case.
    ctx.fillStyle = '#050510'; // Deep stitch black/blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(
      img, 
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  useEffect(() => {
    if (images.length > 0) {
      renderCanvas(0);
    }
  }, [images]);

  // Hook into scroll change to trigger re-renders
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length > 0) {
      const activeFrame = Math.min(
        Math.floor(latest * (images.length - 1)),
        images.length - 1
      );
      requestAnimationFrame(() => renderCanvas(activeFrame));
    }
  });

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#050510]" id="scrolly-home">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* The canvas sits behind */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full"
        />

        {/* Global Dark Gradient overlay just to make the image blend smoothly if necessary */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510] opacity-40 pointer-events-none"></div>

        {/* The interactive text overlay */}
        <Overlay scrollYProgress={scrollYProgress} isDark={isDark} />
      </div>
    </section>
  );
}
