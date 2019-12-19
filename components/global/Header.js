import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === '/' ? true : false;
  return (
    <div style={headerStyles}>
      {!isHome && (
        <MainNavigation>
          <ul>
            <li>
              <Link href="/">
                <a>Back home</a>
              </Link>
            </li>
          </ul>
        </MainNavigation>
      )}
    </div>
  );
};

export default Header;
