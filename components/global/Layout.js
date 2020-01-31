import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import SkipToContent from '../features/skipToContent/SkipToContent';
const Main = styled.main`
  max-width: 1200px;
  padding: 0 20px;
  width: 100%;
  margin: auto;
`;

const Layout = props => (
  <div>
    <SkipToContent />
    <Header />
    <Main id="main">{props.children}</Main>
  </div>
);

export default Layout;
