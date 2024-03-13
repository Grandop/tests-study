import './App.css'
import { Counter } from './components/Counter'

function App() {
  return (
    <>
      <header>
        vite + react
      </header>
      <div>
        <Counter initialCount={0}/>
      </div>
    </>
  )
}

export default App
