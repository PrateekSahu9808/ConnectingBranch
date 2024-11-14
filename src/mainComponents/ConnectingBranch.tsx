// import "./ConnectingBranch.scss";
// import { machineData } from "./data";

// const ConnectingBranch = () => {
//   return (
//     <div className="grid-container">
//       {machineData.executionSettings.machines.selectedMachines.map((data, index) => (
//         <div className="selectedMachines" key={index}>
//           <div className="selectedMachines-input">
//             <input type="text" value={data.clientId} readOnly />
//           </div>
//           <div className="selectedMachines-connecting-line">
//             {data.machineInstances.map((instance, idx) => (
//               <div className="line" key={instance.clientId || idx}>
//                 <div className="left-icon"></div>
//                 {instance.numberOfRuns && (
//                   <div className="selectedMachines-connecting-line-text">
//                     {instance.numberOfRuns} Runs
//                   </div>
//                 )}
//                 <div className="right-icon"></div>
//               </div>
//             ))}
//           </div>
//           <div className="machine-instance-content">
//             {data.machineInstances.map((instance) => (
//               <div className="machine-instance" key={instance.clientId}>
//                 <div className="machine-instance-details">{instance.numberOfRuns}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ConnectingBranch;

// ----------------
// import "./ConnectingBranch.scss";
// import { machineData } from "./data";

// const ConnectingBranch = () => {
//   return (
//     <div className="grid-container">
//       {machineData.executionSettings.machines.selectedMachines.map(
//         (data, index) => (
//           <div className="selectedMachines" key={index}>
//             <div className="selectedMachines-input">
//               <input type="text" value={data.clientId} readOnly />
//             </div>

//             {/* Render each machine instance line and details */}
//             {data.machineInstances.map((instance, idx) => {
//               const isSecondLine = idx > 0; // Check if it's the second line or not
//               const instanceHeight = 30; // You can adjust this height per instance

//               // Dynamically calculate the height of the vertical line based on the number of instances
//               const verticalLineHeight = data.machineInstances.length * instanceHeight;

//               return (
//                 <div className="machine-instance-row" key={instance.clientId || idx}>
//                   {/* Column 2: Connecting Line */}
//                   <div
//                     className={`selectedMachines-connecting-line ${isSecondLine ? 'second-line' : ''}`}
//                   >
//                     <div className="line">
//                       <div className="left-icon"></div>
//                       {instance.numberOfRuns && (
//                         <div className="selectedMachines-connecting-line-text">
//                           {instance.numberOfRuns} Runs
//                         </div>
//                       )}
//                       <div className="right-icon"></div>
//                     </div>

//                     {/* Insert vertical line inside second-line */}
//                     {isSecondLine && (
//                       <div
//                         className="vertical-line"
//                         style={{ height: verticalLineHeight }}
//                       ></div>
//                     )}
//                   </div>

//                   {/* Column 3: Machine instance details */}
//                   <div className="machine-instance">
//                     <div className="machine-instance-details">{instance.numberOfRuns}</div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default ConnectingBranch;

// !2222
// import "./ConnectingBranch.scss";
// import { machineData } from "./data";

// const ConnectingBranch = () => {
//   return (
//     <div className="grid-container">
//       {machineData.executionSettings.machines.selectedMachines.map(
//         (data, index) => (
//           <div className="selectedMachines" key={index}>
//             <div className="selectedMachines-input">
//               <input type="text" value={data.clientId} readOnly />
//             </div>

//             {/* Scenario 1: No machineInstances */}
//             {data.machineInstances.length === 0 ? (
//               <>
//                 {/* First line with no instance.numberOfRuns */}
//                 <div className="selectedMachines-connecting-line">
//                   <div className="line">
//                     <div className="left-icon"></div>
//                     <div className="right-icon"></div>
//                   </div>
//                 </div>

