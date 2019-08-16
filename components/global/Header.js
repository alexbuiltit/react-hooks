import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const headerStyles = {
  marginBottom: '80px',
};
const MainNavigation = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      padding: 5px 20px;
      a {
      }
    }
  }
`;
const Header = () => (
  <div style={headerStyles}>
    <MainNavigation>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/modal">
            <a>A fully accessible Modal</a>
          </Link>
        </li>
        <li>
          <Link href="/stepper">
            <a>A content stepper</a>
          </Link>
        </li>
      </ul>
    </MainNavigation>
  </div>
);

export default Header;
