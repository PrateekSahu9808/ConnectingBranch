// import { useEffect, useRef, useState } from "react";
// import "./ConnectingBranch.scss";
// import { machineData } from "./data";

// const calculateVerticalLineHeight = (machineInstances, datasetHeight, gap) => {
//   const totalDataSets = machineInstances.reduce((acc, instance) => {
//     return acc + (instance.runLevelExecutionDataSets?.length || 0);
//   }, 0);

//   return totalDataSets * datasetHeight + totalDataSets * gap;
// };

// const ConnectingBranch = () => {
//   const datasetRef = useRef(null);
//   const [datasetHeight, setDatasetHeight] = useState(0);
//   console.log("🚀 ~ ConnectingBranch ~ datasetHeight:", datasetHeight);

//   useEffect(() => {
//     if (datasetRef.current) {
//       setDatasetHeight(datasetRef.current.offsetHeight);
//     }
//   }, []);
//   const [curveHeights, setCurveHeights] = useState([]);
//   const itemRefs = useRef([]);

//   // Function to calculate the height dynamically based on the position of each item
//   const calculateCurveHeight = () => {
//     const heights = itemRefs.current.map((index) => {
//       if (index === 0) return 0;
//       return datasetHeight * 1.5;
//     });

//     setCurveHeights(heights);
//   };

//   useEffect(() => {
//     calculateCurveHeight();
//   }, [datasetHeight]);
//   return (
//     <div className="grid-container">
//       {machineData.executionSettings.machines.selectedMachines.map(
//         (data, index) => {
//           const gap = 16;
//           const verticalLineHeight = calculateVerticalLineHeight(
//             data.machineInstances,
//             datasetHeight,
//             gap
//           );

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
//                           {/* {instance.numberOfRuns && (
//                             <div className="selectedMachines-connecting-line-text">
//                               {instance.numberOfRuns} Runs
//                             </div>
//                           )} */}
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
//                           (dataSet, index) => (
//                             <div
//                               key={index}
//                               className="run-level-execution-dataset"
//                               ref={index === 0 ? datasetRef : null}
//                             >
//                               <>
//                                 <div
//                                   className="execution-item"
//                                   key={data.peVariableSetId}
//                                   ref={(el) => (itemRefs.current[index] = el)}
//                                 >
//                                   {console.log(index)}
//                                   { (
//                                     <div
//                                     className="curved-connector"
//                                       style={{ top: `${-datasetHeight + 5}px` }}
//                                     >
//                                       <div
//                                         className={`curve connector-${index}`}
//                                         style={{
//                                           height: `${curveHeights[index]}px`,
//                                         }}
//                                       >
//                                         <div className={`curve-right-icon-${index}`}></div>
//                                         <div className="selectedMachines-connecting-line-text">
//                                           151 Script
//                                         </div>
//                                       </div>
//                                     </div>
//                                   )}

//                                   <div className="run-data-box">
//                                     <div>{`Run ${index + 1}`}</div>
//                                   </div>
//                                 </div>
//                               </>
//                             </div>
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

// !!1st part

// import { useEffect, useRef, useState } from "react";
// import "./ConnectingBranch.scss";
// import { machineData } from "./data";

// const calculateVerticalLineHeight = (machineInstances, datasetHeight, gap) => {
//   const totalDataSets = machineInstances.reduce((acc, instance) => {
//     return acc + (instance.runLevelExecutionDataSets?.length || 0);
//   }, 0);

//   return totalDataSets * datasetHeight + totalDataSets * gap;
// };

// const ConnectingBranch = () => {
//   const datasetRef = useRef(null);
//   const [datasetHeight, setDatasetHeight] = useState(0);
// //   console.log("🚀 ~ ConnectingBranch ~ datasetHeight:", datasetHeight);

//   useEffect(() => {
//     if (datasetRef.current) {
//       setDatasetHeight(datasetRef.current.offsetHeight);
//     }
//   }, []);
//   const [curveHeights, setCurveHeights] = useState([]);
//   const itemRefs = useRef([]);

//   const calculateCurveHeight = () => {
//     const heights = itemRefs.current.map((index) => {
//       if (index === 0) return 0;
//       return datasetHeight * 1.5;
//     });

//     setCurveHeights(heights);
//   };

//   useEffect(() => {
//     calculateCurveHeight();
//   }, [datasetHeight]);

//   const totalNumberOfMachine=machineData.executionSettings.machines.selectedMachines.length
//   console.log("🚀 ~ ConnectingBranch ~ totalNumberOfMachine:", totalNumberOfMachine)

//   return (
//     <div className="grid-container">

