import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Input = ({ type, placeholder, value, onChange }) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
