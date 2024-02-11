// CustomText.js

import React from 'react';
import styled from 'styled-components';
import { TextStyles } from './TextTemplate';

const StyledText = styled.text`
  ${({ type }) => TextStyles[type]}

`;

export const Text = ({ className, type, children, color, weight }) => {
  return (
    <StyledText className={className} type={type} style={{color: `${color}`, fontWeight: `${weight}`}}>
      {children}
    </StyledText>
  );
};

