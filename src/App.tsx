import { TrainerSquare } from './components/TrainerSquare.tsx'
import './App.css'

function App() {
  return (
    <>
      <h1>Interview Trainer</h1>
      <div className="grid">
        <TrainerSquare id={2} />
        <TrainerSquare id={3} />
        <TrainerSquare id={4} />
        <TrainerSquare id={5} />
      </div>
    </>
  )
}

export default App
