import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Stepper = ({ children }) => {
  const [activeItem, setActiveItem] = useState(0);
  const totalSteps = children && children.length - 1;
  const activeStep = children.map((child, idx) => {
    if (idx === activeItem) return child;
  });

  return (
    <div className="stepper">
      {activeStep}
      {activeItem > 0 && (
        <button onClick={() => setActiveItem(activeItem - 1)}>Previous</button>
      )}
      {totalSteps > activeItem && (
        <button onClick={() => setActiveItem(activeItem + 1)}>Next</button>
      )}
    </div>
  );
};

Stepper.propTypes = {
  uniqueId: PropTypes.string,
};

export const StepperItem = ({ children }) => {
  return <div className="stepper__item">{children}</div>;
};

export default Stepper;
