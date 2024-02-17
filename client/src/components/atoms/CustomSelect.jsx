import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
  width: 100%;
  height: 100%;

  @media screen and (width: 1540px){
    
  }
`;

export const ChooseSubject = ({ type, options, onChange }) => {
    return(
      <StyledSelect
        type={type}
        defaultValue={options[0]?.value}
        onChange={onChange}
        options={options.map((item, index) => ({
          value: item.value,
          label: item.label,
        }))}
      />
    )
};
