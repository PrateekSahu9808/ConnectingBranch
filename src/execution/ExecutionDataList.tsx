import { useEffect, useRef, useState } from 'react';
import "./ExecutionDataList.scss"
const ExecutionDataList = ({dataSet}) => {
  console.log("🚀 ~ ExecutionDataList ~ dataSet:", dataSet)
  const [curveHeights, setCurveHeights] = useState([]);
  const itemRefs = useRef([]);
  
  // Function to calculate the height dynamically based on the position of each item
  const calculateCurveHeight = () => {
    const heights = itemRefs.current.map((item, index) => {
      if (index === 0) return 0; // No curve for the first item
      const previousItem = itemRefs.current[index - 1];
      const previousItemHeight = previousItem ? previousItem.offsetHeight : 0;
      return previousItemHeight + 45; // Adjust 20px for spacing between items
    });
    setCurveHeights(heights);
  };

  useEffect(() => {
    calculateCurveHeight();
    window.addEventListener('resize', calculateCurveHeight); 
    return () => {
      window.removeEventListener('resize', calculateCurveHeight);
    };
  }, []); 

  return (
    <div className="execution-list">
      {dataSet.map((data, index) => (
        <div className=" run-level-execution-dataset  execution-item" key={data.peVariableSetId} ref={(el) => (itemRefs.current[index] = el)}>
          {index > 0 && (
            <div className="curved-connector">
              <div 
                className="curve" 
                style={{ height: `${curveHeights[index]}px` }} 
              />
            </div>
          )}
          <div className="item-box">{`Item ${index + 1}`}</div>
        </div>
      ))}
    </div>
  );
};



export default ExecutionDataList;

