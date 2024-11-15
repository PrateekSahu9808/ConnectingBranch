import React from 'react'
import ParallelRunBranch from './components/ParallelRunBranch'
import ConnectingBranch from './mainComponents/ConnectingBranch'
import ExecutionDataList from './execution/ExecutionDataList'




const App: React.FC = () => {
  return (
    <div className="app">
{/* <ParallelRunBranch/> */}
<ConnectingBranch/>

    </div>
  )
}

export default App