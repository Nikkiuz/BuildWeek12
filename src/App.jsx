import '../src/assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router'
import MyNav from './components/MyNav'
import Sidebar from './components/SideBar.jsx'

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNav />
        <Sidebar></Sidebar>
      </header>
    </BrowserRouter>
  )
}

export default App
