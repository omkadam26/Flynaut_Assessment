import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const ContextComponent = () => {
  const data = useContext(MyContext);

  return (
    // JSX using the context data
  );
};

export default ContextComponent;
