import renderRouter from 'routes'
import './App.scss'

function App() {
  return (
    <div className="app">
      {renderRouter()}
    </div>
  )
}

export default App
