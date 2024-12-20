import '../src/assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MyNav from './components/MyNav'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Lavoro from './pages/Lavoro.jsx'
import NotFound from './components/NotFound.jsx'
import Rete from './pages/Rete.jsx'

function App() {
  return (
    <BrowserRouter>
     
      <main className="bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rete" element={<Rete />} />
          <Route path="/lavoro" element={<Lavoro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
