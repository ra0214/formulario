import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const FormContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const OptionContainer = styled.div`
  margin: 10px 0;
`;

const QuestionForm = ({ addQuestion }) => {
  const [question, setQuestion] = useState('');
  const [type, setType] = useState('opción multiple');
  const [options, setOptions] = useState(['']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = options.slice();
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    addQuestion({ question, type, options, correctAnswer });
    setQuestion('');
    setOptions(['']);
    setCorrectAnswer('');
  };

  return (
    <FormContainer>
      <Input type="text" placeholder="Ingresa tu pregunta" value={question} onChange={(e) => setQuestion(e.target.value)} />
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="opción multiple">Opción Multiple</option>
        <option value="verdadero-falso">Verdadero/Falso</option>
        <option value="abierta">Preguntas Abiertas</option>
      </Select>
      {type === 'opción multiple' && (
        <OptionContainer>
          {options.map((option, index) => (
            <Input key={index} type="text" placeholder={`Opción ${index + 1}`} value={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
          ))}
          <Button text="Agregar opción" onClick={handleAddOption} />
        </OptionContainer>
      )}
      <Input type="text" placeholder="Ingresa la respuesta correcta" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} />
      <Button text="Agregar pregunta" onClick={handleSubmit} />
    </FormContainer>
  );
};

export default QuestionForm;