//                 {/* Column 3: Button to add machine */}
//                 <div className="machine-instance">
//                   <button className="add-machine-button">Add Machine</button>
//                 </div>
//               </>
//             ) : (
//               // Scenario 2: Render machineInstances
//               data.machineInstances.map((instance, idx) => {
//                 const isSecondLine = idx > 0; // Check if it's the second line or not
//                 const instanceHeight = 32; // Adjust this height per instance
//                 const verticalLineHeight =
//                   data.machineInstances.length * instanceHeight;

//                 return (
//                   <div
//                     className="machine-instance-row"
//                     key={instance.clientId || idx}
//                   >
//                     {/* Column 2: Connecting Line */}
//                     <div
//                       className={`selectedMachines-connecting-line ${
//                         isSecondLine ? "second-line" : ""
//                       }`}
//                     >
//                       <div className="line">
//                         <div className="left-icon"></div>
//                         {instance.numberOfRuns && (
//                           <div className="selectedMachines-connecting-line-text">
//                             {instance.numberOfRuns} Runs
//                           </div>
//                         )}
//                         <div className="right-icon"></div>
//                       </div>

//                       {/* Insert vertical line inside second-line */}
//                       {isSecondLine && (
//                         <div
//                           className="vertical-line"
//                           style={{ height: verticalLineHeight }}
//                         ></div>
//                       )}
//                     </div>

//                     {/* Column 3: Machine instance details */}
//                     <div className="machine-instance">
//                       {instance.runLevelExecutionDataSets.map(
//                         (dataSet, datasetIdx) => (
//                           <div
//                             key={datasetIdx}
//                             className="run-level-execution-dataset"
//                           >
//                             <p>{dataSet.peVariableSetId}</p>

//                           </div>
//                         )
//                       )}
//                     </div>

//                     {/* Render second level connecting line after the last machine instance */}
//                     {idx === data.machineInstances.length - 1 && (
//                       <>
//                         <div className="selectedMachines-connecting-line second-line">
//                           <div className="line">
//                             <div className="left-icon"></div>
//                             <div className="right-icon"></div>
//                           </div>
//                         </div>

//                         {/* Column 3: Button to add machine */}
//                         <div className="machine-instance">
//                           <button className="add-machine-button">
//                             Add Machine
//                           </button>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default ConnectingBranch;

// import "./ConnectingBranch.scss";
// import { machineData } from "./data";

// const ConnectingBranch = () => {
//   return (
//     <div className="grid-container">
//       {machineData.executionSettings.machines.selectedMachines.map(
//         (data, index) => (
//           <div className="selectedMachines" key={index}>
//             <div className="selectedMachines-input">
//               <input type="text" value={data.clientId} readOnly />
//             </div>

//             {/* Scenario 1: No machineInstances */}
//             {data.machineInstances.length === 0 ? (
//               <>
//                 {/* First line with no instance.numberOfRuns */}
//                 <div className="selectedMachines-connecting-line">
//                   <div className="line">
//                     <div className="left-icon"></div>
//                     <div className="right-icon"></div>
//                   </div>
//                 </div>

//                 {/* Column 3: Button to add machine */}
//                 <div className="machine-instance">
//                   <button className="add-machine-button">Add Machine</button>
//                 </div>
//               </>
//             ) : (
//               // Scenario 2: Render machineInstances
//               data.machineInstances.map((instance, idx) => {
//                 const isSecondLine = idx > 0; // Check if it's the second line or not
//                 const instanceHeight = 32; // Adjust this height per instance
//                 const verticalLineHeight =
//                   data.machineInstances.length * instanceHeight;

//                 return (
//                   <div
//                     className="machine-instance-row"
//                     key={instance.clientId || idx}
//                   >
//                     {/* Column 2: Connecting Line */}
//                     <div
//                       className={`selectedMachines-connecting-line ${
//                         isSecondLine ? "second-line" : ""
//                       }`}
//                     >
//                       <div className="line">
//                         <div className="left-icon"></div>
//                         {instance.numberOfRuns && (
//                           <div className="selectedMachines-connecting-line-text">
//                             {instance.numberOfRuns} Runs
//                           </div>
//                         )}
//                         <div className="right-icon"></div>
//                       </div>

