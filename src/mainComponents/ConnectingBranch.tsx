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
  console.log("🚀 ~ ConnectingBranch ~ datasetHeight:", datasetHeight);

  useEffect(() => {
    if (datasetRef.current) {
      setDatasetHeight(datasetRef.current.offsetHeight);
    }
  }, []);
  const [curveHeights, setCurveHeights] = useState([]);
  const itemRefs = useRef([]);

  // Function to calculate the height dynamically based on the position of each item
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
  return (
    <div className="grid-container">
      {machineData.executionSettings.machines.selectedMachines.map(
        (data, index) => {
          const gap = 16;
          const verticalLineHeight = calculateVerticalLineHeight(
            data.machineInstances,
            datasetHeight,
            gap
          );

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
                          {/* {instance.numberOfRuns && (
                            <div className="selectedMachines-connecting-line-text">
                              {instance.numberOfRuns} Runs
                            </div>
                          )} */}
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
                        {instance.runLevelExecutionDataSets.map(
                          (dataSet, index) => (
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
                                  {console.log(index)}
                                  { (
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
                                        <div className={`curve-right-icon-${index}`}></div>
                                        <div className="selectedMachines-connecting-line-text">
                                          151 Script
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  <div className="run-data-box">
                                    <div>{`Run ${index + 1}`}</div>
                                  </div>
                                </div>
                              </>
                            </div>
                          )
                        )}
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
            </div>
          );
        }
      )}
    </div>
  );
};

export default ConnectingBranch;
