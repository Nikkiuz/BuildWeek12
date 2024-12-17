import {
  Card,
  Button,
  Container,
  Row,
  CardBody,
  CardTitle,
} from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'

const FormationComponent = () => {
  const experience = [
    {
      title: 'Epicode Italia',
      date: 'set 2024 - mar 2025',
      competences:
        'PowerPoint, Microsoft Office, Lingua Spagnola + 3 competenze',
      cover:
        'https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1742428800&v=beta&t=1545nc7H976MH9PquSOoKQx-4ziZtAD1DU3H-k2vuig',
    },
    {
        title: 'Epicode Italia',
        date: 'set 2024 - mar 2025',
        competences:
          'PowerPoint, Microsoft Office, Lingua Spagnola + 3 competenze',
        cover:
          'https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1742428800&v=beta&t=1545nc7H976MH9PquSOoKQx-4ziZtAD1DU3H-k2vuig',
      },
      {
        title: 'Epicode Italia',
        date: 'set 2024 - mar 2025',
        competences:
          'PowerPoint, Microsoft Office, Lingua Spagnola + 3 competenze',
        cover:
          'https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1742428800&v=beta&t=1545nc7H976MH9PquSOoKQx-4ziZtAD1DU3H-k2vuig',
      },
      {
        title: 'Epicode Italia',
        date: 'set 2024 - mar 2025',
        competences:
          'PowerPoint, Microsoft Office, Lingua Spagnola + 3 competenze',
        cover:
          'https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1742428800&v=beta&t=1545nc7H976MH9PquSOoKQx-4ziZtAD1DU3H-k2vuig',
      },
  ]

  return (
    <Container>
      <Card className=" d-flex mt-4" style={{ backgroundColor: 'white' }}>
        <Card.Header className="d-flex align-items-center">
          <span className="fw-bold">Formazione</span>
          <div className="ms-auto">
            <Button className="mx-2">
              <FaPlus />
            </Button>
            <Button>
              <AiOutlineEdit />
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Row xs={1} sm={2} md={2} lg={1} className="g-1">
            {experience.map((form, index) => (
              <Card key={index}>
                <CardBody className="d-flex">
                  <div className="">
                    <CardTitle className="fw-bold">{form.title}</CardTitle>
                    <Card.Img src={form.cover} style={{ width: '100px' }} />
                  </div>
                  <div>
                    <Card.Text className="mx-3 my-0 mt-1" style={{ opacity: '0.7' }}>
                      {form.date}
                    </Card.Text>
                    
                    <Card.Text className="mx-3 fw-bold">
                      {form.competences}
                    </Card.Text>
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

export default FormationComponent