//                       {/* Insert vertical line inside second-line */}
//                       {isSecondLine && (
//                         <div
//                           className="vertical-line"
//                           style={{ height: verticalLineHeight }}
//                         ></div>
//                       )}
//                     </div>

//                     {/* Column 3: Iterating runLevelExecutionDataSets */}
//                     <div className="machine-instance">
//                       {instance.runLevelExecutionDataSets.map(
//                         (dataSet, datasetIdx) => (
//                           <div
//                             key={datasetIdx}
//                             className="run-level-execution-dataset"
//                           >
//                             <p>{dataSet.peVariableSetId}</p>
//                           </div>
//                         )
//                       )}
//                     </div>

//                     {/* Render second level connecting line after the last machine instance */}
//                     {idx === data.machineInstances.length - 1 && (
//                       <>
//                         <div className="selectedMachines-connecting-line second-line">
//                           <div className="line">
//                             <div className="left-icon"></div>
//                             <div className="right-icon"></div>
//                           </div>
//                         </div>

//                         {/* Column 3: Button to add machine */}
//                         <div className="machine-instance">
//                           <button className="add-machine-button">
//                             Add Machine
//                           </button>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default ConnectingBranch;

// import "./ConnectingBranch.scss";
// import { machineData } from "./data";

// const calculateVerticalLineHeight = (machineInstances) => {
//   const instanceHeight = 32; // Base height for each instance
//   let totalHeight = 0;

//   machineInstances.forEach((instance) => {
//     totalHeight += instanceHeight;

//     // Recursively add height for nested runLevelExecutionDataSets
//     if (instance.runLevelExecutionDataSets && instance.runLevelExecutionDataSets.length > 0) {
//       totalHeight += calculateVerticalLineHeight(instance.runLevelExecutionDataSets);
//     }
//   });

//   return totalHeight;
// };

// const ConnectingBranch = () => {
//   return (
//     <div className="grid-container">
//       {machineData.executionSettings.machines.selectedMachines.map((data, index) => (
//         <div className="selectedMachines" key={index}>
//           <div className="selectedMachines-input">
//             <input type="text" value={data.clientId} readOnly />
//           </div>

//           {/* Calculate the height for the vertical line that spans across machine instances */}
//           {data.machineInstances.length > 0 && (
//             <div
//               className="vertical-line"
//               style={{ height: calculateVerticalLineHeight(data.machineInstances) }}
//             ></div>
//           )}

//           {/* Scenario 1: No machineInstances */}
//           {data.machineInstances.length === 0 ? (
//             <>
//               <div className="selectedMachines-connecting-line">
//                 <div className="line">
//                   <div className="left-icon"></div>
//                   <div className="right-icon"></div>
//                 </div>
//               </div>
//               <div className="machine-instance">
//                 <button className="add-machine-button">Add Machine</button>
//               </div>
//             </>
//           ) : (
//             // Scenario 2: Render machineInstances
//             data.machineInstances.map((instance, idx) => {
//               const isSecondLine = idx > 0;

//               return (
//                 <div className="machine-instance-row" key={instance.clientId || idx}>
//                   <div
//                     className={`selectedMachines-connecting-line ${isSecondLine ? "second-line" : ""}`}
//                   >
//                     <div className="line">
//                       <div className="left-icon"></div>
//                       {instance.numberOfRuns && (
//                         <div className="selectedMachines-connecting-line-text">
//                           {instance.numberOfRuns} Runs
//                         </div>
//                       )}
//                       <div className="right-icon"></div>
//                     </div>
//                   </div>
//                   <div className="machine-instance">
//                     {instance.runLevelExecutionDataSets.map((dataSet, datasetIdx) => (
//                       <div key={datasetIdx} className="run-level-execution-dataset">
//                         <p>{dataSet.peVariableSetId}</p>
//                       </div>
//                     ))}
//                   </div>

