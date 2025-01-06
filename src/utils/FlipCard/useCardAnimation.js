import { useState } from 'react';

const useCardAnimation = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    setIsAnimating(!isAnimating);
  };

  return {
    isFlipped,
    isAnimating,
    toggleFlip,
  };
};

export default useCardAnimation;

// import { useState, useEffect } from 'react';

// const useCardAnimation = (isFlipped) => {
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     let animationFrameId;
//     let startTime = Date.now();

//     const animate = () => {
//       if (isFlipped) {
//         animationFrameId = requestAnimationFrame(animate);
//         return;
//       }

//       const currentTime = Date.now();
//       const elapsed = (currentTime - startTime) / 1000;

//       // Main rotation
//       const rotateY = Math.sin(elapsed * 1.2) * 12;
//       const rotateX = Math.cos(elapsed * 1.5) * 8;
      
//       // Secondary rotation
//       const extraY = Math.sin(elapsed * 2.5) * 3;
//       const extraX = Math.cos(elapsed * 3) * 2;

//       setRotation({ 
//         x: rotateX + extraX, 
//         y: rotateY + extraY 
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [isFlipped]);

//   return rotation;
// };

// export default useCardAnimation;