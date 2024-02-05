import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import { SelectStyles } from './SelectTemplate';

const StyledSelect = styled(Select)`
  ${({ type }) => SelectStyles[type]}
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