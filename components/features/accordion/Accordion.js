import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  .accordion__content {
    margin: 0;
    padding: 1em 1.5em;
  }
  .accordion__content {
    display: none;
    &.open {
      display: block;
    }
  }
`;

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <AccordionWrapper className="accordion__item">
      <button
        className="accordion__title"
        onClick={toggleAccordion}
        aria-expanded={open}
      >
        {title}
      </button>
      <div
        className={`accordion__content ${open ? 'open' : 'closed'}`}
        role="region"
      >
        {children}
      </div>
    </AccordionWrapper>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
};

export default Accordion;
