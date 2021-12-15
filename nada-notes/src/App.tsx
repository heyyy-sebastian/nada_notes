import React, { useEffect, useState } from 'react';
import CardList from './components/CardList';
import { studyQuestions } from './data/studyQuestions';
import './App.css';

function App() {
  const subjects = [ 'BASICS' ]
  const [ questionsInProgress, setQuestionsInProgress ] = useState([studyQuestions]);
    
  // TODO sort questions into review/completed sections
  // const [ questionsInReview, setQuestionsInReview] = useState([]);
  // const [ completedQuestions, setCompletedQuestions ] = useState([]);

  useEffect(() => {
  }, [questionsInProgress]);

  return (
    <div className="App">
      <header>
        <h1>NADA Flashcards</h1>
      </header>
      <div>
      <>
      { subjects.map( (subject, i) => {
          return(
            <div key={`${subject}-list-${i}`}>
              <h2>{subject}</h2>
              <CardList cards={questionsInProgress[i][subject]}/>
            </div>
          );
        })
      } 
      </> 
      </div>
    </div>
  );
}

export default App;
