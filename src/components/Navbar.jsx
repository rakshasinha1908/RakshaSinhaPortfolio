import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-items">
        <a className="logo" href='#'>Raksha<span className='surname'>Sinha</span></a>
        <div className="nav-category">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="bot" href="#rhea" onClick={(e) => {
          e.preventDefault();
          window.dispatchEvent(new Event("openRhea"));
          }}
        >
          Ask Rhea
        </a>

      </div>
    </nav>
  );
}
 
export default Navbar;


