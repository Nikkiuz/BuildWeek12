import { Row, Col, Card, Button, Image } from 'react-bootstrap'
import { BsHandThumbsUp } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import { IoPaperPlaneSharp } from 'react-icons/io5'
import { RiRepeat2Line } from 'react-icons/ri'

const PostersHome = () => {
  return (
    <Card className="my-4">
      <Card.Body className="d-flex justify-content-center">
        <Row>
          <Col xs={2}>
            <Image />
          </Col>
          <Col xs={10}>
            <h5>{}</h5>
            <small></small>
          </Col>
        </Row>
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
