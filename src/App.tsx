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
      <div className="cardlist-container">
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
      <footer>
        <p className="disclaimer">This website was built independently of the N.A.D.A. and is meant exclusively for independent study; 
          it does not constitute supervision or official instruction.
        </p>
      </footer>
    </div>
  );
}

export default App;
