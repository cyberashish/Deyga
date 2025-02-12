"use client"
import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';

const IsotopeGrid = ({ items }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const iso = new Isotope(gridRef.current, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
    });

    return () => {
      iso.destroy();
    };
  }, [items]);

  return (
    <div ref={gridRef} className="grid">
      {items.map((item, index) => (
        <div key={index} className="grid-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default IsotopeGrid;