//                   {idx === data.machineInstances.length - 1 && (
//                     <>
//                       <div className="selectedMachines-connecting-line second-line">
//                         <div className="line">
//                           <div className="left-icon"></div>
//                           <div className="right-icon"></div>
//                         </div>
//                       </div>
//                       <div className="machine-instance">
//                         <button className="add-machine-button">Add Machine</button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               );
//             })
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ConnectingBranch;
// dynamic ConnectingBranch is comming
// import { useEffect, useRef, useState } from "react";
// import "./ConnectingBranch.scss";
// import { machineData } from "./data";

// const calculateVerticalLineHeight = (machineInstances, datasetHeight, gap) => {
//   const totalDataSets = machineInstances.reduce((acc, instance) => {
//     return acc + (instance.runLevelExecutionDataSets?.length || 0);
//   }, 0);

//   return totalDataSets * datasetHeight + totalDataSets * gap;
// };

// const calculateDottedLineHeight = (runLevelExecutionDataSets, datasetHeight, gap) => {
//   return runLevelExecutionDataSets.length * datasetHeight + (runLevelExecutionDataSets.length - 1) * gap;
// };

// const ConnectingBranch = () => {
//   const datasetRef = useRef(null);
//   const [verticalLineHeight, setVerticalLineHeight] = useState(0);
//   const [dottedLineHeight, setDottedLineHeights] = useState(0);
//   console.log("🚀 ~ ConnectingBranch ~ dottedLineHeight:", dottedLineHeight)

//   useEffect(() => {
//     const datasetHeight = datasetRef.current?.offsetHeight;
//     const gap = 16;

//     const totalHeight =
//       machineData.executionSettings.machines.selectedMachines.reduce(
//         (acc, data) => {
//           const height = calculateVerticalLineHeight(
//             data.machineInstances,
//             datasetHeight,
//             gap
//           );
//           return acc + height;
//         },
//         0
//       );

//       const heights = {};
//       machineData.executionSettings.machines.selectedMachines.forEach((machine) => {
//         machine.machineInstances.forEach((instance) => {
//           heights[instance.clientId] = calculateDottedLineHeight(instance.runLevelExecutionDataSets, datasetHeight, gap);
//         });
//       });

//       setVerticalLineHeight(totalHeight);
//       setDottedLineHeights(heights);
//   }, [machineData]);

//   return (
//     <div className="grid-container">
//       {machineData.executionSettings.machines.selectedMachines.map(
//         (data, index) => {
//           return (
//             <div className="selectedMachines" key={index}>
//               <div className="selectedMachines-input">
//                 <input type="text" value={data.clientId} readOnly />
//               </div>

//               {data.machineInstances.length === 0 ? (
//                 <>
//                   <div className="selectedMachines-connecting-line">
//                     <div className="line">
//                       <div className="left-icon"></div>
//                       <div className="right-icon"></div>
//                     </div>
//                   </div>
//                   <div className="machine-instance">
//                     <button className="add-machine-button">Add Machine</button>
//                   </div>
//                 </>
//               ) : (
//                 data.machineInstances.map((instance, idx) => {
//                   const isFirstLine = idx === 0;

//                   return (
//                     <div
//                       className="machine-instance-row"
//                       key={instance.clientId || idx}
//                     >
//                       <div
//                         className={`selectedMachines-connecting-line ${
//                           !isFirstLine ? "second-line" : ""
//                         }`}
//                       >
//                         <div className="line">
//                           <div className="left-icon"></div>
//                           {instance.numberOfRuns && (
//                             <div className="selectedMachines-connecting-line-text">
//                               {instance.numberOfRuns} Runs
//                             </div>
//                           )}
//                           <div className="right-icon"></div>
//                         </div>

//                         {isFirstLine && (
//                           <div
//                             className="vertical-line"
//                             style={{ height: `${verticalLineHeight}px` }}
//                           ></div>
//                         )}

//                       </div>

