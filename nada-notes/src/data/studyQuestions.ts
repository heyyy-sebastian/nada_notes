export interface StudyQuestionData {
  id: number;
  question: string;
  answer: string;
}

export interface StudyQuestions {
    [key: string]: Array<StudyQuestionData>
}

export const studyQuestions: StudyQuestions = {
    'BASICS': [
        { id: 1,
          question: 'test',
          answer: 'test answer'
        },
        { id: 2,
          question: 'test 2',
          answer: 'test answer 2'
        },
        { id: 3,
          question: 'test 3',
          answer: 'test answer 3'
        },
    ],
    'CHAPTER ONE': [
        { id: 4,
          question: 'test',
          answer: 'test answer'
        },
        { id: 5,
          question: 'test 2',
          answer: 'test answer 2'
        },
        { id: 6,
          question: 'test 3',
          answer: 'test answer 3'
        },
    ]
}