import React, { useState } from 'react';

interface CardProps {
  key: number;
  question: string;
  answer: string;
}

const Card: React.FC<CardProps> = ({ question, answer }) => {
  const [ isFlipped, setIsFlipped] = useState(false);
  const [ isInReview, setIsInReview ] = useState(false);
  const [ isComplete, setIsComplete ] = useState(false);

  return (
    <div 
      className={`card ${isFlipped ? 'flip' : ''} ${isComplete ? 'completed' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="front">
          <span className="card-status">{ isInReview ? 'For Review' : '' }</span>
          <p>{question}</p>
      </div>
      <div className="back">
        <p className="answer">{answer}</p>
        <div>
          <span className="card-status" onClick={() => setIsInReview(true)}>
            Mark for Review
          </span>
          <span className="card-status" onClick={() => setIsComplete(true)}>
            Mark Complete
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card;