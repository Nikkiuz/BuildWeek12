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
      <Card className=" d-flex mt-4" style={{ backgroundColor: 'white' }}>
        <Card.Header className="d-flex align-items-center">
          <span className="fw-bold">Esperienza</span>
          <div className="ms-auto">
            <Button className='mx-2'>
              <FaPlus />
            </Button>
            <Button>
              <AiOutlineEdit
              />
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Row xs={12} sm={12} md={12} lg={12} className="g-1">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardBody className="d-flex">
                  <div className="">
                    <CardTitle className="fw-bold">{exp.title}</CardTitle>
                    <Card.Img src={exp.cover} style={{ width: '100px' }} />
                  </div>
                  <div>
                    <Card.Text className="mx-3 mt-1">{exp.place}</Card.Text>
                    <Card.Text className="mx-3 my-0" style={{ opacity: '0.7' }}>
                      {exp.date}
                    </Card.Text>
                    <Card.Text className="mx-3 my-0" style={{ opacity: '0.7' }}>
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
