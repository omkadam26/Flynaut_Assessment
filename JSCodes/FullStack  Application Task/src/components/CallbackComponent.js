import React, { useCallback } from 'react';

const CallbackComponent = () => {
  const handleClick = useCallback(() => {
    // Callback function code
  }, []);

  return (
    <button onClick={handleClick}>Click Me</button>
  );
};

export default CallbackComponent;
