import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
  width: 100%;
  height: 100%;

  @media screen and (width: 1540px){
    
  }
`;

const handleChange = (value) => {
  console.log(`${value}`);
};

export const ChooseSubject = ({ type, options }) => (
    <StyledSelect
      type={type}
      defaultValue={options[0]?.value}
      onChange={handleChange}
      options={options.map((item, index) => ({
        value: item.value,
        label: item.label,
      }))}
    />
);