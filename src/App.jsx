import '../src/assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router'
import MyNav from './components/MyNav'
import Sidebar from './components/SideBar.jsx'
import HeroSection from './components/HeroSection.jsx'
import { Col, Container, Row } from 'react-bootstrap'
import ActivitiesComponent from './components/ActivitiesComponent.jsx'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <header>
          <MyNav />
        </header>
        <main>
          <Row className=" justify-content-end">
            <Col xs={12} lg={9}>
              <HeroSection />
              <ActivitiesComponent />
            </Col>
            <Col lg={3} className=" d-none d-md-flex">
              <Sidebar />
            </Col>
          </Row>
        </main>
      </Container>
    </BrowserRouter>
  )
}

export default App
