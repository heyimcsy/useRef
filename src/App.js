import React, { useRef } from 'react'

function App() {
  //reference
  const ref = useRef('초기값')
  console.log('ref', ref)
  return <div>App</div>
}

export default App
