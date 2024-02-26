import { useState } from 'react';

// Sample array of objects data
const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Rome', 'Berlin'],
    correctAnswer: 'Paris'
  },
  {
    id: 2,
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'J.K. Rowling', 'Stephen King', 'Ernest Hemingway'],
    correctAnswer: 'Harper Lee'
  },
  {
    id: 3,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4'
  },
  // Add more questions here...
];

// Function to generate sample questions
const generateQuestions = () => {
  let newQuestions = [];
  for (let i = 4; i <= 20; i++) {
    newQuestions.push({
      id: i,
      question: `Question ${i}`,
      options: [`Option 1 for Question ${i}`, `Option 2 for Question ${i}`, `Option 3 for Question ${i}`, `Option 4 for Question ${i}`],
      correctAnswer: `Option 1 for Question ${i}`
    });
  }
  return newQuestions;
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Generate 20 questions
  const allQuestions = [...questions, ...generateQuestions()];

  const handleAnswerButtonClick = (selectedOption) => {
    if (selectedOption === allQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < allQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <p>You scored {score} out of {allQuestions.length}</p>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{allQuestions.length}
            </div>
            <div className="question-text">{allQuestions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {allQuestions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(option)}>{option}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
