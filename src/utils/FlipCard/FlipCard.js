import React from 'react';
import useCardAnimation from './useCardAnimation';
import './FlipCard.scss';

const FlipCard = ({ frontContent, backContent }) => {
  const { isFlipped, isAnimating, toggleFlip } = useCardAnimation();

  return (
    <div className="flip-card-container">
      <div className="flip-card" onClick={toggleFlip}>
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''} ${isAnimating ? 'animating' : ''}`}>
          <div className="card-wrapper">
            <div className="front-wrapper">
              <div className="flip-card-face front">
                <div className="card-content">
                  {frontContent}
                  <div className={`hint-text ${isFlipped ? 'hidden' : ''}`}>
                    ↻ 點擊翻轉卡片
                  </div>
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
    </div>
  );
};

export default FlipCard;