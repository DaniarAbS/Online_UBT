import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';

const StyledSelect = styled(Select)`
  width: 100%;
  height: 100%;

  @media screen and (width: 1540px){
    
  }
`;


export const ChooseSubject = ({ options }) => {
  const [selectedSubject, setSelectedSubject] = useState(options[0]);

  const handleChange = (selectedOption) => {
    setSelectedSubject(selectedOption);
  };

  return (
    <StyledSelect
      defaultValue={selectedSubject.name}
      onChange={handleChange}
      options={options.map((item) => ({
        value: item.name,
        label: item.name,
      }))}
    />
  );
};