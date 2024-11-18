import React from 'react'
import ParallelRunBranch from './components/ParallelRunBranch'
import ConnectingBranch from './mainComponents/ConnectingBranch'
import ExecutionDataList from './execution/ExecutionDataList'
import FirstLevelData from './firstLevel/FirstLevelData'




const App: React.FC = () => {
  return (
    <div className="app">
{/* <ParallelRunBranch/> */}
<ConnectingBranch/>
{/* <FirstLevelData/> */}
    </div>
  )
}

export default App