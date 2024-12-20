import { Col, Container, Row } from 'react-bootstrap'
import ActivitiesComponent from '../components/ActivitiesComponent'
import ExperienceComponent from '../components/ExperienceComponent'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/SideBar'
import FooterProfile from '../components/FooterProfile'
import MyBio from '../components/MyBio'
import { useState } from 'react'
import MyNav from '../components/MyNav'

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  return (
    <>
      <header>
        <MyNav visible={isSearchVisible} />
      </header>
      <Container>
        <Row className="justify-content-end">
          <Col xs={12} lg={9}>
            <HeroSection />
            <MyBio />
            <ActivitiesComponent />
            <ExperienceComponent />
          </Col>
          <Col lg={3} className="d-none d-md-flex">
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <FooterProfile />
    </>
  )
}

export default Profile
