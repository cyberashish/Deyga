import IsotopeGrid from '@/app/Plugins/IsotopeGrid';
import React from 'react';


const Testing = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className="App">
      <IsotopeGrid items={items} />
    </div>
  );
};

export default Testing;
