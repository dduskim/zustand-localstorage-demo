import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useCommonStore } from './useCommonStore';

function App() {
  const [common] = useCommonStore((state) => [state.common]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          <code>{JSON.stringify(common)}</code>
        </p>
      </div>
    </>
  )
}

export default App
