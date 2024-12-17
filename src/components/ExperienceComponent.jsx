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
import '../assets/css/Experience.css'

const ExperienceComponent = () => {
  const experience = [
    {
      title: 'Segretario',
      place: 'Crejob',
      date: 'set 2023 - dic 2023 - 4 mesi',
      where: 'Valencia, Spagna - In sede',
      competences:
        'PowerPoint, Microsoft Office, Lingua Spagnola + 3 competenze',
      cover:
        'https://media.licdn.com/dms/image/v2/C4E0BAQEo581lOlrsRw/company-logo_100_100/company-logo_100_100/0/1646145244950?e=1742428800&v=beta&t=S1S8E3UHTbaoFg0O5hZ7GLqS23MtgfZ2IPD2wMapv-U',
    },
    {
      title: 'Segretario',
      place: 'Crejob',
      date: 'set 2023 - dic 2023 - 4 mesi',
      where: 'Valencia, Spagna - In sede',
      competences:
        'PowerPoint, Microsoft Office, Lingua Spagnola + 3 competenze',
      cover:
        'https://media.licdn.com/dms/image/v2/C4E0BAQEo581lOlrsRw/company-logo_100_100/company-logo_100_100/0/1646145244950?e=1742428800&v=beta&t=S1S8E3UHTbaoFg0O5hZ7GLqS23MtgfZ2IPD2wMapv-U',
    },
    {
      title: 'Segretario',
      place: 'Crejob',
      date: 'set 2023 - dic 2023 - 4 mesi',
      where: 'Valencia, Spagna - In sede',
      competences:
        'PowerPoint, Microsoft Office, Lingua Spagnola + 3 competenze',
      cover:
        'https://media.licdn.com/dms/image/v2/C4E0BAQEo581lOlrsRw/company-logo_100_100/company-logo_100_100/0/1646145244950?e=1742428800&v=beta&t=S1S8E3UHTbaoFg0O5hZ7GLqS23MtgfZ2IPD2wMapv-U',
    },
    {
      title: 'Segretario',
      place: 'Crejob',
      date: 'set 2023 - dic 2023 - 4 mesi',
      where: 'Valencia, Spagna - In sede',
      competences:
        'PowerPoint, Microsoft Office, Lingua Spagnola + 3 competenze',
      cover:
        'https://media.licdn.com/dms/image/v2/C4E0BAQEo581lOlrsRw/company-logo_100_100/company-logo_100_100/0/1646145244950?e=1742428800&v=beta&t=S1S8E3UHTbaoFg0O5hZ7GLqS23MtgfZ2IPD2wMapv-U',
    },
    {
      title: 'Segretario',
      place: 'Crejob',
      date: 'set 2023 - dic 2023 - 4 mesi',
      where: 'Valencia, Spagna - In sede',
      competences:
        'PowerPoint, Microsoft Office, Lingua Spagnola + 3 competenze',
      cover:
        'https://media.licdn.com/dms/image/v2/C4E0BAQEo581lOlrsRw/company-logo_100_100/company-logo_100_100/0/1646145244950?e=1742428800&v=beta&t=S1S8E3UHTbaoFg0O5hZ7GLqS23MtgfZ2IPD2wMapv-U',
    },
    {
      title: 'Segretario',
      place: 'Crejob',
      date: 'set 2023 - dic 2023 - 4 mesi',
      where: 'Valencia, Spagna - In sede',
      competences:
        'PowerPoint, Microsoft Office, Lingua Spagnola + 3 competenze',
      cover:
        'https://media.licdn.com/dms/image/v2/C4E0BAQEo581lOlrsRw/company-logo_100_100/company-logo_100_100/0/1646145244950?e=1742428800&v=beta&t=S1S8E3UHTbaoFg0O5hZ7GLqS23MtgfZ2IPD2wMapv-U',
    },
  ]

  return (
    <Container>
      <Card className=" d-flex " style={{ backgroundColor: 'white' }}>
        <Card.Header className="d-flex align-items-center">
          <span className="fw-bold">Esperienza</span>
          <div className="ms-auto ">
            <Button>
              <FaPlus />
            </Button>
            <Button>
              <AiOutlineEdit
                className="editIcon"
                style={{
                  color: '#181818',
                  width: '35px',
                  height: '35px',
                }}
              />
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Row xs={1} sm={2} md={2} lg={1} className="g-1">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardBody>
                  <CardTitle className="fw-bold">{exp.title}</CardTitle>
                  <div className="d-flex">
                    <Card.Img src={exp.cover} style={{ width: '100px' }} />
                    <Card.Text className="mx-3">{exp.place}</Card.Text>
                    <Card.Text className="mx-3" style={{ opacity: '0.7' }}>
                      {exp.date}
                    </Card.Text>
                    <Card.Text className="mx-3" style={{ opacity: '0.7' }}>
                      {exp.where}
                    </Card.Text>
                    <Card.Text className="mx-3 fw-bold">
                      {exp.competences}
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

export default ExperienceComponent
