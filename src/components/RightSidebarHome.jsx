import { Card, ListGroup } from 'react-bootstrap'
import { BsInfoSquareFill } from 'react-icons/bs'

const RightSidebarHome = () => {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title className="fw-bold mb-2 d-flex align-items-center justify-content-between">
          In primo piano <BsInfoSquareFill size={15} />
        </Card.Title>
        <Card.Text className=" text-muted">
          a cura di Linkedln Notizie
        </Card.Text>
        <ListGroup className="list-unstyled d-flex flex-column">
          <ListGroup.Item className="border-0 mb-2">
            <span className="fw-bold">Big Ideas 2025</span>
            <span className="text-muted">11 giorni fa · 4.302 lettori</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 mb-2">
            <span className="fw-bold">Tech 2025</span>
            <span className="text-muted">6 giorni fa · 1.537 lettori</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 mb-2">
            <span className="fw-bold">Revolut</span>
            <span className="text-muted">1 giorno fa · 439 lettori</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 mb-3">
            <span className="fw-bold">Maximall Pompei</span>
            <span className="text-muted">1 giorno fa · 230 lettori</span>
          </ListGroup.Item>
        </ListGroup>

        <Card.Text className=" text-muted fw-semibold mb-1">
          I giochi di oggi
        </Card.Text>

        <ListGroup className="list-unstyled">
          <ListGroup.Item className="border-0">
            <a href="#tango" className="text-decoration-none">
              🟨 Tango - Armonizza la griglia
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="border-0">
            <a href="#queens" className="text-decoration-none">
              🟪 Queens - Incorona ogni regione
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default RightSidebarHome
