import { NavLink } from 'react-router-dom';

  function Navbar() {
    return (
      <nav className=" p-4">
        <ul className="flex justify-center space-x-8">
          <li><NavLink exact to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/education" className="nav-link">Education</NavLink></li>
          <li><NavLink to="/experience" className="nav-link">Experience</NavLink></li>
          <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
          <li><NavLink to="/skills" className="nav-link">Skills</NavLink></li>
          <li><NavLink to="/resume" className="nav-link">Resume</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
   