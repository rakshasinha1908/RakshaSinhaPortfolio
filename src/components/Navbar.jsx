// import logo from '../assets/logo.png';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="nav-items">
//         <a className="logo" href='#'>Raksha<span className='surname'>Sinha</span></a>
//         <div className="nav-category">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>
//         <a className="bot" href="#rhea" onClick={(e) => {
//           e.preventDefault();
//           window.dispatchEvent(new Event("openRhea"));
//           }}
//         >
//           Ask Rhea
//         </a>

//       </div>
//     </nav>
//   );
// }
 
// export default Navbar;



// import { useState } from "react";
// import logo from "../assets/logo.png";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="nav-items">
//         <a className="logo" href="#">
//           Raksha<span className="surname">Sinha</span>
//         </a>

//         {/* Desktop Nav */}
//         <div className={`nav-category ${menuOpen ? "open" : ""}`}>
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>

//         {/* Ask Rhea button */}
//         <a
//           className="bot"
//           href="#rhea"
//           onClick={(e) => {
//             e.preventDefault();
//             window.dispatchEvent(new Event("openRhea"));
//           }}
//         >
//           Ask Rhea
//         </a>

//         {/* Hamburger */}
//         <div
//           className="hamburger"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <i className="fas fa-bars"></i>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-items">
        <a className="logo" href="#">
          Raksha<span className="surname">Sinha</span>
        </a>

        {/* Desktop Nav */}
        <div className={`nav-category ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        {/* Ask Rhea button */}
        <a
          className="bot"
          href="#rhea"
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event("openRhea"));
          }}
        >
          Ask Rhea
        </a>

        {/* Hamburger / Cross toggle */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <i className="fas fa-times"></i>  
          ) : (
            <i className="fas fa-bars"></i>    
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
