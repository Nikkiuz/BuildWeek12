import { useState, useEffect } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { BsHandThumbsUp } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'
import { IoPaperPlaneSharp } from 'react-icons/io5'
import { RiRepeat2Line } from 'react-icons/ri'

const PostersHome = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/posts/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZjNlMDBlYTI4NjAwMTUyOGI5NDIiLCJpYXQiOjE3MzQzNDE2MDAsImV4cCI6MTczNTU1MTIwMH0.jO7oLFp7acRJwfd0NGcjFxxoldMKhHOUTM3GUTovd5c`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Risposta json dal server', data)
        setPosts(data)
      })
      .catch((error) => {
        console.error('Errore nel recuperare i post:', error)
      })
  }, [])

  return (
    <>
      {posts.map((post) => (
        <Card key={post._id} className="my-4">
          <Card.Header className="border-0 bg-white">
            <div className="d-flex align-items-start">
              <img
                src={post.userAvatar}
                width="70px"
                className="rounded-circle me-3"
              />
              <div>
                <h5 className="mb-0 mt-1">{post.username}</h5>
                <p className="mb-0">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center flex-column">
            <Card.Text>{post.text}</Card.Text>
            {/* Immagine del post */}
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
    </>
  )
}

export default PostersHome
