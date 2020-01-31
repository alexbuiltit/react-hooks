import React from 'react';
import styled from 'styled-components';

const SkipToContentStyled = styled.a`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  &:focus {
    position: static;
    display: block;
    width: 100%;
    height: auto;
    padding: 10px;
    background-color: #f4f4f4;
  }
`;

const SkipToContent = () => {
  return (
    <SkipToContentStyled href="#main">Skip to main content</SkipToContentStyled>
  );
};

export default SkipToContent;
