import { TrainerSquare } from './components/TrainerSquare.tsx'
import { LoginButton } from './components/LoginButton.tsx'
import YukeeIcon from './components/YukeeIcon.tsx'
import './App.css'

function App() {
  return (
    <>
      <h1>Interview Trainer</h1>
      <YukeeIcon />
      <LoginButton />
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
