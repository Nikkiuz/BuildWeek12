import { Row, Col, Card, Button } from 'react-bootstrap'
import { BsHandThumbsUp } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import { IoPaperPlaneSharp } from 'react-icons/io5'
import { RiRepeat2Line } from 'react-icons/ri'
import avatar from '../assets/images/avatar.png'

const PostersHome = () => {
  return (
    <Card className="my-4">
      <Card.Header className="border-0 bg-white">
        <div className="d-flex align-items-start">
          <img
            src={avatar}
            alt="avatar"
            width="70px"
            className="rounded-circle me-3"
          />
          <div>
            <h5 className="mb-0 mt-1">Nome Profilo</h5>
            <p className="mb-0">Dettagli</p>
          </div>
        </div>
      </Card.Header>
      <Card.Body className="d-flex">
        <Card.Text>Descrizione post</Card.Text>
        <img src="" alt="" />
      </Card.Body>

      <Card.Footer className=" bg-white">
        <Row className="m-0 p-0">
          <Col className="d-flex flex-nowrap">
            <Button
              variant="outline-light"
              className="d-flex align-items-center border-0 text-dark me-2"
            >
              <BsHandThumbsUp className="me-1" />
              Consiglia
            </Button>
            <Button
              variant="outline-light"
              className="d-flex align-items-center border-0 text-dark me-2"
            >
              <FaRegCommentDots className="me-1" />
              Commenta
            </Button>
            <Button
              variant="outline-light"
              className="d-flex align-items-center border-0 text-dark me-2"
            >
              <RiRepeat2Line className="me-1" />
              Diffondi
            </Button>
            <Button
              variant="outline-light"
              className="d-flex align-items-center border-0 text-dark"
            >
              <IoPaperPlaneSharp className="me-1" />
              Invia
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default PostersHome
