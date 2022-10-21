import renderRouter from 'src/routes/routes'
import './App.scss'

function App() {
  return (
    <div className="app">
      {renderRouter()}
    </div>
  )
}

export default App