//                       <div className="machine-instance">
//                         {instance.runLevelExecutionDataSets.map(
//                           (dataSet, datasetIdx) => (
//                             <>
//                                     <div className="dotted-vertical-line"
//                         style={{height:`${30}px`}}
//                         >

//                         </div>
//                             <div
//                               key={datasetIdx}
//                               className="run-level-execution-dataset"
//                               ref={datasetIdx === 0 ? datasetRef : null}
//                             >
//                               <p>{dataSet.peVariableSetId}</p>
//                             </div>

//                           </>
//                           )
//                         )}
//                       </div>

//                       {idx === data.machineInstances.length - 1 && (
//                         <>
//                           <div className="selectedMachines-connecting-line second-line">
//                             <div className="line">
//                               <div className="left-icon"></div>
//                               <div className="right-icon"></div>
//                             </div>
//                           </div>

//                           <div className="machine-instance">
//                             <button className="add-machine-button">
//                               Add Machine
//                             </button>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   );
//                 })
//               )}
//             </div>
//           );
//         }
//       )}
//     </div>
//   );
// };

// export default ConnectingBranch;

// !!dotted
import { useEffect, useRef, useState } from "react";
import "./ConnectingBranch.scss";
import { machineData } from "./data";

const calculateVerticalLineHeight = (machineInstances, datasetHeight, gap) => {
  const totalDataSets = machineInstances.reduce((acc, instance) => {
    return acc + (instance.runLevelExecutionDataSets?.length || 0);
  }, 0);

  return totalDataSets * datasetHeight + totalDataSets * gap;
};

const ConnectingBranch = () => {
  const datasetRef = useRef(null);
  const [datasetHeight, setDatasetHeight] = useState(0);
  
  useEffect(() => {
    if (datasetRef.current) {
      setDatasetHeight(datasetRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="grid-container">
      {machineData.executionSettings.machines.selectedMachines.map((data, index) => {
        const gap = 16;
        const verticalLineHeight = calculateVerticalLineHeight(data.machineInstances, datasetHeight, gap);

        return (
          <div className="selectedMachines" key={index}>
            <div className="selectedMachines-input">
              <input type="text" value={data.clientId} readOnly />
            </div>

            {data.machineInstances.length === 0 ? (
              <>
                <div className="selectedMachines-connecting-line">
                  <div className="line">
                    <div className="left-icon"></div>
                    <div className="right-icon"></div>
                  </div>
                </div>
                <div className="machine-instance">
                  <button className="add-machine-button">Add Machine</button>
                </div>
              </>
            ) : (
              data.machineInstances.map((instance, idx) => {
                const isFirstLine = idx === 0;

                return (
                  <div className="machine-instance-row" key={instance.clientId || idx}>
                    <div
                      className={`selectedMachines-connecting-line ${!isFirstLine ? "second-line" : ""}`}
                    >
                      <div className="line">
                        <div className="left-icon"></div>
                        {instance.numberOfRuns && (
                          <div className="selectedMachines-connecting-line-text">
                            {instance.numberOfRuns} Runs
                          </div>
                        )}
                        <div className="right-icon"></div>
                      </div>

                      {isFirstLine && (
                        <div
                          className="vertical-line"
                          style={{ height: `${verticalLineHeight}px` }}
                        ></div>
                      )}
                    </div>

                    <div className="machine-instance">
                      {instance.runLevelExecutionDataSets.map((dataSet, datasetIdx) => (
                        <div
                          key={datasetIdx}
                          className="run-level-execution-dataset"
                          ref={datasetIdx === 0 ? datasetRef : null} 
                        >
                          <p>{dataSet.peVariableSetId}</p>
                        </div>
                      ))}
                    </div>

                    {idx === data.machineInstances.length - 1 && (
                      <>
                        <div className="selectedMachines-connecting-line second-line">
                          <div className="line">
                            <div className="left-icon"></div>
                            <div className="right-icon"></div>
                          </div>
                        </div>

                        <div className="machine-instance">
                          <button className="add-machine-button">Add Machine</button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ConnectingBranch;
