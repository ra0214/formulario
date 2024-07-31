import React from 'react';
import FormTemplate from '../components/templates/FormTemplate';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 20px;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Title>Crea tu propio Formulario</Title>
      <FormTemplate />
    </PageContainer>
  );
};

export default HomePage;
