import React, { useRef } from 'react';

const ScrollComponent = () => {
  const divRef = useRef(null);

  const scrollToBottom = () => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  };

  return (
    <div ref={divRef} style={{ height: '300px', overflowY: 'scroll' }}>
      {/* Scrollable content */}
      <button onClick={scrollToBottom}>Scroll to Bottom</button>
    </div>
  );
};

export default ScrollComponent;
