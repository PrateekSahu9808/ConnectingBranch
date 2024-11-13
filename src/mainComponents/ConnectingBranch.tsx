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

import "./ConnectingBranch.scss";
import { machineData } from "./data";

// Recursive function to calculate vertical line height
const calculateVerticalLineHeight = (instances) => {
  const instanceHeight = 35.5; // Base height for each instance
  let totalHeight = 0;

  instances.forEach((instance) => {
    totalHeight += instanceHeight;

    // Recursively add height for nested runLevelExecutionDataSets
    if (instance.runLevelExecutionDataSets && instance.runLevelExecutionDataSets.length > 0) {
      totalHeight += calculateVerticalLineHeight(instance.runLevelExecutionDataSets);
    }
  });

  return totalHeight;
};

const ConnectingBranch = () => {
  return (
    <div className="grid-container">
      {machineData.executionSettings.machines.selectedMachines.map(
        (data, index) => {
          // Calculate the vertical line height based on machineInstances
          const verticalLineHeight = calculateVerticalLineHeight(data.machineInstances);

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

                        {/* Only add the vertical line on the first instance */}
                        {isFirstLine && (
                          <div
                            className="vertical-line"
                            style={{ height: verticalLineHeight }}
                          ></div>
                        )}
                      </div>

                      <div className="machine-instance">
                        {instance.runLevelExecutionDataSets.map((dataSet, datasetIdx) => (
                          <div key={datasetIdx} className="run-level-execution-dataset">
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
        }
      )}
    </div>
  );
};

export default ConnectingBranch;
