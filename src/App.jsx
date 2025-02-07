import { useState } from 'react'
import Valentine from "./Components/Valentine.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
      <main className={'mx-auto max-w-7xl'}>
        <Valentine/>

      </main>

  )
}

export default App
