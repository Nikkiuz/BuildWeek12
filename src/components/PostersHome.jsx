import { useState, useEffect } from 'react'
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap'
import { BsHandThumbsUp } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import { IoPaperPlaneSharp } from 'react-icons/io5'
import { RiRepeat2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments } from '../redux/actions/commentsAction'

const PostersHome = () => {
  const [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [newComment, setNewComment] = useState('')
  const comments = useSelector((state) => state.commentsReducer.comments)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/posts/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNlMDBlYTI4NjAwMTUyOGI5NDIiLCJpYXQiOjE3MzQzNDE2MDAsImV4cCI6MTczNTU1MTIwMH0.jO7oLFp7acRJwfd0NGcjFxxoldMKhHOUTM3GUTovd5c`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data
          .slice(data.length - 50, data.length)
          .filter((item) => item.image)

        setPosts(filteredData.reverse())
      })
      .catch((error) => {
        console.error('Errore nel recuperare i post:', error)
      })
  }, [])

  const handleShowComments = (postId) => {
    setSelectedPostId(postId)
    setShowModal(true)
    dispatch(fetchComments(postId)) // Fetch dei commenti per il post selezionato
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedPostId(null)
  }

  const handleAddComment = () => {
    // Implementa la logica per aggiungere un nuovo commento
    console.log(
      `Aggiungi commento: "${newComment}" per il post ID: ${selectedPostId}`
    )
    setNewComment('') // Reset del campo di input
    handleCloseModal()
  }

  // Funzione per formattare la data
  const formatDate = (dateString) => {
    const date = new Date(dateString)

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${day}/${month}/${year} alle ${hours}:${minutes}`
  }

  return (
    <>
      {posts.map((post) => (
        <Card key={post._id} className="my-4">
          <Card.Header className="border-0 bg-white">
            <div className="d-flex align-items-start">
              <img
                src={post.user.image}
                width="65px"
                height="65px"
                style={{ objectFit: 'fill' }}
                className="rounded-circle me-3"
              />
              <div>
                <h5 className="mb-0 mt-1">
                  {post.user.name + ' ' + post.user.surname}
                </h5>
                <p className="mb-0">
                  Pubblicato il {formatDate(post.createdAt)}
                </p>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center flex-column">
            <Card.Text>{post.text}</Card.Text>
            {post.image && (
              <img src={post.image} alt="Post Image" className="img-fluid" />
            )}
          </Card.Body>

          <Card.Footer className="bg-white d-flex justify-content-center">
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
                  onClick={() => handleShowComments(post._id)}
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
      ))}

      {/* Modale per commenti */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Commenti</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {comments
            .filter((comment) => comment.postId === selectedPostId)
            .map((comment) => (
              <Card key={comment._id} className="mb-2">
                <Card.Body>
                  <Card.Text>{comment.text}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          <Form>
            <Form.Group controlId="formComment">
              <Form.Label>Aggiungi un commento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Scrivi un commento..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleAddComment}>
            Aggiungi Commento
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PostersHome
