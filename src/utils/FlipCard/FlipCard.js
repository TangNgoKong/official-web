import React, { useState } from 'react';
import useCardAnimation from './useCardAnimation';
import './FlipCard.scss';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const rotation = useCardAnimation(isFlipped);

  const getCardStyle = () => {
    if (isFlipped) return {};
    return {
      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    };
  };

  const getFrontCardStyle = () => {
    if (isFlipped) return {};
    return {
      boxShadow: `${-rotation.y/2}px ${rotation.x/2}px 1.25rem rgba(0, 0, 0, 0.2)`,
    };
  };

  return (
    <div className="flip-card-container">
      <div 
        className="flip-card"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div 
          className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}
          style={getCardStyle()}
        >
          <div 
            className="flip-card-face"
            style={getFrontCardStyle()}
          >
            <div className="card-content">
              {frontContent}
              <div className={`hint-text ${isFlipped ? 'hidden' : ''}`}>
                ↻ 點擊翻轉卡片
              </div>
            </div>
          </div>
          <div className="flip-card-face back">
            <div className="card-content">
              {backContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;