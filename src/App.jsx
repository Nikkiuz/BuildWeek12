import '../src/assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router'
import MyNav from './components/MyNav'

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNav />
      </header>
    </BrowserRouter>
  )
}

export default App
