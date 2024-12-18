import '../assets/css/RightSidebarHome.css'

const RightSidebarHome = () => {
  return (
    <div className="mt-4 bg-white p-3 border-start">
      <h6 className="fw-bold mb-3">In primo piano</h6>
      <ul className="list-unstyled">
        <li className="mb-2">
          <strong>Big Ideas 2025</strong>
          <br />
          <small className="text-muted">11 giorni fa · 4.302 lettori</small>
        </li>
        <li className="mb-2">
          <strong>Tech 2025</strong>
          <br />
          <small className="text-muted">6 giorni fa · 1.537 lettori</small>
        </li>
        <li className="mb-2">
          <strong>Revolut</strong>
          <br />
          <small className="text-muted">1 giorno fa · 439 lettori</small>
        </li>
        <li className="mb-2">
          <strong>Maximall Pompei</strong>
          <br />
          <small className="text-muted">1 giorno fa · 230 lettori</small>
        </li>
      </ul>
      <div className="border-top pt-3 mt-3">
        <h6 className="fw-bold mb-3">I giochi di oggi</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#tango" className="text-decoration-none">
              🟨 Tango - Armonizza la griglia
            </a>
          </li>
          <li>
            <a href="#queens" className="text-decoration-none">
              🟪 Queens - Incorona ogni regione
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RightSidebarHome
