// ButtonGrid.jsx

import React from 'react';
import styled from 'styled-components';
import css from 'styled-components';
import { sizes } from '../../base/sizes';
import { useState } from 'react';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 100%;
`;

const GridButton = styled.button`
  width: 60px;
  height: 60px;
  font-size: ${sizes.large};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ isselected }) => 
    isselected && 
    css`
      background-color: #ff5722;
    `
  }

  @media screen and (max-width: 1000px){
    width: 20px;
    height: 40px;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  background-color: #009172;
`;

const ButtonGrid = ({ numberOfButtons, onButtonClick }) => {
  const buttonConfigs = Array.from({ length: numberOfButtons }).map((_, index) => ({
    color: 'black_green', // Modify color as needed
    size: 'loginButton', // Modify size as needed
  }));

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    // Toggle the selected button
    console.log(`button ${index} clicked`)
    setSelectedButton((prevSelected) => (prevSelected === index ? null : index));

    // Pass the clicked button index to the parent component
    onButtonClick(index);
  };

  return (
    <Wrapper>
      <GridContainer>
        {buttonConfigs.map((config, index) => (
          <GridButton key={index} isselected={selectedButton === index} type={config} onClick={() => handleButtonClick(index)}>
            {index + 1}
          </GridButton>
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default ButtonGrid;