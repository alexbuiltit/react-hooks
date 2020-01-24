import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className="accordion__item">
      <button
        className="accordion__title"
        onClick={toggleAccordion}
        aria-expanded={open}
      >
        {title}
      </button>
      {open && (
        <div
          className={`accordion__content ${open ? 'open' : 'closed'}`}
          role="region"
        >
          {children}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Accordion;
