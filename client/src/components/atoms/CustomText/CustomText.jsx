// CustomText.js

import React from 'react';
import styled from 'styled-components';
import { TextStyles } from './TextTemplate';

const StyledText = styled.text`
  ${({ type }) => TextStyles[type]}
`;

export const Text = ({ type, children, color, weight }) => {
  return (
    <StyledText type={type} style={{color: `${color}`, fontWeight: `${weight}`}}>
      {children}
    </StyledText>
  );
};

