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
//           <span>Script</span>
//           <span>1010</span>
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

//       <div className="script-count-line-container">
//         <div className="script-count-line-left-icon"></div>
//         <div className="script-count-line-left"></div>
//         <span className="script-count-line-text">255 Script</span>
//         <div className="script-count-line-right"></div>
//         <div className="script-count-line-right-icon"></div>
//       </div>
//       <div className="script-count-connecting-line-container">
//         <div className="script-count-connecting-line-items">
//           <div className="script-count-connecting-line-top-icon"></div>
//           <div className="script-count-connecting-line"></div>
//           <div className="script-count-connecting-line-down-icon"></div>
//           <div className="script-count-pill-connecting-line-container">
//             <div className="script-count-connecting-line-left-icon"></div>
//             <div className="script-count-connecting-line-left"></div>
//             <span className="script-count-connecting-line-text">
//               255 Script
//             </span>
//             <div className="script-count-connecting-line-right"></div>
//             <div className="script-count-connecting-line-right-icon"></div>
//           </div>
//           <div className="script-count-connecting-dotted-line-container">
//               <div className="script-count-connecting-dotted-line-top-icon"></div>
//               <span className="script-count-connecting-dotted-line-text"> 255 Script</span>
//               <div className="script-count-connecting-dotted-line-bottom-icon"></div>
//           </div>
//         </div>
//       </div>
//       <div className="machine-details-container">
//         <div className="machine-details-item-1"></div>
//         <div className="machine-details-item-2"></div>
//         <div className="machine-details-item-3"></div>
//         <div className="machine-details-item-4"></div>

//       </div>
//     </div>
//   );
// };

// export default ParallelRunBranch;

// !dyanimcally  on count
import React from "react";
import "./ParallelRunBranch.scss";

interface NodeStructureProps {
  machineCount: number;
}

const ParallelRunBranch: React.FC<NodeStructureProps> = () => {
  let machineCount=4
  const isOddMachineCount = machineCount % 2 !== 0;
  console.log("🚀 ~ isOddMachineCount:", isOddMachineCount)
  const halfCount = Math.floor(machineCount / 2);
  console.log("🚀 ~ halfCount:", halfCount)

  return (
    <div className="grid-container">
      {/* Render top items */}
      {[...Array(halfCount)].map((_, index) => (
        <div className="grid-item top" key={`top-${index}`}>
          <div className="top-line-box"></div>
          <div className="arrow-up"></div>
          <div className="top-line-input">{index}</div>
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
          <div className="bottom-line-input">{index}</div>
        </div>
      ))}
    </div>
  );
};

export default ParallelRunBranch;
