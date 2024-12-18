import '../src/assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MyNav from './components/MyNav'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Lavoro from './pages/Lavoro.jsx'

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNav />
      </header>
      <main className="bg">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lavoro" element={<Lavoro />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
