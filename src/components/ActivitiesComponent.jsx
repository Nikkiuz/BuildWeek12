// const apiKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWUyNDBlYTI4NjAwMTUyOGI5M2UiLCJpYXQiOjE3MzQzNDAxMzMsImV4cCI6MTczNTU0OTczM30.md8JPlmC0A2aU2EjfOWOWkJl_7-KZoYs1j2LwK-s3PA '

import { CardBody, CardTitle, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { AiOutlineEdit } from 'react-icons/ai'

const ActivitiesComponent = () => {
  const activities = [
    {
      intro: 'Tommaso ha pubblicato questo post - 3 giorni',
      text: 'Sto studiando presso epicode',
      cover: 'https://www.placecats.com/100/100',
    },
    {
      intro: 'Tommaso ha pubblicato questo post - 3 giorni',
      text: 'Sto studiando presso epicode',
      cover: 'https://www.placecats.com/200/200',
    },
    {
      intro: 'Tommaso ha pubblicato questo post - 3 giorni',
      text: 'Sto studiando presso epicode',
      cover: 'https://www.placecats.com/200/200',
    },
    {
      intro: 'Tommaso ha pubblicato questo post - 3 giorni',
      text: 'Sto studiando presso epicode',
      cover: 'https://www.placecats.com/200/200',
    },
    {
      intro: 'Tommaso ha pubblicato questo post - 3 giorni',
      text: 'Sto studiando presso epicode',
      cover: 'https://www.placecats.com/200/200',
    },
    {
      intro: 'Tommaso ha pubblicato questo post - 3 giorni',
      text: 'Sto studiando presso epicode',
      cover: 'https://www.placecats.com/200/200',
    },
  ]

  return (
    <Container>
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
            <AiOutlineEdit
              style={{
                color: '#181818',
                width: '35px',
                height: '35px',
              }}
            />
          </div>
        </Card.Header>
        <Card.Body>
          <Row xs={1} sm={2} md={2} lg={1} className="g-1">
            {activities.map((activity, index) => (
              <Card key={index}>
                <CardBody>
                  <CardTitle>{activity.intro}</CardTitle>
                  <div className="d-flex">
                    <Card.Img src={activity.cover} style={{ width: '100px' }} />
                    <Card.Text className="mx-3">{activity.text}</Card.Text>
                  </div>
                </CardBody>
              </Card>
            ))}
          </Row>
        </Card.Body>
        <Card.Footer>Mostra di più</Card.Footer>
      </Card>
    </Container>
  )
}

export default ActivitiesComponent