//       {machineData.executionSettings.machines.selectedMachines.map(
//         (data, index) => {
//           const gap = 16;
//           const verticalLineHeight = calculateVerticalLineHeight(
//             data.machineInstances,
//             datasetHeight,
//             gap
//           );

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
//                           {/* {instance.numberOfRuns && (
//                             <div className="selectedMachines-connecting-line-text">
//                               {instance.numberOfRuns} Runs
//                             </div>
//                           )} */}
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
//                           (dataSet, index) => (
//                             <div
//                               key={index}
//                               className="run-level-execution-dataset"
//                               ref={index === 0 ? datasetRef : null}
//                             >
//                               <>
//                                 <div
//                                   className="execution-item"
//                                   key={data.peVariableSetId}
//                                   ref={(el) => (itemRefs.current[index] = el)}
//                                 >
//                                   {console.log(index)}
//                                   { (
//                                     <div
//                                     className="curved-connector"
//                                       style={{ top: `${-datasetHeight + 5}px` }}
//                                     >
//                                       <div
//                                         className={`curve connector-${index}`}
//                                         style={{
//                                           height: `${curveHeights[index]}px`,
//                                         }}
//                                       >
//                                         <div className={`curve-right-icon-${index}`}></div>
//                                         <div className="selectedMachines-connecting-line-text">
//                                           151 Script
//                                         </div>
//                                       </div>
//                                     </div>
//                                   )}

//                                   <div className="run-data-box">
//                                     <div>{`Run ${index + 1}`}</div>
//                                   </div>
//                                 </div>
//                               </>
//                             </div>
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
//        <div className="select-machine-input">
//         <input type="text" value="select machine"/>
//        </div>
//     </div>
//   );
// };

// export default ConnectingBranch;

import { useEffect, useRef, useState } from "react";
import "./ConnectingBranch.scss";
import { machineData } from "./data";

import React from "react";
import { ArcherContainer, ArcherElement } from "react-archer";

