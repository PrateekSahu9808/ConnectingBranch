import React from 'react'
import {machineData} from "../mainComponents/data"
const FirstLevelData = () => {


      const machineData = {
        executionSettings: {
          machines: {
            multiple: true,
            selectedMachines: [
              {
                clientId: "flinko-client-win-daa67320-d70c-438e-b417-62d76669e7a2",
                executionDataSet: {
                  peVariableSetId: "UUID",
                  globalVariableSetId: "UUID",
                  testDataSetId: "UUID",
                },
                totalScript: 250,
                machineInstances: [
                  {
                    clientId: "flinko-client-win-daa67320-d70c-438e-b417-62d76669e7a2",
                    numberOfRuns: "3",
                    executionEnv: "Local",
                    browserName: "Google Chrome",
                    browserVersion: "107.0.5304.88",
                    systemUrl: "",
                    machineInfo: {
                      osName: "Windows 11 Home Single Language",
                      osVersion: "10.0.22000",
                      hostName: "LAPTOP-T793RVQN",
                    },
                    deviceInfo: [],
                    headless: false,
                    runLevelExecutionDataSets: [
                      {
                        peVariableSetId: "UUID_1",
                        globalVariableSetId: "UUID",
                        testDataSetId: "UUID",
                      },
                    ],
                  },
                ],
              },
            ],
            executionType: "SEND_SUITE_TO_ALL",
          },
        },
      };
    
      const { selectedMachines } = machineData.executionSettings.machines;
    
      return (
        <div>
          {selectedMachines.map((machine, machineIndex) => (
            <div key={`machine-${machineIndex}`} style={{ marginBottom: "20px" }}>
              <h4>Machine ID: {machine.clientId}</h4>
              {machine.machineInstances.map((instance, instanceIndex) => (
                <div key={`instance-${instanceIndex}`}>
                  <label>
                    Machine Instance {instanceIndex + 1} Input:
                    <input
                      type="text"
                      placeholder={`Enter data for ${instance.browserName}`}
                    />
                  </label>
                </div>
              ))}
              {/* Add an extra input box */}
              <div>
                <label>
                  Extra Input:
                  <input
                    type="text"
                    placeholder="Extra input for this machine"
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      );
    };
    


export default FirstLevelData