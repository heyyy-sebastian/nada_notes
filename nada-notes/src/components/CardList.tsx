import React from 'react';
import Card from './Card';
import { StudyQuestionData } from '../data/studyQuestions'


type CardListProps = {
    cards: Array<StudyQuestionData>;
}

const CardList: React.FC<CardListProps> = ({ cards }) => { 
    return (
        <>
            { cards.map( card => {
                return(<Card {...card} key={card.id}/>);
            })}  
        </>
    );
}

export default CardList;