import { NODE_ENV } from './App.constant'
import './App.scss'

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <p>{NODE_ENV}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
