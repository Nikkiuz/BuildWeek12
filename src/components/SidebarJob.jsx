import { Button, ListGroup } from 'react-bootstrap'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { FaBookmark, FaListUl } from 'react-icons/fa'
import { LuSquarePen } from 'react-icons/lu'

function SidebarJob() {
  return (
    <ListGroup className=" rounded-3 border-3 border-black w-100 d-flex align-items-center">
      <ListGroup.Item
        action
        className="d-flex align-items-center border-0 pt-4 small"
      >
        <FaListUl size={22} className="me-2" /> Preferenze
      </ListGroup.Item>
      <ListGroup.Item
        action
        className="d-flex align-items-center border-0 small pt-4"
      >
        <FaBookmark size={22} className="me-2" /> Le mie offerte di lavoro
      </ListGroup.Item>
      <ListGroup.Item action className="d-flex align-items-center small py-4">
        <BsFillPersonVcardFill size={22} className="me-2" /> Le mie info
        carriera
      </ListGroup.Item>
      <Button
        variant="outline-primary"
        className=" rounded-5 d-flex align-items-center mt-3 py-3 justify-content-center w-auto"
      >
        <LuSquarePen size={22} className="me-1" />
        <span className="small fw-semibold">Pubblica offerta gratuita</span>
      </Button>
    </ListGroup>
  )
}

export default SidebarJob
