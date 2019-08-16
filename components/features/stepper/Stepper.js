import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Stepper = ({ children }) => {
  const [activeItem, setActiveItem] = useState(1);
  const totalSteps = children && children.length;
  const activeStep = children.map((child, idx) => {
    if (idx === activeItem - 1) return child;
  });

  return (
    <div className="stepper">
      {activeStep}
      {activeItem > 1 && (
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
