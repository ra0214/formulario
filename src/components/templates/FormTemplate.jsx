import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionForm from '../molecules/QuestionForm';
import QuestionList from '../organisms/QuestionList';
import Button from '../atoms/Button';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const FormTemplate = () => {
  const [questions, setQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <Container>
      <Button text={showForm ? "Cerrar Formulario" : "Abrir Formulario"} onClick={() => setShowForm(!showForm)} />
      {showForm && <QuestionForm addQuestion={addQuestion} />}
      <QuestionList questions={questions} />
    </Container>
  );
};

export default FormTemplate;
