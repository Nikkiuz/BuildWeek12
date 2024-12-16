// const apiKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWUyNDBlYTI4NjAwMTUyOGI5M2UiLCJpYXQiOjE3MzQzNDAxMzMsImV4cCI6MTczNTU0OTczM30.md8JPlmC0A2aU2EjfOWOWkJl_7-KZoYs1j2LwK-s3PA '

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ActivitiesComponent = () => {
  const activities = [
    {
      
    }
  ]
  return (
    <Card className=" d-flex " style={{ backgroundColor: 'white' }}>
      <Card.Header className="d-flex align-items-center">
        Attività
        <div className="ms-auto ">
          <Button
            className="mx-3 btn-outline-primary rounded-pill"
            style={{
              backgroundColor: 'transparent',
              color: 'blue',
              border: '1px solid blue',
            }}
          >
            Crea un post
          </Button>
          <i className="bi bi-pencil"></i>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white">2 days ago</Card.Footer>
    </Card>
  )
}

export default ActivitiesComponent
