import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

const ListItemWrapper = styled.div`
  a {
    display: flex;
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
    list-style-type: none;
    background: #94c5cc;
    border-radius: 10px;
    padding: 20px;
    text-decoration: none;
    font-size: 24px;
    color: #222;
    border: 5px solid transparent;
    transition: all ease 300ms;
    &:hover,
    :focus {
      background: #fff;
      border-color: #94c5cc;
    }
  }
`;

const ListItem = ({ link, title }) => {
  if (!link) return null;
  return (
    <ListItemWrapper>
      <Link href={link}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
    </ListItemWrapper>
  );
};

ListItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};
export default ListItem;
