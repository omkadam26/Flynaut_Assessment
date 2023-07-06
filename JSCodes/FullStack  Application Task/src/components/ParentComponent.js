import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState('');

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <ChildComponent onDataChanged={handleDataChange} />
      <p>Data from Child: {data}</p>
    </div>
  );
  
```javascript
export default ParentComponent;
