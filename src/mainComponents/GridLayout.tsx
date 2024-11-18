import React, { useEffect, useRef, useState } from "react";

const GridLayout = ({ selectedMachines }) => {
  const gridRef = useRef(null);
  const [rowMap, setRowMap] = useState({}); // Tracks row of each item by index

  useEffect(() => {
    if (gridRef.current) {
      const children = Array.from(gridRef.current.children);

      // Compute row placement for each child
      const rowTracker = {};
      children.forEach((child, index) => {
        const offsetTop = child.offsetTop; // Distance from top of container
        if (!rowTracker[offsetTop]) rowTracker[offsetTop] = [];
        rowTracker[offsetTop].push(index); // Track indices of items in the same row
      });

      // Map items to their respective row indices
      const rowMapping = {};
      Object.keys(rowTracker).forEach((key, rowIndex) => {
        rowTracker[key].forEach((itemIndex) => {
          rowMapping[itemIndex] = rowIndex + 1; // Rows start at 1
        });
      });

      setRowMap(rowMapping); // Update state with row mapping
    }
  }, [selectedMachines]);

  return (
    <div className="grid-container" ref={gridRef}>
      {selectedMachines.map((machine, index) => (
        <div
          className="grid-item"
          key={index}
          style={{
            backgroundColor: rowMap[5] === 0 ? "#add8e6" : "#f4f4f4", // Highlight row 1 for demo
          }}
        >
          Machine {machine.name} (Row {rowMap[index] || "?"})
        </div>
      ))}
    </div>
  );
};

export default GridLayout;
