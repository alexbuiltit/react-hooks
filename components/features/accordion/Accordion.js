import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ title, uniqueId, children }) => {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className="accordion__item">
      <button
        className="accordion__title"
        id={`${uniqueId}title`}
        onClick={toggleAccordion}
        aria-expanded={open}
        aria-controls={uniqueId}
      >
        {title}
      </button>
      {open && (
        <div
          className={`accordion__content ${open ? 'open' : 'closed'}`}
          id={uniqueId}
          role="region"
          aria-labelledby={`${uniqueId}title`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  uniqueId: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Accordion;
