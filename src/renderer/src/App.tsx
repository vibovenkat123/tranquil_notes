import { useState } from "react"
function App(): JSX.Element {
  const [count, setCount] = useState(0)
  return (
    <div className="container">
      <button
        onClick={(): void => {
          setCount(count + 1)
        }}
      >
        Click me
      </button>
      <p>You clicked {count} times</p>
    </div>
  )
}

export default App
