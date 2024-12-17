import './LeftSidebarHome.css'; 

const LeftSidebarHome = () => {
  return (
    <div className="col-md-3 bg-white p-3 border-end" style={{ minHeight: '100vh' }}>
      <div className="text-center mb-4">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Profile" 
          className="rounded-circle mb-2"
        />
        <h6 className="fw-bold">Omar Abd El Wahab</h6>
        <p className="text-muted">Receptionist presso Hotel Buenos Aires</p>
      </div>
      <div className="mb-3">
        <p className="mb-1">
          <strong>Visitatori del profilo:</strong> <span className="text-primary">2</span>
        </p>
        <p className="mb-1">
          <strong>Impressioni del post:</strong> <span className="text-primary">38</span>
        </p>
      </div>
      <div className="border-top pt-3">
        <h6 className="fw-bold">Elementi salvati</h6>
        <ul className="list-unstyled">
          <li><a href="#gruppi" className="text-decoration-none">Gruppi</a></li>
          <li><a href="#newsletter" className="text-decoration-none">Newsletter</a></li>
          <li><a href="#eventi" className="text-decoration-none">Eventi</a></li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebarHome;
