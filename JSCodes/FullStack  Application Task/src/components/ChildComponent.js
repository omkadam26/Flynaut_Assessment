import React from 'react';

const ChildComponent = ({ onDataChanged }) => {
  const handleClick = () => {
    const newData = 'New data from child';
    onDataChanged(newData);
  };

  return (
    <button onClick={handleClick}>Update Parent</button>
  );
};

export default ChildComponent;
