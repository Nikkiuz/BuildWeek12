import { Button, Card, Container } from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai'

const MyBio = () => {
  return (
    <Container>
      <Card className=" d-flex mt-4" style={{ backgroundColor: 'white' }}>
        <Card.Header className="d-flex align-items-center">
          <span className="fw-bold">Informazioni</span>
          <div className="ms-auto">
            <Button className="border-0" style={{ backgroundColor: '#F8F8F8' }}>
              <AiOutlineEdit
                className="text-black"
                style={{
                  width: '35px',
                  height: '35px',
                }}
              />
            </Button>
          </div>
        </Card.Header>
        <Card.Body>{/* INSERIRE BIO DA PROFILO */}</Card.Body>
        <Card.Footer>Mostra di più</Card.Footer>
      </Card>
    </Container>
  )
}

export default MyBio