const ConnectingBranch = () => {
  const datasetRef = useRef(null);
  const [datasetHeight, setDatasetHeight] = useState(0);
  //   console.log("🚀 ~ ConnectingBranch ~ datasetHeight:", datasetHeight);
  const calculateVerticalLineHeight = (
    machineInstances,
    datasetHeight,
    gap
  ) => {
    const totalDataSets = machineInstances.reduce((acc, instance) => {
      return acc + (instance.runLevelExecutionDataSets?.length || 0);
    }, 0);
    return totalDataSets * datasetHeight + totalDataSets * gap;
  };
  useEffect(() => {
    if (datasetRef.current) {
      setDatasetHeight(datasetRef.current.offsetHeight);
    }
  }, []);
  const [curveHeights, setCurveHeights] = useState([]);
  const itemRefs = useRef([]);

  const calculateCurveHeight = () => {
    const heights = itemRefs.current.map((index) => {
      if (index === 0) return 0;
      return datasetHeight * 1.5;
    });

    setCurveHeights(heights);
  };

  useEffect(() => {
    calculateCurveHeight();
  }, [datasetHeight]);

  // start
  const renderMachineInstances = (data, verticalLineHeight) => {
    return (
      <>
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
              <div
                className="machine-instance-row"
                key={instance.clientId || idx}
              >
                <div
                  className={`selectedMachines-connecting-line ${
                    !isFirstLine ? "second-line" : ""
                  }`}
                >
                  <div className="line">
                    <div className="left-icon"></div>
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
                  {instance.runLevelExecutionDataSets.map((dataSet, index) => (
                    <div
                      key={index}
                      className="run-level-execution-dataset"
                      ref={index === 0 ? datasetRef : null}
                    >
                      <>
                        <div
                          className="execution-item"
                          key={data.peVariableSetId}
                          ref={(el) => (itemRefs.current[index] = el)}
                        >
                          {
                            <div
                              className="curved-connector"
                              style={{ top: `${-datasetHeight + 5}px` }}
                            >
                              <div
                                className={`curve connector-${index}`}
                                style={{
                                  height: `${curveHeights[index]}px`,
                                }}
                              >
                                <div
                                  className={`curve-right-icon curve-right-icon-${index}`}
                                ></div>
                                <div className="selectedMachines-connecting-line-text">
                                  151 Script
                                </div>
                              </div>
                            </div>
                          }

                          <div className="run-data-box">
                            <div>{`Run ${index + 1}`}</div>
                          </div>
                        </div>
                      </>
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
                      <button className="add-machine-button">
                        Add Machine
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })
        )}
      </>
    );
  };
  //end
  // -----------

  const machineCount =
    machineData.executionSettings.machines.selectedMachines.length;

  const calculateRowSpan = (machine) => {
    const baseRows = 1;
    const childrenRows = machine.machineInstances?.length || 0;
    return Math.max(baseRows + childrenRows, 1);
  };

  let currentRow = 1;

  const calculateTotalRows = (): number => {
    return machineData.executionSettings.machines.selectedMachines.reduce(
      (totalRows, machine) => {
        const rowSpan = calculateRowSpan(machine); // Calculate the row span for each machine
        return totalRows + rowSpan;
      },
      1
    );
  };
  console.log("--------", calculateTotalRows() / 2);
  const oddCountRow = Math.round(calculateTotalRows() / 2);
  const isOddMachineCount = machineCount % 2 !== 0;
  console.log("🚀 ~ ConnectingBranch ~ isOddMachineCount:", isOddMachineCount);
  return (
    // <div className="grid-container">
    //   {machineData.executionSettings.machines.selectedMachines.map(
    //     (machine, index) => {
    //       console.log("🚀 ~ ConnectingBranch ~ index:", index)
    //       const rowStart = currentRow;
    //       const rowSpan = calculateRowSpan(machine);
    //       currentRow += rowSpan;

    //       if (rowStart <= 0) {
    //         console.error(`Invalid rowStart calculated for Machine ${index}`);
    //         return null;
    //       }
    //       const gap = 16;
    //       const verticalLineHeight = calculateVerticalLineHeight(
    //         machine.machineInstances,
    //         datasetHeight,
    //         gap
    //       );
    //       console.log("vertical line height ", verticalLineHeight);
    //       const middleIndex = Math.floor(
    //         machineData.executionSettings.machines.selectedMachines.length / 2
    //       );
    //       return (
    //         <React.Fragment key={index}>
    //           {/* count line box*/}

    //               {index === middleIndex && (
    //         <div
    //           className="grid-item dynamic-item"
    //           style={{ gridRow: `${rowStart}` }}
    //         >
    //           <div className="script-count-container">
    //             <div className="script-count-box">121</div>
    //           </div>
    //         </div>
    //       )}

    //           {/*  Selected Machine */}
    //           <div
    //             className="selectedMachines"
    //             style={{
    //               gridRow: `${rowStart} / span ${rowSpan}`,
    //             }}
    //           >
    //             <div className="selectedMachines-input">
    //               <input type="text" value={machine.clientId} readOnly />
    //             </div>
    //             {renderMachineInstances(machine, verticalLineHeight)}
    //           </div>
    //         </React.Fragment>
    //       );
    //     }
    //   )}
    //   <div className="select-machine-input">
    //     <input type="text" value="select machine" />
    //   </div>
    // </div>
    <ArcherContainer
      strokeColor="blue"
      strokeWidth={1}
      startMarker={true}
      endMarker={false}
      noCurves
    >
      <div className="grid-container">
        {machineData.executionSettings.machines.selectedMachines.map(
          (machine, index) => {
            console.log("🚀 ~ ConnectingBranch ~ index:", index);
            const rowStart = currentRow;
            const rowSpan = calculateRowSpan(machine);
            currentRow += rowSpan;

            if (rowStart <= 0) {
              console.error(`Invalid rowStart calculated for Machine ${index}`);
              return null;
            }

            const gap = 16;
            const verticalLineHeight = calculateVerticalLineHeight(
              machine.machineInstances,
              datasetHeight,
              gap
            );

            // Calculate middle index
            const middleIndex = Math.floor(
              machineData.executionSettings.machines.selectedMachines.length / 2
            );
            console.log("middle index ", middleIndex);
            return (
              <React.Fragment key={index}>
                {/* Show script-count-box only for the middle index */}
                {!isOddMachineCount && index === middleIndex && (
                  <ArcherElement id="root1234">
                    <div
                      className="grid-item dynamic-item"
                      style={{ gridRow: `${rowStart}` }}
                    >
                      <div className="script-count-container">
                        <div className="script-count-box">121</div>
                      </div>
                    </div>
                  </ArcherElement>
                )}

                {isOddMachineCount && (
                  <ArcherElement id="root1234">
                    <div
                      className="grid-item dynamic-item"
                      style={{ gridRow: `${oddCountRow}`, gridColumn: "1" }}
                    >
                      <div
                        className="script-count-container"
                        id="script-count-box"
                      >
                        <div className="script-count-box">121</div>
                      </div>
                    </div>
                  </ArcherElement>
                )}
                {/* Selected Machine */}

                <div
                  className="selectedMachines"
                  style={{
                    gridRow: `${rowStart} / span ${rowSpan}`,
                  }}
                >
                  <div className="selectedMachines-input">
                    <ArcherElement
                      id={`machine${index}`}
                      key={index}
                      relations={[
                        {
                          targetId: `root1234`,
                          targetAnchor: "left",
                          sourceAnchor: "left",
                        },
                      ]}
                    >
                      <input type="text" value={machine.clientId} readOnly />
                    </ArcherElement>
                  </div>
                  {renderMachineInstances(machine, verticalLineHeight)}
                </div>
              </React.Fragment>
            );
          }
        )}
        {/* Select Machine Input */}

        <div
          className="select-machine-input"
          style={{
            gridRow: `${currentRow}`,
          }}
        >
          <ArcherElement
          id="footerinput"
            relations={[
              {
                targetId: `root1234`,
                targetAnchor: "left",
                sourceAnchor: "left",
              },
            ]}
          >
            <input type="text" value="select machine" readOnly />
          </ArcherElement>
        </div>
      </div>
    </ArcherContainer>
  );
};

export default ConnectingBranch;
