import React, { useState } from 'react';

interface CardProps {
  key: number;
  question: string;
  answer: string;
}

const Card: React.FC<CardProps> = ({ question, answer }) => {
  const [flip, setFlip] = useState(false)

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        {question}
      </div>
      <div className="back">{answer}</div>
    </div>
  );
}

export default Card;