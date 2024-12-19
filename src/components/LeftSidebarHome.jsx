import { Card, Image } from 'react-bootstrap'
import '../assets/css/App.css'
import avatar from '../assets/images/avatar.png'
import { FaBookmark } from 'react-icons/fa'
import { PiPlus } from 'react-icons/pi'

const LeftSidebarHome = () => {
  return (
    <>
      <Card className=" rounded-3 mt-4">
        <Card.Header className="d-flex flex-column align-items-center bg-white p-0 pb-3">
          <div className="w-100 d-flex justify-content-center position-relative">
            <div className="back rounded-top-3"></div>
            <Image
              src={avatar}
              alt="Profile"
              roundedCircle
              width="70px"
              className="mb-2 mt-3 z-1 border border-2 border-white bg-black"
            />
          </div>
          <Card.Title className="mb-1">Me cucino</Card.Title>
          <Card.Text className=" small">Web Developer</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Text className=" small mb-1">
            Visitatori del profilo:<span className="text-primary"> 1,5</span>
          </Card.Text>
          <Card.Text className=" small">
            Impressioni del post:<span className="text-primary"> -0,5</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className=" bg-white">
          <Card.Text className=" small d-flex align-items-center py-1">
            <FaBookmark size={15} className="me-2 text-muted" /> Elementi
            salvati
          </Card.Text>
        </Card.Footer>
      </Card>
      <Card className=" mt-2">
        <Card.Body>
          <Card.Text className=" text-primary small mb-2">Gruppi</Card.Text>
          <Card.Text className=" text-primary small d-flex justify-content-between align-items-center">
            Eventi <PiPlus className=" text-black" />
          </Card.Text>
        </Card.Body>
        <Card.Footer className=" bg-white d-flex justify-content-center">
          <Card.Text>Scopri di più</Card.Text>
        </Card.Footer>
      </Card>
    </>
  )
}

export default LeftSidebarHome
