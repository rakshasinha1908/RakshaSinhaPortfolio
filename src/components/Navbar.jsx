import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-items">
        {/* <img src={logo} alt="logo" height="67" /> */}
        <a className="logo">Raksha<span className='surname'>Sinha</span></a>
        <div className="nav-category">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
        <a className="bot" href="#">Ask Rhea</a>
      </div>
    </nav>
  );
}

export default Navbar;
