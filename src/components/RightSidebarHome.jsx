import { useEffect, useState } from 'react'
import { Card, } from 'react-bootstrap'
import { BsInfoSquareFill } from 'react-icons/bs'


const RightSidebarHome = () => {
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
        const filteredData = data.slice(30, 60).filter((item) => item.image) // Filtra solo i post con immagini
        setPosts(filteredData)
      })
      .catch((error) => {
        console.error('Errore nel recuperare i post:', error)
      })
  }, [])

  return (
    <Card className="mt-4 mb-4">
      <Card.Body>
        <Card.Title className="fw-bold mb-0 d-flex align-items-center justify-content-between">
          In primo piano <BsInfoSquareFill size={15} />
        </Card.Title>
        {posts.map((post) => (
          <Card key={post._id} className="my-2">
            <Card.Header className="border-0 bg-white">
              <div className="d-flex align-items-start">
                <img
                  src={post.user?.image || 'https://via.placeholder.com/65'}
                  width="45px"
                  height="45px"
                  className="rounded-circle me-3"
                  alt="User"
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <h5 className="mb-0 fs-5 overflow-hidden">
                    {post.user.name + ' ' + post.user.surname}
                  </h5>
                  <p className="mb-0">
                    Pubblicato il{' '}
                    {new Date(post.createdAt).toLocaleDateString('it-IT', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}{' '}
                    alle{' '}
                    {new Date(post.createdAt).toLocaleTimeString('it-IT', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <Card.Text className="fs-5">{post.text}</Card.Text>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post Image"
                  className="img-fluid rounded"
                />
              )}
            </Card.Body>
          </Card>
        ))}
      </Card.Body>
    </Card>
  )
}

export default RightSidebarHome
