import { Card, ListGroup, Button } from 'react-bootstrap'

function SidebarJob() {
  return (
    <>
      <Card className="mb-3">
        <Card.Body className="text-center">
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/80"
            className="rounded-circle mb-2"
            style={{ width: '80px', height: '80px' }}
          />
          <Card.Title>Omar Abd El Wahab</Card.Title>
          <Card.Subtitle className="text-muted">
            Receptionist presso Hotel Buenos Aires
          </Card.Subtitle>
          <Card.Text className="mt-2">Roma, Lazio</Card.Text>
        </Card.Body>
      </Card>

      <ListGroup variant="flush">
        <ListGroup.Item action className="d-flex align-items-center">
          <i className="bi bi-gear me-2"></i> Preferenze
        </ListGroup.Item>
        <ListGroup.Item action className="d-flex align-items-center">
          <i className="bi bi-briefcase me-2"></i> Le mie offerte di lavoro
        </ListGroup.Item>
        <ListGroup.Item action className="d-flex align-items-center">
          <i className="bi bi-person-vcard me-2"></i> Le mie informazioni sulla
          carriera
        </ListGroup.Item>
      </ListGroup>

      <Button variant="outline-primary" className="mt-3 w-100">
        Pubblica offerta gratuita
      </Button>
    </>
  )
}

export default SidebarJob
