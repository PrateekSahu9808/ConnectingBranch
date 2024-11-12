// import "./ParallelRunBranch.scss";

// interface NodeStructureProps {
//   topLineHeight?: number;
//   bottomLineHeight?: number;
// }

// const ParallelRunBranch: React.FC<NodeStructureProps> = () => {
//   return (
//     <div className="grid-container">
//       <div className="grid-item-1">
//         <div className="top-line-box"></div>
//         <div className="arrow-up"></div>
//         <div className="top-line-input"></div>
//       </div>
//       <div className="grid-item-2">
//         <div className="script-count-box">
//             <span>Script</span> 
//             <span>1010</span>   
//         </div>
//       </div>
//       <div className="grid-item-3">
//         <div className="right-line-box"></div>
//         <div className="arrow-right"></div>
//         <div className="right-line-input"></div>
//       </div>
//       <div className="grid-item-4">
//         <div className="bottom-line-box"></div>
//         <div className="arrow-down"></div>
//         <div className="bottom-line-input"></div>
//       </div>
//       <div className="grid-item-5">
//         <div className="bottom-line-box"></div>
//         <div className="arrow-down"></div>
//         <div className="bottom-line-input"></div>
//       </div>
//     </div>
//   );
// };

// export default ParallelRunBranch;

import React from "react";
import "./ParallelRunBranch.scss";

interface NodeStructureProps {
  machineCount: number; // Number of machines to render
}

const ParallelRunBranch: React.FC<NodeStructureProps> = ({ machineCount=8 }) => {
  const isOddMachineCount = machineCount % 2 !== 0;
  const halfCount = Math.floor(machineCount / 2);

  return (
    <div className="grid-container">
      {/* Render top items */}
      {[...Array(halfCount)].map((_, index) => (
        <div className="grid-item top" key={`top-${index}`}>
          <div className="top-line-box"></div>
          <div className="arrow-up"></div>
          <div className="top-line-input"></div>
        </div>
      ))}

      {/* Script Count Box */}
      <div className="grid-item script-count">
        <div className="script-count-box">
          <span>Script</span>
          <span>1010</span>
        </div>
      </div>

      {/* Render middle item if odd machine count */}
      {isOddMachineCount && (
        <div className="grid-item middle">
          <div className="middle-line-box"></div>
          <div className="arrow-right"></div>
          <div className="middle-line-input"></div>
        </div>
      )}

      {/* Render bottom items */}
      {[...Array(halfCount)].map((_, index) => (
        <div className="grid-item bottom" key={`bottom-${index}`}>
          <div className="bottom-line-box"></div>
          <div className="arrow-down"></div>
          <div className="bottom-line-input"></div>
        </div>
      ))}
    </div>
  );
};

export default ParallelRunBranch;
