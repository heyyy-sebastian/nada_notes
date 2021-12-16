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
          question: 'Name the 5 NADA points',
          answer: 'Sympathetic, Shen Men, Kidney, Liver and Lung'
        },
        { id: 2,
          question: 'What are the body-level effects of the Sympathetic point?',
          answer: 'Balances sympathetic nervous system, has a strong analgesic and relaxant effect upon internal organs and dilates blood vessels'
        },
        { id: 3,
          question: 'What are the mind-level effects of the Sympathetic point?',
          answer: 'Reduces epinephrine/ norepinephrine levels for relaxation'
        },
        { id: 4,
          question: 'What are the spirit-level effects of the Sympathetic point?',
          answer: 'Calms the spirit, provides for serenity (yin time)'
        },
        { id: 5,
          question: 'What are the body-level effects of the Shen Men point?',
          answer: 'Alleviates pain, tension, excessive sensitivity; reduces hypertension'
        },
        { id: 6,
          question: 'What are the mind-level effects of the Shen Men point?',
          answer: 'Calms the mind and relieves anxiety, depression, insomnia and restlessness'
        },
        { id: 7,
          question: 'What are the spirit-level effects of the Shen Men point?',
          answer: 'Opens connection to spirit (opens one’s heart); ability to love self and others'
        },
        { id: 8,
          question: 'What are the body-level effects of the Kidney point?',
          answer: 'Stimulates physiologic and hormonal functions'
        },
        { id: 9,
          question: 'What are the mind-level effects of the Kidney point?',
          answer: 'Influences mental state and happiness, relieves fear'
        },
        { id: 10,
          question: 'What are the spirit-level effects of the Kidney point?',
          answer: 'Reminds client of his or her will and intention to overcome the addictions; allows client to hear the positive'
        },
        { id: 11,
          question: 'What are the body-level effects of the Liver point?',
          answer: 'Simulates physiologic and hormonal functions; relieves muscle cramps'
        },
        { id: 12,
          question: 'What are the mind-level effects of the Liver point?',
          answer: 'Aids in clear thinking and decision making; relieves frustration, depression, anger'
        },
        { id: 13,
          question: 'What are the spirit-level effects of the Liver point?',
          answer: 'Helps client connect with the internal self and find direction in life'
        },
        { id: 14,
          question: 'What are the body-level effects of the Lung point?',
          answer: 'Lung is an important organ for detoxification; regulates pores'
        },
        { id: 15,
          question: 'What are the mind-level effects of the Lung point?',
          answer: 'Aids in regulation of grief/sadness; improves sense of connection and self respect and integrity'
        },
        { id: 16,
          question: 'What are the spirit-level effects of the Lung point?',
          answer: 'Reminds client of connection with heaven; provides inspiration'
        },
    ],
}