import React from 'react';

interface CardProps {
  key: number;
  id: number;
  question: string;
  answer: string;
}

const Card: React.FC<CardProps> = ({ id, question, answer }) => {
  return (
    <>
     <p>{question}</p>  
     <p>{answer}</p> 
    </>
  );
}

export default Card;