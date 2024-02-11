import React from 'react';
import ButtonGrid from './ButtonGrid'
import styled from 'styled-components';

const QuestionSetContainer = styled.div`
    overflow: auto; /* Enable scrolling if content exceeds the container */
    
`;

const QuestionSet = () => {
  const handleButtonClick = (index) => {
    // Handle button click in the parent component
    console.log(`Button ${index + 1} clicked.`);
    // You can update other components or state based on button click
  };

  return (
    <QuestionSetContainer>
      {/* Specify the number of buttons you want */}
      <ButtonGrid numberOfButtons={40} onButtonClick={handleButtonClick} />
    </QuestionSetContainer>
  );
};

export default QuestionSet;
