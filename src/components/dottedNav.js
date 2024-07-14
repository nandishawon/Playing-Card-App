import React, { useEffect, useState } from 'react';

const DottedNavigation = ({ totalSteps, activeStep, onChangeStep }) => {
  const [dots, setDots] = useState([])  


  useEffect(() => {
    const newDots = Array.from({ length: totalSteps }, (_, index) => index + 1);
    setDots(newDots);
  }, [totalSteps]);

  return (
    <div className="dotted-navigation">
      {dots.map((dot, index) => (
        <div
          key={index}
          className={`dot ${activeStep===index + 1  ? 'active' : ''}`}
          onClick={() => onChangeStep(index + 1)} />
      ))}

    </div>
  );
};

export default DottedNavigation;
