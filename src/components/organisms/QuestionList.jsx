import React, { useState } from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const QuestionHeader = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

const AnswerInput = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  
  &:hover {
    background-color: #218838;
  }
`;

const QuestionList = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(null);

  const handleAnswerChange = (index, value) => {
    const newAnswers = userAnswers.slice();
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswer.toLowerCase() === userAnswers[index].toLowerCase()) {
        correct += 1;
      }
    });
    setScore(correct);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <QuestionContainer key={index}>
          <QuestionHeader>{question.question}</QuestionHeader>
          <p>Tipo de pregunta: {question.type}</p>
          {question.type === 'opción multiple' && (
            <div>
              {question.options.map((option, i) => (
                <div key={i}>
                  <RadioInput type="radio" id={`q${index}o${i}`} name={`q${index}`} value={option} onChange={(e) => handleAnswerChange(index, e.target.value)} />
                  <label htmlFor={`q${index}o${i}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
          {question.type === 'verdadero-falso' && (
            <div>
              <RadioInput type="radio" id={`q${index}true`} name={`q${index}`} value="Verdadero" onChange={(e) => handleAnswerChange(index, e.target.value)} />
              <label htmlFor={`q${index}true`}>Verdadero</label>
              <RadioInput type="radio" id={`q${index}false`} name={`q${index}`} value="Falso" onChange={(e) => handleAnswerChange(index, e.target.value)} />
              <label htmlFor={`q${index}false`}>Falso</label>
            </div>
          )}
          {question.type === 'abierta' && (
            <AnswerInput type="text" value={userAnswers[index]} onChange={(e) => handleAnswerChange(index, e.target.value)} />
          )}
        </QuestionContainer>
      ))}
      <SubmitButton onClick={handleSubmit}>Entregar</SubmitButton>
      {score !== null && <p>Score: {score} / {questions.length}</p>}
    </div>
  );
};

export default QuestionList;
