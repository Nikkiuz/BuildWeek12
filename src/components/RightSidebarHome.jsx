import { Card, ListGroup } from 'react-bootstrap'
import { BsInfoSquareFill } from 'react-icons/bs'

const RightSidebarHome = () => {
  return (
    <Card className="mt-4 mb-4">
      <Card.Body>
        <Card.Title className="fw-bold mb-0 d-flex align-items-center justify-content-between">
          In primo piano <BsInfoSquareFill size={15} />
        </Card.Title>
        <Card.Text className=" text-muted">a cura di qualcuno</Card.Text>
        <ListGroup>
          <ListGroup.Item className="d-flex flex-column align-items-start fw-semibold border-0">
            Big Ideas 2025
            <span className="text-muted">11 giorni fa · pochi lettori</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex flex-column align-items-start fw-semibold border-0">
            Salvini normative
            <span className="text-muted">2 giorni fa · tanti nemici</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex flex-column align-items-start fw-semibold border-0">
            Tech 2025
            <span className="text-muted">5 giorni fa · 1104 lettori</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex flex-column align-items-start fw-semibold border-0">
            Revolut
            <span className="text-muted"> 1 giorno fa · qualche lettore</span>
          </ListGroup.Item>
        </ListGroup>

        <Card.Text className=" text-muted fw-semibold mb-1 mt-3">
          I giochi di oggi
        </Card.Text>

        <ListGroup className="list-unstyled">
          <ListGroup.Item className="d-flex flex-column align-items-start fw-semibold border-0">
            Lavora non giocare
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default RightSidebarHome
